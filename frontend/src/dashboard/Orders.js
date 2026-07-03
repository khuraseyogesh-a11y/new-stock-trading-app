
import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const Orders = () => {
let [allOrders , setAllOrders]=useState([]);

useEffect(()=>{
  axios.get(`${process.env.REACT_APP_API_URL}/allOrders`,{
      withCredentials:true
  }).then((res)=>{
    setAllOrders(res.data);
  })
},[])

if(allOrders.length==0){
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
}else{
  return(
  <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
           
          </tr>

          {allOrders.map((order,index)=>{
          

             return(
              <tr>
                 <th>{order.name}</th>
            <td>{order.qty}</td>
            <td>{order.price}</td>
            <td>{order.mode}</td>
          
          
              </tr>
             )
          })}
        </table>
      </div>
  )
}
};

export default Orders;