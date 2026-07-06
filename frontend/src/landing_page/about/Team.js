import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row mb-5  '>
                <h1 className='text-center  mt-5 '>People</h1>
            </div>
            <div className='row p-5  mt-5 text-muted' style={{margin:"6%", fontSize:"18px",lineHeight:"32px", lineWidth:"20px"}}>
                <div className='col-5  ' >
                    <img src='media/images/nithinKamath.jpg' alt="funder" style={{borderRadius:"100%", width:"70%" ,marginLeft:"20%"}} />
                    <h5 style={{marginLeft:"30%", marginTop:"5%"}}>Nithin Kamath</h5>
                    <h7 style={{marginLeft:"30%"}}>Founder, CEO</h7>
                </div>
                <div className='col-6  '>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>

            </div>
        </div>
    );
}

export default Team;