import React from 'react';

function Hero() {
    return ( 
        <div className='container p-4 p-lg-5 mb-5'>
             <div className='row text-center justify-content-center'>
                    <img src='media/images/homehero.png' alt='Hero Image' className='img-fluid mb-5' style={{ maxWidth: "80%" }} />
                    <h1 className='mt-5 fs-2 fs-lg-1'>Invest in everything</h1>
                    <p className='fs-5 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETF, bonds, and more.</p>
                    <button className='p-2 btn btn-primary fs-5 mb-5 mt-3' style={{ minWidth: "180px", maxWidth: "260px", margin: "0 auto" }}>Signup Now</button>
             </div>
        </div>
     );
}

export default Hero;