import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 text-center mb-5'>
            <div className='row'>
                <img src= "media/Images/homeHero.png" className="mb-5 " />
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks,derivatives, mutual funds,more</p>
                <button className='btn btn-primary col-2 fs-5' style={{margin:"0 auto"}}>Sign up now</button>
            
             
             </div>
        </div>

     );
}

export default Hero;