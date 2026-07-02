import React from 'react';

function Hero() {
    return ( 
       <section className="container-fluid" id="supportHero">
      <div className="p-4 " id="supportWrapper">
        <h4 >Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-6 p-3 ">
          <h3 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input placeholder="Eg. how do I activate F&O" className='mb-4 mt-4' />
          <br />
          <a href="" style={{marginRight:"20px"}}>Track account opening</a>
          <a href=""style={{marginRight:"20px"}}>Track segment activation</a>
          <a href=""style={{marginRight:"20px"}}>Intraday margins</a><br></br>
          <a href=""style={{marginRight:"20px"}}>Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className='mt-4'>
              <a href=""  >Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className='mt-4'>
              <a href=""  >Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
     );
}

export default Hero;