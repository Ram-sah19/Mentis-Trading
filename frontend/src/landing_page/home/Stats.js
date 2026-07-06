import React from 'react';

function Stats() {
    return (
        <div className='container p-2'>
            <div className='row p-5'>
                <div className='col-6 p-5 mb-5'>
                    <h1 className='fs-2 mb-5'>Trust and confidence</h1>
                    <h2 className='fs-4' >Custormer-first always</h2>
                    <p className='text-muted ' style={{fontSize:"17px"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like </p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' alt="ecosystem" style={{width:"90%"}} />
                    <div className='text-center'>
                        <a href='' className='mr-5' style={{textDecoration:"None"}}>Explore our product <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{textDecoration:"None"}}>Try kite</a>
                    </div>

                </div>

            </div>

        <div className='container-fluid p-2 row  align-items-center  ' style={{ backgroundColor: "#ddecfd" }}>
            <div className='col-2 ms-5'><img src ='/media/images/kc-logo-landing.svg'/></div>
            <div className='col-6 me-2 ms-4' style={{fontSize:'15px'}}><p>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more <a href='' style={{textDecoration:"None"}}>Explore <i class="fa-solid fa-arrow-right"></i></a></p></div>
            <div className='col-1 w-10 h-1' ><img src='media/images/kc-banner-image.svg'/></div>
        </div>
        </div>
    
    );
}

export default Stats;