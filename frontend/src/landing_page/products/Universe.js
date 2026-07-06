import React from 'react';
function Universe() {
    return ( 
            <div className='container'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms

                </p>
                <div className='col-4 p-3'>
                    <img src= "media/Images/smallcaseLogo.png" alt=""style={{width :"40%", marginTop:"16px"}} />
                    <p className='text-small text-muted'>Thermatic investing platform </p>
                </div>
                <div className='col-4'>
                    <img src= "media/Images/streakLogo.png" alt="" style={{width :"40%", marginTop:"16px"}}/>
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3'>
                    <img src= "media/Images/sensibullLogo.svg" alt="" style={{width :"40%", marginTop:"16px"}}/>
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src= "media/Images/zerodhaFundhouse.png" alt="" style={{width :"40%", marginTop:"16px"}}/>
                    <p className='text-small text-muted'>Asset Management</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src= "media/Images/goldenpiLogo.png" alt="" style={{width :"40%", marginTop:"16px"}} />
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src= "media/Images/dittoLogo.png" alt="" style={{width :"40%", marginTop:"16px"}}/>
                    <p className='text-small text-muted'>Insure</p>
                </div>
                <button className=' mt-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Universe;