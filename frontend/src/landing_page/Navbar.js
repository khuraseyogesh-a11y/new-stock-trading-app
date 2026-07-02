import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return ( 
        
            <nav class="navbar navbar-expand-lg border-bottom" style={{backgroungColor:"#FFF"}}>
  <div class="container p=2">
    <a class="navbar-brand" href="#">
       <Link to={'/.'} > <img src="Media/Images\logo.svg" style={{width:"25%"}} /></Link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <form class="d-flex" role="search">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/signup'}>SignUp</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'/about'}>About</Link>
        </li>
        <li class="nav-item ">
          <Link class="nav-link " to={'/product'} >
            Product
          </Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link " to={'/pricing'}>Pricing</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link " to={'/support'}>Support</Link>
        </li>
      </ul>
     
        
      </form>
    </div>
  </div>
</nav>
        
     );
}

export default Navbar;