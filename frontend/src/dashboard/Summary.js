import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Summary = () => {
  
  const [stock,setStock]=useState([]);
  const[account,setAccount]=useState();
  useEffect(()=>{
    axios.get("http://localhost:8080/allHoldings",{
      withCredentials:true,
    }).then((res)=>{
      setStock(res.data);
    });

    axios.get("http://localhost:8080/funds",{
    withCredentials:true,
  }).then((res)=>{
    setAccount(res.data);
  })
  },[]);

  
  const totalInvestment = stock.reduce((sum, item) => {
    return sum + item.avg * item.qty;
}, 0);

const totalCurrentValue = stock.reduce((sum, item) => {
    return sum + item.price * item.qty;
}, 0);

const totalPnL = totalCurrentValue - totalInvestment;

const totalHoldings = stock.length;
  return (
    <>
    
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{account?.margin}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{account?.usedMargin}</span>{" "}
            </p>
            <p>
              Opening balance <span>{account?.openBalance}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({ totalHoldings})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {totalPnL} <small>0.0%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{totalCurrentValue.toFixed(2)}</span>{" "}
            </p>
            <p>
              Investment <span>{totalInvestment.toFixed(2)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;


