import React from 'react';

function CreateTicket() {
    return (
        <div className="container mt-5 py-5">
            <h3 className="fs-4 text-muted fw-normal mb-5">To create a ticket, select a relevant topic</h3>
            
            <div className="row g-5">
                {/* 1. Account Opening */}
                <div className="col-lg-4 col-md-6 col-12">
                    <h5 className="fs-5 text-dark fw-normal mb-3">
                        <i className="fa-solid fa-circle-plus me-2 text-muted"></i> Account Opening
                    </h5>
                    <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
                        <a href="#" className="text-decoration-none text-primary">Getting started</a>
                        <a href="#" className="text-decoration-none text-primary">Online Account Opening</a>
                        <a href="#" className="text-decoration-none text-primary">Offline Account Opening</a>
                        <a href="#" className="text-decoration-none text-primary">Charges at Zerodha</a>
                        <a href="#" className="text-decoration-none text-primary">Individual Account Opening</a>
                        <a href="#" className="text-decoration-none text-primary">Non-Individual Account Opening</a>
                    </div>
                </div>

                {/* 2. Your Zerodha Account */}
                <div className="col-lg-4 col-md-6 col-12">
                    <h5 className="fs-5 text-dark fw-normal mb-3">
                        <i className="fa-regular fa-user me-2 text-muted"></i> Your Zerodha Account
                    </h5>
                    <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
                        <a href="#" className="text-decoration-none text-primary">Login credentials</a>
                        <a href="#" className="text-decoration-none text-primary">Your Profile</a>
                        <a href="#" className="text-decoration-none text-primary">Demat account and UCC</a>
                        <a href="#" className="text-decoration-none text-primary">Transfer and conversion of shares</a>
                        <a href="#" className="text-decoration-none text-primary">Nomination</a>
                        <a href="#" className="text-decoration-none text-primary">Resident to NRI</a>
                    </div>
                </div>

                {/* 3. Trading and Markets */}
                <div className="col-lg-4 col-md-6 col-12">
                    <h5 className="fs-5 text-dark fw-normal mb-3">
                        <i className="fa-solid fa-chart-line me-2 text-muted"></i> Trading and Markets
                    </h5>
                    <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
                        <a href="#" className="text-decoration-none text-primary">Trading FAQs</a>
                        <a href="#" className="text-decoration-none text-primary">Kite</a>
                        <a href="#" className="text-decoration-none text-primary">Margins</a>
                        <a href="#" className="text-decoration-none text-primary">Product and order types</a>
                        <a href="#" className="text-decoration-none text-primary">Corporate actions</a>
                        <a href="#" className="text-decoration-none text-primary">Kite features</a>
                    </div>
                </div>

                {/* 4. Funds */}
                <div className="col-lg-4 col-md-6 col-12">
                    <h5 className="fs-5 text-dark fw-normal mb-3">
                        <i className="fa-solid fa-wallet me-2 text-muted"></i> Funds
                    </h5>
                    <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
                        <a href="#" className="text-decoration-none text-primary">Fund withdrawal</a>
                        <a href="#" className="text-decoration-none text-primary">Adding funds</a>
                        <a href="#" className="text-decoration-none text-primary">Adding bank accounts</a>
                        <a href="#" className="text-decoration-none text-primary">eMandates</a>
                    </div>
                </div>

                {/* 5. Console */}
                <div className="col-lg-4 col-md-6 col-12">
                    <h5 className="fs-5 text-dark fw-normal mb-3">
                        <i className="fa-solid fa-circle-info me-2 text-muted"></i> Console
                    </h5>
                    <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
                        <a href="#" className="text-decoration-none text-primary">IPO</a>
                        <a href="#" className="text-decoration-none text-primary">Portfolio</a>
                        <a href="#" className="text-decoration-none text-primary">Ledger</a>
                        <a href="#" className="text-decoration-none text-primary">Reports</a>
                        <a href="#" className="text-decoration-none text-primary">Tax filing</a>
                        <a href="#" className="text-decoration-none text-primary">Profile and settings</a>
                    </div>
                </div>

                {/* 6. Coin */}
                <div className="col-lg-4 col-md-6 col-12">
                    <h5 className="fs-5 text-dark fw-normal mb-3">
                        <i className="fa-solid fa-coins me-2 text-muted"></i> Coin
                    </h5>
                    <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
                        <a href="#" className="text-decoration-none text-primary">Understanding mutual funds</a>
                        <a href="#" className="text-decoration-none text-primary">About Coin</a>
                        <a href="#" className="text-decoration-none text-primary">Buying and Selling Mutual Funds</a>
                        <a href="#" className="text-decoration-none text-primary">Managing Funds</a>
                        <a href="#" className="text-decoration-none text-primary">Coin App</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
