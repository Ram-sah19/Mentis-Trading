import React from 'react';

function Openaccount() {
    return ( 
        <div className='container p-4 p-lg-5 mb-5'>
             <div className='row text-center justify-content-center'>
                    <h1 className='mt-5 mb-3 fs-2 text-dark'>Open a Zerodha account</h1>
                    <p className='mb-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button className='btn btn-primary fs-5 mb-5 mt-2' style={{ minWidth: "200px", maxWidth: "280px", margin: "0 auto" }}>Sign up for free</button>
             </div>
        </div>
     );
}

export default Openaccount;