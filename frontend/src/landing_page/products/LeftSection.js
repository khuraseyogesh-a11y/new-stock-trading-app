import React from 'react';

function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
       <div className='container'>
        <div className='row p-5 mt-3'>
            <div className='col-5 '>
                <img src={imageUrl} />
            </div>
            <div className='col-2 '></div>
            <div className='col-5  '>
                <h1 className='mt-5'>{productName}</h1>
                <p>{productDescription}</p>

                <div className='mb-2'>
                <a href={tryDemo} style={{ textDecoration:"none"}}>Try demo<i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore} style={{marginLeft:"50px" , textDecoration:"none"}}>Learn more<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                 
                 <div className= 'mt-4'>
                <a href={googlePlay} >
                 <img src='Media\Images\googlePlayBadge.svg' />
                </a>

                <a href={appStore} >
                 <img src='Media\Images\appstoreBadge.svg' style={{marginLeft:"50px"}}/>
                </a>
                </div>
            </div>
        </div>
       </div> 
     );
}

export default LeftSection;