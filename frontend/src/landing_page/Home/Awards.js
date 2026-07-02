import React from 'react';
 function Awards() {

    
    return ( 
        <div className='container mb-5'>

            <div className='row'>
               <div className='col-6 p-5'>

                 <img src="Media/Images/largestBroker.svg" alt="image" />


               </div>
                 <div className='col-6 p-5 mt-5'>
              <h2>Largest stock broker in India</h2>
              <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumns in India daily by trading and investing in: </p>
               <div className='row '>
                   <div className='col-6 '>
                 <ul>
                   <li className='mb-3'>
                    Future and options
                    </li>
                   <li className='mb-3'>
                    Direct mutual funds
                    </li>
                   <li className='mb-2'>
                    Bonds and Gov
                    </li>

                 </ul>

                   </div>
                   <div className='col-6'>
                    <ul>
                   <li className='mb-3'>
                    Stocks and IPO's
                    </li>

                   <li className='mb-3'>
                    Commodity derivatives
                    </li>

                   <li className='mb-2'>
                    Currency derivatives
                    </li>

                 </ul>

                   </div>
               </div>
                 
            <img src="Media\Images\pressLogos.png" style={{width : "70%" }} />
               
               </div>

            </div>
        </div>
     );
 }
 
 export default Awards;