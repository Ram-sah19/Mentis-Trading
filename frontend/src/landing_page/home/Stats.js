import React from 'react';

function Stats() {
    return (
        <div className='container p-2'>
            <div className='row p-5 align-items-center'>
                {/* Text column - stacked on mobile, side-by-side on large screens */}
                <div className='col-lg-6 col-12 p-3 p-lg-5 mb-4 mb-lg-0'>
                    <h1 className='fs-2 mb-5'>Trust and confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted' style={{ fontSize: "17px" }}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India</p>
                    
                    <h2 className='fs-4 mt-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>
                    
                    <h2 className='fs-4 mt-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    
                    <h2 className='fs-4 mt-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                
                {/* Image and link column */}
                <div className='col-lg-6 col-12 text-center p-3'>
                    <img src='media/images/ecosystem.png' alt="ecosystem" className="img-fluid" style={{ maxWidth: "90%" }} />
                    <div className='mt-4 d-flex justify-content-center gap-4 flex-wrap'>
                        <a href='' style={{ textDecoration: "none" }}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{ textDecoration: "none" }}>Try Kite</a>
                    </div>
                </div>
            </div>

            {/* Bottom Kite Connect Promo Banner - Responsive wrapping */}
            <div className='row align-items-center py-4 px-3 rounded shadow-sm' style={{ backgroundColor: "#ddecfd", margin: "20px 0" }}>
                <div className='col-lg-2 col-md-3 col-12 text-center mb-3 mb-lg-0'>
                    <img src='/media/images/kc-logo-landing.svg' alt="Kite Connect logo" className="img-fluid" style={{ maxWidth: "120px" }} />
                </div>
                <div className='col-lg-8 col-md-6 col-12 text-center text-md-start mb-3 mb-lg-0' style={{ fontSize: '15px' }}>
                    <p className="mb-0">
                        Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <a href='' style={{ textDecoration: "none" }}>Explore <i className="fa-solid fa-arrow-right"></i></a>
                    </p>
                </div>
                <div className='col-lg-2 col-md-3 col-12 text-center'>
                    <img src='media/images/kc-banner-image.svg' alt="Banner" className="img-fluid" style={{ maxWidth: "120px" }} />
                </div>
            </div>
        </div>
    );
}

export default Stats;