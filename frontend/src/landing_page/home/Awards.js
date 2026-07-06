import React from 'react';

function Awards() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src = 'media/images/largestBroker.svg' alt='award'/>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stocks broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha cleint contribute to over 15% of all volume in india daily by trading and investing in:</p>
                    <ul>
                        <div className='row'> 
                            <div className='col-6'>

                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </div>
                            <div className='col-6'>
                                <li>Stocks &IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Growths</li>
                            </div>
                        </div>

                    </ul>
                    <img src='media/images/pressLogos.png' alt='descimage' style={{width:"90%"}}/>
                </div>

            </div>

        </div>
    );
}

export default Awards;