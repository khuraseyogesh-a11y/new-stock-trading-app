import React from 'react';
function Education() {
    return ( 
       <div className='container'>
         <div className='row mb-5'>
            <div className='col-6'>
            <img src="Media\Images\education.svg" />
            </div>
            <div className='col-6 p-5 mt-2'>
                <h3 className='mb-4'>Free and open market Education</h3>
                <p className='mb-3'>Varsity,the largest online stock market and education book in the world covering everthing from basics to advanced training.</p>
                <a href='' style={{textDecoration:"none"} } className='mb-3'>Versity <i class="fa-solid fa-arrow-right"></i></a>
                <p className='mb-3'>TradingQ&A, the most active trading and investment community in india for all your market related queries</p>
                <a href='' style={{textDecoration:"none"}} className='mb-3'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>

            </div>
         </div>
       </div>
     );
}

export default Education;