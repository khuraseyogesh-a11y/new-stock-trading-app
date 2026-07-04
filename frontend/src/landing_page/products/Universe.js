import React from 'react';
import { Link } from 'react-router-dom';
function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center text-muted mb-5'>
                <p>Want to konw more about technology stack? Checkout the zerodha.tech blog.</p>
            </div>
            <div className='row text-center'>
                <h1>The Zerodha universe</h1>
                <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center p-5'>
                <div className='col-4'>
                     <img src='Media\Images\smallcaseLogo.png' style={{}} />
                     <p className='text-center p-2 text-muted' style={{fontSize:"15px"}}>Thematic investment platform</p>
                     
                </div>
                <div className='col-4'>
                    <img src='Media\Images\streakLogo.png' style={{width:"40%"}}/>
                     <p className='text-center p-2 text-muted' style={{fontSize:"15px"}}>Algo & strategic platform</p>
                     
                </div>
                <div className='col-4'>
                       <img src='Media\Images\sensibullLogo.svg' style={{width:"40%"}} />
                        <p className='text-center p-2 text-muted' style={{fontSize:"15px"}}>Options trading platform</p>
                     
                </div>
            </div>

            <div className='row text-center p-5'>
                <div className='col-4'>
                     <img src='Media\Images\zerodhaFundhouse.png' style={{width:"50%"}} />
                      <p className='text-center p-2 text-muted' style={{fontSize:"15px"}}>Asset management</p>
                     
                </div>
                <div className='col-4'>
                    <img src='Media\Images\goldenpiLogo.png' style={{width:"50%"}} />
                     <p className='text-center p-2 text-muted' style={{fontSize:"15px"}}>Bonds trading platform</p>
                     
                </div>
                <div className='col-4'>
                       <img src='Media\Images\dittoLogo.png' style={{width:"30%"}} />
                        <p className='text-center p-2 text-muted' style={{fontSize:"15px"}}>Insurance</p>
                     
                </div>
            </div>
            <div className='row p-5 ' style={{display:'flex', justifyContent:"center",alignItems:"center"}}>
                <Link to='/signup'> <button className='btn btn-primary col-2 fs-6' style={{margin:"0 auto"}}>Sign up now</button></Link>
            </div>

        </div>
     );
}

export default Universe;