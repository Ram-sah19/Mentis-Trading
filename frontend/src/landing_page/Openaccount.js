import React from 'react';
function Openaccount() {
    return ( 
        <div className='container p-5  mb-5 '>
             <div className='row text-center'>
                    <img src='media/images/homehero.png' alt='Hero Image' className='mb-5'/>
                    <h1 className='mt-5 mb-4 fs-2 text-muted'>Open a Zerodha account</h1>
                    <p className='mb-4 text-muted p-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button className=' mt-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Sign up for free</button>
             </div>
        </div>

     );
}

export default Openaccount;