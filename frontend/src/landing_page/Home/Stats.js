import React from 'react';

function Stats() {
    return ( 
       <div className='container  p-5'>
        <div className='row p-5'>
         <div className='col-6 p-5'>
          <h1 className='fs-2 mb-5'>Trust with confidence</h1>
          <h2 className='fs-4'>Customar-first always</h2>
          <p className='mb-3 text-muted'>That's why 1.3+ crore customers trust Zerodha with  &#8377;3.5+ lakhs crore worth of equity investments</p>
          <h2 className='fs-4' >No spam or gimmicks</h2>
          <p className='mb-3 text-muted'>No gimmicks, spam,"gamification",or annoying push notification. High quality apps that you use at your pace, the way you like </p>
          <h2 className="fs-4" >The Zerodha universe</h2>
          <p className='mb-3 text-muted'>Not just an  app but a whole ecosystem. Our investments in 30+ fintech startupsoffer you tailored services specific to your needs </p>
          <h2 className='fs-4'>Do better with money</h2>
          <p className='mb-3 text-muted'>With intiatives like Nudge and kill switch,we dont just facilitate transactions, but actively helps you do better with your money</p>
         </div>
         <div className='col-6 p-5'>
            <img src="Media\Images\ecosystem.png"  style={{width:"90%"}}/>
            <div className='text-center'>
                <a href='' className='m-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                <a href='' style={{textDecoration:"none"}}>Try kite <i class="fa-solid fa-arrow-right"></i></a>
               </div>
         </div>
         </div>
       </div>

     );
}

export default Stats;