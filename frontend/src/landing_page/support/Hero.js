import React from 'react';

function Hero() {
    return (
        <div className="container-fluid p-5" style={{ backgroundColor: "#387ed1", color: "#fff" }}>
            <div className="container">
                {/* Navbar links within support header */}
                <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
                    <h4 className="fs-5 fw-semibold mb-0" style={{ letterSpacing: "0.5px" }}>Support Portal</h4>
                    <a href="#" className="text-white text-decoration fs-6">Track tickets</a>
                </div>

                <div className="row">
                    {/* Search and trending links */}
                    <div className="col-lg-7 col-12 mb-4">
                        <h2 className="fs-4 mb-4 fw-normal" style={{ lineHeight: "1.4" }}>
                            Search for an answer or start a ticket to connect with us
                        </h2>
                        
                        {/* Search Input Box */}
                        <div className="position-relative mb-4">
                            <input 
                                type="text" 
                                className="form-control p-3 border-0 rounded" 
                                placeholder="Eg: how do i activate/deactivate segment, IPO, Demat account query..." 
                                style={{ paddingRight: "45px", fontSize: "15px" }}
                            />
                            <i className="fa-solid fa-magnifying-glass position-absolute text-muted" style={{ right: "15px", top: "50%", transform: "translateY(-50%)", fontSize: "18px" }}></i>
                        </div>

                        {/* Trending Links */}
                        <div className="d-flex flex-wrap gap-3 align-items-center" style={{ fontSize: "14px" }}>
                            <a href="#" className="text-white text-decoration">Track ticket</a>
                            <a href="#" className="text-white text-decoration">Track segment activation</a>
                            <a href="#" className="text-white text-decoration">Intraday margins</a>
                            <a href="#" className="text-white text-decoration">Kite user manual</a>
                        </div>
                    </div>

                    {/* Featured news alerts */}
                    <div className="col-lg-5 col-12 ps-lg-5 mb-4">
                        <h4 className="fs-5 mb-3 fw-semibold">Featured</h4>
                        <ol className="ps-3" style={{ fontSize: "15px", lineHeight: "1.8" }}>
                            <li className="mb-2">
                                <a href="#" className="text-white text-decoration">
                                    Scheduled maintenance for Console and Coin
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white text-decoration">
                                    Latest updates / notifications on MCX contracts
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
