import React from 'react';
import { useLocation } from 'react-router-dom';

function SkeletonWrapper() {
    const location = useLocation();
    const path = location.pathname;

    // Helper text line placeholder
    const TextLine = ({ width = "100%", height = "12px", className = "" }) => (
        <div 
            className={`skeleton-bg mb-2 ${className}`} 
            style={{ width, height }}
        />
    );

    // 1. Support Page Skeleton
    if (path === '/support') {
        return (
            <div>
                {/* Hero Blue Banner Placeholder */}
                <div className="container-fluid p-5" style={{ backgroundColor: "#387ed1", opacity: 0.8 }}>
                    <div className="container py-4">
                        <div className="d-flex justify-content-between mb-4">
                            <div className="skeleton-bg" style={{ width: "120px", height: "20px", backgroundColor: "#ffffff40" }} />
                            <div className="skeleton-bg" style={{ width: "80px", height: "15px", backgroundColor: "#ffffff40" }} />
                        </div>
                        <div className="row">
                            <div className="col-md-7 col-12 mb-3">
                                <div className="skeleton-bg mb-3" style={{ width: "85%", height: "28px", backgroundColor: "#ffffff40" }} />
                                <div className="skeleton-bg" style={{ width: "100%", height: "45px", backgroundColor: "#ffffff50", borderRadius: "6px" }} />
                            </div>
                            <div className="col-md-5 col-12 ps-md-5">
                                <div className="skeleton-bg mb-2" style={{ width: "100px", height: "20px", backgroundColor: "#ffffff40" }} />
                                <div className="skeleton-bg mb-2" style={{ width: "90%", height: "14px", backgroundColor: "#ffffff30" }} />
                                <div className="skeleton-bg" style={{ width: "80%", height: "14px", backgroundColor: "#ffffff30" }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ticket Topics Grid Placeholder */}
                <div className="container mt-5 py-4">
                    <TextLine width="250px" height="24px" className="mb-5" />
                    <div className="row g-5">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="col-md-4 col-12">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="skeleton-bg me-2" style={{ width: "24px", height: "24px" }} />
                                    <TextLine width="150px" height="18px" />
                                </div>
                                <TextLine width="80%" />
                                <TextLine width="90%" />
                                <TextLine width="75%" />
                                <TextLine width="85%" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // 2. About Page Skeleton
    if (path === '/about') {
        return (
            <div className="container py-5 mt-5">
                {/* Hero Banner Text Placeholder */}
                <div className="text-center mb-5 pb-5 border-bottom">
                    <div className="d-inline-block" style={{ width: "60%" }}>
                        <TextLine height="24px" className="mx-auto mb-3" width="70%" />
                        <TextLine height="16px" className="mx-auto" width="90%" />
                    </div>
                </div>
                
                {/* Columns Section */}
                <div className="row mb-5 py-3">
                    <div className="col-md-6 col-12 px-5 mb-4">
                        <TextLine height="14px" className="mb-2" />
                        <TextLine height="14px" className="mb-2" />
                        <TextLine height="14px" className="mb-2" />
                        <TextLine height="14px" width="80%" />
                    </div>
                    <div className="col-md-6 col-12 px-5 mb-4">
                        <TextLine height="14px" className="mb-2" />
                        <TextLine height="14px" className="mb-2" />
                        <TextLine height="14px" className="mb-2" />
                        <TextLine height="14px" width="80%" />
                    </div>
                </div>

                {/* Team Avatars Grid */}
                <div className="text-center mt-5 pt-5">
                    <TextLine height="22px" className="mx-auto mb-4" width="200px" />
                    <div className="row justify-content-center mt-5">
                        {[1, 2].map((i) => (
                            <div key={i} className="col-md-4 col-12 d-flex flex-column align-items-center mb-4">
                                <div className="skeleton-bg skeleton-circle mb-3" style={{ width: "150px", height: "150px" }} />
                                <TextLine width="120px" height="18px" className="mb-2" />
                                <TextLine width="80px" height="12px" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // 3. Products Page Skeleton
    if (path === '/product') {
        return (
            <div className="container py-5 mt-5">
                {/* Hero */}
                <div className="text-center mb-5 pb-5">
                    <TextLine height="30px" className="mx-auto mb-3" width="300px" />
                    <TextLine height="16px" className="mx-auto mb-2" width="400px" />
                    <TextLine height="14px" className="mx-auto" width="200px" />
                </div>

                {/* Alternating layouts */}
                {[1, 2].map((val) => (
                    <div key={val} className="row align-items-center py-5 my-4">
                        {val % 2 === 1 ? (
                            <>
                                <div className="col-md-6 col-12 text-center mb-4">
                                    <div className="skeleton-bg mx-auto" style={{ width: "85%", height: "250px", borderRadius: "8px" }} />
                                </div>
                                <div className="col-md-6 col-12 px-5">
                                    <TextLine height="22px" width="180px" className="mb-3" />
                                    <TextLine height="14px" className="mb-2" />
                                    <TextLine height="14px" className="mb-2" />
                                    <TextLine height="14px" width="80%" className="mb-4" />
                                    <div className="d-flex gap-3">
                                        <div className="skeleton-bg" style={{ width: "120px", height: "36px" }} />
                                        <div className="skeleton-bg" style={{ width: "120px", height: "36px" }} />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-md-6 col-12 px-5 order-2 order-md-1">
                                    <TextLine height="22px" width="180px" className="mb-3" />
                                    <TextLine height="14px" className="mb-2" />
                                    <TextLine height="14px" className="mb-2" />
                                    <TextLine height="14px" width="80%" className="mb-4" />
                                    <div className="skeleton-bg" style={{ width: "140px", height: "36px" }} />
                                </div>
                                <div className="col-md-6 col-12 text-center mb-4 order-1 order-md-2">
                                    <div className="skeleton-bg mx-auto" style={{ width: "85%", height: "250px", borderRadius: "8px" }} />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    // 4. Pricing Page Skeleton
    if (path === '/pricing') {
        return (
            <div className="container py-5 mt-5">
                {/* Hero */}
                <div className="text-center mb-5">
                    <TextLine height="30px" className="mx-auto mb-3" width="220px" />
                    <TextLine height="16px" className="mx-auto" width="380px" />
                </div>

                {/* Cards grid */}
                <div className="row g-4 justify-content-center mt-5 mb-5">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="col-md-4 col-12 mb-4">
                            <div className="border rounded p-4 text-center d-flex flex-column align-items-center">
                                <div className="skeleton-bg mb-4" style={{ width: "80px", height: "80px", borderRadius: "8px" }} />
                                <TextLine width="140px" height="18px" className="mb-3" />
                                <TextLine width="85%" height="12px" className="mb-2" />
                                <TextLine width="70%" height="12px" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // 5. Signup & Login Page Skeleton
    if (path === '/signup' || path === '/login') {
        return (
            <div className="container py-5 mt-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 col-12 text-center mb-4">
                        <div className="skeleton-bg mx-auto" style={{ width: "90%", height: "320px", borderRadius: "8px" }} />
                    </div>
                    <div className="col-md-5 col-12 px-4">
                        <TextLine height="26px" width="180px" className="mb-3" />
                        <TextLine height="14px" width="260px" className="mb-4" />
                        <div className="mb-3">
                            <div className="skeleton-bg mb-2" style={{ width: "100px", height: "14px" }} />
                            <div className="skeleton-bg" style={{ width: "100%", height: "40px", borderRadius: "6px" }} />
                        </div>
                        <div className="skeleton-bg mt-4" style={{ width: "150px", height: "40px", borderRadius: "4px" }} />
                    </div>
                </div>
            </div>
        );
    }

    // 6. Default / Home Page Skeleton fallback
    return (
        <div className="container py-5 mt-5">
            {/* Hero area */}
            <div className="text-center mb-5 pb-5">
                <div className="skeleton-bg mx-auto mb-4" style={{ width: "70%", height: "350px", borderRadius: "10px" }} />
                <TextLine height="28px" className="mx-auto mb-3" width="260px" />
                <TextLine height="16px" className="mx-auto mb-4" width="420px" />
                <div className="skeleton-bg mx-auto" style={{ width: "160px", height: "45px", borderRadius: "4px" }} />
            </div>

            {/* Content row placeholder */}
            <div className="row py-5 border-top">
                <div className="col-md-6 col-12 text-center mb-4">
                    <div className="skeleton-bg mx-auto" style={{ width: "80%", height: "240px" }} />
                </div>
                <div className="col-md-6 col-12 px-5">
                    <TextLine height="22px" width="220px" className="mb-3" />
                    <TextLine height="14px" className="mb-2" />
                    <TextLine height="14px" className="mb-2" />
                    <TextLine height="14px" width="90%" className="mb-3" />
                    <div className="d-flex gap-3">
                        <TextLine width="100px" height="14px" />
                        <TextLine width="100px" height="14px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonWrapper;
