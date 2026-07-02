import React from 'react';

function RightSection({productName, productUrl, productDescription, learnMore}) {
    return ( 
          <div className='container'>
        <div className='row  mt-5 mb-5'>
            <div className='col-5 p-5' style={{marginTop:"80px"}}>
                <h1 className='mt-4'>{productName}</h1>
                <p className='text-muted'>{productDescription}</p>

              
                <a href={learnMore} style={{ textDecoration:"none"}}>Learn more<i class="fa-solid fa-arrow-right"></i></a>
               
                
            </div>
           <div className='col-1'></div>
            <div className='col-6  '>
                
                 <img src={productUrl} style={{marginBottom:"50px"}} />
                 
            </div>
        </div>
       </div> 
     );
}

export default RightSection;