import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";



import "./BuyActionWindow.css";

const AddFunds = () => {
    let[amount,setAmount]=useState();

  return (
    <div className="order-window-container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          
          
          <fieldset>
            <legend>Amount</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="100"
             
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Add funds to start trading</span>
        <div>
          <Link className="buy-btn btn-blue"  >
            Add
          </Link>
          <Link to="" className="buy-btn btn-grey" >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddFunds;