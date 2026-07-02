import React from 'react';

function Hero() {
    return ( 
      <div className='container '>
        <div className='row text-center p-5 mt-3 border-bottom'>
            <h1>Pricing</h1>
            <h5 className='p-4 text-muted'>Free equity investments and flat &#8377;20 traday and F&O trades</h5>
        </div>
        <div className='row  mt-2'></div>
        <div className='row p-5 mt-5'>
            <div className='col p-3 text-center'>
            <img src='Media\Images\pricing0.svg' />
            <h1 className="fs-3 ">Free equity delivery</h1>
            <p className="text-muted ">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
            </div>
            <div className='col p-3 text-center'>
            <img src='Media\Images\intradayTrades.svg' />
            <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
            </div>
            <div className='col p-3 text-center'>
              <img src='Media\Images\pricingMF.svg' />
               <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
            </div>
        </div>
            <div className='row  mt-4'></div>
            <div className='row'>

            </div>

      </div>
     );
}

export default Hero;