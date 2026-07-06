import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-4 p-lg-5'>
            <div className='row p-2 p-lg-5 align-items-center'>
                {/* Left Text Column */}
                <div className='col-lg-5 col-12 mb-5 mb-lg-0 pr-lg-5'>
                    <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{ textDecoration: "none" }}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                
                {/* Right Pricing Icon Grid Column */}
                <div className='col-lg-7 col-12'>
                    <div className='row align-items-center g-4'>
                        {/* 1. Free Account Opening */}
                        <div className='col-md-4 col-12 text-center'>
                            <div className="p-3 border rounded h-100 d-flex flex-column align-items-center justify-content-center">
                                <img src='media/images/pricing-eq (1).svg' alt='free account' className="mb-2" style={{ width: "45px" }} /> 
                                <p className="mb-0 text-muted" style={{ fontSize: "12px" }}>Free account opening</p>
                            </div>
                        </div>
                        
                        {/* 2. Free Equity Delivery */}
                        <div className='col-md-4 col-12 text-center'>
                            <div className="p-3 border rounded h-100 d-flex flex-column align-items-center justify-content-center">
                                <img src='media/images/pricing-eq.svg' alt='free equity' className="mb-2" style={{ width: "45px" }} />
                                <p className="mb-0 text-muted" style={{ fontSize: "12px" }}>Free equity delivery and direct mutual funds</p>
                            </div>
                        </div>

                        {/* 3. Intraday and F&O */}
                        <div className='col-md-4 col-12 text-center'>
                            <div className="p-3 border rounded h-100 d-flex flex-column align-items-center justify-content-center">
                                <img src="media/images/other-trades.svg" alt="intraday" className="mb-2" style={{ width: "45px" }} />
                                <p className="mb-0 text-muted" style={{ fontSize: "12px" }}>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;