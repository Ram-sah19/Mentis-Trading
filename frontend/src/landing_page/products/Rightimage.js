import React from 'react';
function Rightimage({    
    imageURL,
    prodcutName, 
    productDescription, 
    learnMore, }) {
    return (
            <div className='container'>
            <div className='row '>
                
                <div className='col-6 p-5 mt-5'>
                    <h1>{prodcutName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore}>Learn more</a>
                    </div>

                </div>
                <div className='col-6 p-5'>
                    <img src={imageURL} alt={prodcutName || ''} />
                </div>
            </div>
        </div>
     );
}

export default Rightimage;