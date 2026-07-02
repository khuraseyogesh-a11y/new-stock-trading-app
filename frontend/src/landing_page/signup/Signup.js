import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import { SignUpForm } from './signUpForm';
import { LoginForm } from './loginForm';


function SignUp() {
    let [isForm,setIsForm]=useState("");
    function handleSignUpForm(){
        setIsForm("signup");
    }

    function handleLoginForm(){
        setIsForm("login");
    }

    return ( 
       <div className='container'>
        <div className='row text-center '>
        
        <button type="button" className="btn btn-primary signUpwidth " onClick={handleLoginForm}>Login</button>
        
        <button type="button" className="btn btn-primary signUpwidth" onClick={handleSignUpForm}>Sign Up</button>
      </div>
      <div className='row'>
         {
            (isForm=="signup" && <SignUpForm/>)
         }
         {
            (isForm=="login" && <LoginForm />)
         }
      </div>
       </div>
     );
}

export default SignUp;




      