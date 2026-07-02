import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddFunds from "./AddFunds";
import axios from "axios";

const Funds = () => {
let[account, setAccount]=useState();




useEffect(()=>{
   axios.get("http://localhost:8080/funds",{
    withCredentials:true,
  }).then((res)=>{
    setAccount(res.data);
  })
},[])



async function handleCreateButton(){
 await axios.post("http://localhost:8080/account",{},{
  withCredentials:true,
 })
}

function handleAddFunds(){
 

}


if(!account){
   return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't Created wallet for transactions</p>
  
          <button className="btn btn-primary" onClick={handleCreateButton}>Create Account</button>
        </div>
      </div>
    );
}else{
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link  className="dash-btn btn-green" onClick={handleAddFunds}>Add funds</Link>
        <Link className="dash-btn btn-blue">Withdraw</Link>
      </div>
      
       
      <div className="dash-row">
        <div className="dash-col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{account.margin}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{account.usedMargin}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{account.cash}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{account.openBalance}</p>
            </div>
            
            <div className="data">
              <p>Payin</p>
              <p>{account.payin}</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>{account.span}</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>{account.delivery}</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>{account.exposure}</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>{account.premium}</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>{account.colleteral}</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>{account. colleteralEquity}</p>
            </div>
            <div className="data">
              <p>Total</p>
              <p>{account.total}</p>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
}
};

export default Funds;