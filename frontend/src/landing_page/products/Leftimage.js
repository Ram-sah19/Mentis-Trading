import React from 'react';
function Leftimage({
    imageURL,
    prodcutName, 
    productDescription, 
    tryDemo, 
    learnMore, 
    googlePlay, 
    appStore}) {
    return ( 
        <div className='container'>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src={imageURL} alt={prodcutName || ''} />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{prodcutName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try demo</a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>Learn more</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src ="media/Images/googlePlayBadge.svg" alt='' /></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src ="media/Images/appstoreBadge.svg" alt=''/></a>

                    </div>

                </div>
            </div>
        </div>

     );
}

export default Leftimage;