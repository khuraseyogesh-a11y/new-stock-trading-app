import React from 'react';
function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='text-center mt-5 p-5'>
             <h1>Technology</h1>
             <h3 className='text-muted mt-3 fs-4'  >Sleek , modern and intuitive trading platform</h3>
             <p className='mt-3'>Checkout our {" "}
                <a href='' style={{textDecoration:"none"}} >Investment offerings {" "}
                    <i class="fa-solid fa-arrow-right"></i></a>

             </p>

            </div>
        </div>
     );
}

export default Hero;