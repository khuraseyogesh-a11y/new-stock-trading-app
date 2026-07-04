
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export function LoginForm(e){
 
  let[username,setUsername]=useState("");
  let[password,setPassword]=useState("");
  let[error,setError]=useState(false);
const navigate = useNavigate();
 async function  handleFormSubmit(e){
   e.preventDefault();
   console.log("yes button clicked");
    axios.post(
  `${process.env.REACT_APP_API_URL}/login`,
  {
    username:username,
    password:password,
  },
  {
        withCredentials: true
    }
  
).then((res)=>{
  console.log(res.data);
  if(res.data.success){
    navigate("/dashboard");
  }
  
}).catch((err) => {

  setUsername("");
  setPassword("");
  alert("Please Enter correct Username and password ")
        console.log("Error");
        console.log(err);
        console.log(err.response?.data);
    });



  }

    return (
      <div>
        { <div className='container p-5  mb-5'>
         <form onSubmit={handleFormSubmit}>
            <div class="m-5">
    <label for="Username" class="form-label">Username</label>
    <input type="text" class="form-control" id="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
  </div>
  
  <div class="m-5">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  onChange={(e) => setPassword(e.target.value)} value={password}/>
  </div>
   
    <button type="submit" className="btn btn-primary  signUpwidth" >Log In</button>
</form>
        </div> }            
      </div>
    )
}
