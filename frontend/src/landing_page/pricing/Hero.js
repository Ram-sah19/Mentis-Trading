import React from 'react';
function Hero() {
    return ( 
        <div className='container'>

            <div className='row p-5 border-bottom mt-5 text-center' >
                <h1>Pricing</h1>
                <p className='text-small text-muted'>Free equity investments and flat 20 trady and F&O trades</p>
                <div className='row p-5 mt-5 border-top'>
                    <div className='col-4  mt-5'>
                    <img src="media/Images/pricingEquity.svg" alt="0image" style={{width:"75%"}}/>
                    <h2 className='fs-3 text-muted'>Free equity devilvery</h2>
                    <p className='text-muted text-small'>All equity delivery investments (NSE, BSE), are absolutely free - 0 brokerage</p>
                    </div>
                    <div className='col-4  mt-5'>
                    <img src="media/Images/intradayTrades.svg" alt="0image"style={{width:"75%"}}/>
                    <h2 className='fs-3 text-muted'>Intraday and F&O trades</h2>
                    <p className='text-muted text-small'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    
                    </div>
                    <div className='col-4  mt-5'>
                    <img src="media/Images/pricingEquity.svg" alt="0image" style={{width:"75%"}}/>
                    <h2 className='fs-3 text-muted ' >Free direct MF</h2>
                    <p className='text-muted text-small'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges</p>
                    
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Hero;