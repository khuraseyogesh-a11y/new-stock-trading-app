import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";

export function SignUpForm(){
  let [username,setUsername]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");

  function handleFormSubmit(){
    axios.post("http://localhost:8080/signup",{
      username:username,
      email,email,
      password,password,
    });
    
  }

    return (
      <div>
        { <div className='container p-5  mb-5'>
         <form onSubmit={handleFormSubmit}>
            <div class="m-5">
    <label for="Username" class="form-label">Username</label>
    <input type="text" name="username" class="form-control" id="Username" onChange={(e) => setUsername(e.target.value)}
              value={username}/>
  </div>
  <div class="m-5">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}
              value={email}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="m-5">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1"  onChange={(e) => setPassword(e.target.value)}
              value={password}/>
  </div>
 
    <button type="submit" className="btn btn-primary  signUpwidth" >Sign Up</button>
</form>
        </div> }            
      </div>
    )
}


