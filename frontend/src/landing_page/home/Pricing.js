import React from 'react';
function Pricing() {
    return ( 
        <div className='container p-5 align-items-center'>
            <div className='row p-5 align-items-center'>
                <div className='col-5 p-1'>
                    <h1 className='mb-6 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted mb-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='' style={{textDecoration:"None"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-6 d-flex flex-wrap align-items-center gap-2'>
                    <div className='col-4 d-flex align-items-center ' >
                        <img src='media/images/pricing-eq (1).svg' alt='free account' style={{ width: "60%"}}/> 
                        <p className="mb-0" style={{ fontSize: "12px " ,marginTop:"20px" }}>Free account<br></br> opening</p>
                    </div>
                    <div className='col-6 d-flex align-items-center '>
                        <img src='media/images/pricing-eq.svg' alt='free equity' style={{ width: "39%", height: "" }}/>
                        <p className="mb-0" style={{ fontSize: "12px" ,marginTop:"15px"}}>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="w-100 d-flex  align-items-center">
                         <img
                         src="media/images/other-trades.svg"
                         alt="intraday"
                             style={{ width: "17%" }} />
                            <p className="mb-0"  style={{ fontSize: "12px", marginLeft:"14px" }}>Intraday and <br></br>F&O</p>
                    </div>
                    
                </div>
            

            </div>

        </div>

     );
}

export default Pricing;