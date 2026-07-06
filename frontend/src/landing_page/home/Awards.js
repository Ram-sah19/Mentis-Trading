import React from 'react';

function Awards() {
    return (
        <div className='container mt-lg-5 p-4 p-lg-5'>
            <div className='row align-items-center'>
                {/* Left image column */}
                <div className='col-lg-6 col-12 text-center mb-4 mb-lg-0'>
                    <img src='media/images/largestBroker.svg' alt='award' className="img-fluid" style={{ maxWidth: "90%" }} />
                </div>
                
                {/* Right text content column */}
                <div className='col-lg-6 col-12'>
                    <h1 className="fs-2 mb-3">Largest stocks broker in India</h1>
                    <p className='mb-4 text-muted'>2+ million Zerodha clients contribute to over 15% of all retail volume in India daily by trading and investing in:</p>
                    
                    <div className='mb-4'>
                        <div className='row' style={{ paddingLeft: "15px" }}> 
                            <div className='col-6 mb-2'>
                                <ul className="ps-3 mb-0">
                                    <li className="mb-2">Futures & Options</li>
                                    <li className="mb-2">Commodity derivatives</li>
                                    <li className="mb-2">Currency derivatives</li>
                                </ul>
                            </div>
                            <div className='col-6 mb-2'>
                                <ul className="ps-3 mb-0">
                                    <li className="mb-2">Stocks & IPOs</li>
                                    <li className="mb-2">Direct mutual funds</li>
                                    <li className="mb-2">Bonds and Govt. Securities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <img src='media/images/pressLogos.png' alt='press logos' className="img-fluid mt-3" style={{ width: "90%", maxWidth: "450px" }} />
                </div>
            </div>
        </div>
    );
}

export default Awards;