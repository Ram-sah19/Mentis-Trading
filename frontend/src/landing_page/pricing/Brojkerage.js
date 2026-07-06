import React from 'react';
function Brojkerage() {
    return (  
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4'>
                    <a href='' alt="hs"><p className=' fs-5 text-cnter'>Brokerage Calculator</p></a>
                    <ul className="text-muted" style={{textAlign:"left", lineHeight:"2.5"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of 50 + GST per order.</li>
                        <li>Digital contract notes wil be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged 20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (nonPIS), 0.5% or 100 per executed order for equilty (whichever is lower).</li>
                        <li>If the account is is debut  balance, any order placed will be charged 40 per executed instead of 20 per excuted order</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href=''><p className='fs-5 text-cnter'>List of charges</p></a>
                </div>
            </div>

        </div>
    );
}

export default Brojkerage;