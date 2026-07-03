
import React from "react";
import axios from "axios";
import { useState } from "react";
// import { holdings } from "../data/data";
import { useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
const Holdings = () => {
let[allHoldings ,setAllHoldings]=useState([]);

useEffect(()=>{
  axios.get(`${process.env.REACT_APP_API_URL}/allHoldings`,{
    withCredentials:true
  }).then((res)=>{
    setAllHoldings(res.data);
    console.log(res.data);
  })
},[])

  const totalInvestment = allHoldings.reduce((sum, item) => {
    return sum + item.avg * item.qty;
}, 0);

const totalCurrentValue = allHoldings.reduce((sum, item) => {
    return sum + item.price * item.qty;
}, 0);

const totalPnL = totalCurrentValue - totalInvestment;


const labels = allHoldings.map((subArray) => subArray["name"]);


const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <>
      <h3 className="title">{allHoldings.length} (13)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock,index)=>{
           const currValue=stock.price*stock.qty;
           const isProfit=currValue*stock.qty-stock.avg*stock.qty >=0.0;
            const profClass= isProfit? "profit" : "loss";
             const dayClass = stock.loss ? "loss" : "profit";

             return(
              <tr>
                 <th>{stock.name}</th>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{currValue.toFixed(2)}</td>
            <td className={profClass}>
              {(currValue-stock.avg*stock.qty).toFixed(2)}
            </td>
             <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
             )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
           {totalInvestment.toFixed(2)}{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
           {totalCurrentValue.toFixed(2)}{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{totalPnL}(+0.00%)</h5>
          <p>PNL</p>
        </div>
      </div>
       <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;