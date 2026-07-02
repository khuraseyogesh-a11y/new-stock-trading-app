import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4 p-5'>
                    <h2 className='mb-4'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India .Flat fees and no hidden charges </p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                    <div className='col-6 p-4 text-center border'>
                        <h2 className='mb-3'>&#8377;0</h2>
                    <p>Free equity delivery and  <br/> direct mutual funds.</p>
                    </div>
                    <div className='col-6 p-4  border text-center'>
                        <h2 className='mb-3'>&#8377;20</h2>
                    <p>Intraday and F&O</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;