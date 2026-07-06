import React from 'react';

function Education() {
    return (
        <div className='container my-5'>
            <div className='row align-items-center'>
                {/* Image Column */}
                <div className='col-lg-6 col-12 text-center mb-4 mb-lg-0'>
                    <img src="media/images/education.svg" alt="Education illustration" className="img-fluid" style={{ maxWidth: "85%" }} />
                </div>
                
                {/* Text Content Column */}
                <div className='col-lg-6 col-12 p-4 p-lg-5'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                    <a href='' className="d-inline-block mb-4" style={{ textDecoration: "none" }}>Varsity <i className="fa-solid fa-arrow-right"></i></a>
                    
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{ textDecoration: "none" }}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;