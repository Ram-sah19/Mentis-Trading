import React, { useState } from 'react';

function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState('');
    const [step, setStep] = useState(1); // 1: Credentials, 2: 2FA PIN, 3: Success
    const [error, setError] = useState('');

    const handleCredentialsSubmit = (e) => {
        e.preventDefault();
        if (!userId.trim()) {
            setError('User ID cannot be empty.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        setError('');
        setStep(2); // Go to 2FA PIN step
    };

    const handlePinSubmit = (e) => {
        e.preventDefault();
        const pinRegex = /^[0-9]{6}$/;
        if (!pinRegex.test(pin)) {
            setError('Please enter a valid 6-digit 2FA PIN.');
            return;
        }
        setError('');
        setStep(3); // Success
    };

    return (
        <div className="container py-5 mt-lg-5 mb-5 d-flex align-items-center justify-content-center" style={{ minHeight: "65vh" }}>
            <div className="card shadow-sm border p-4 p-md-5" style={{ maxWidth: "430px", width: "100%", borderRadius: "8px" }}>
                
                {/* Kite Logo Header */}
                <div className="text-center mb-4">
                    <img 
                        src="media/images/logo.svg" 
                        alt="Zerodha Logo" 
                        className="mb-2" 
                        style={{ width: "150px" }}
                    />
                    <h5 className="text-muted fw-normal mt-1" style={{ fontSize: "14px", letterSpacing: "1px" }}>
                        KITE LOGIN
                    </h5>
                </div>

                {/* Step 1: User ID and Password */}
                {step === 1 && (
                    <form onSubmit={handleCredentialsSubmit}>
                        <h3 className="fs-4 fw-normal text-dark mb-4 text-center">Login to your account</h3>

                        {error && (
                            <div className="alert alert-danger py-2 px-3 mb-4" style={{ fontSize: "13px" }}>
                                <i className="fa-solid fa-triangle-exclamation me-2"></i> {error}
                            </div>
                        )}

                        {/* User ID Input */}
                        <div className="mb-3">
                            <label className="form-label text-muted" htmlFor="userId" style={{ fontSize: "13px" }}>
                                User ID
                            </label>
                            <input 
                                type="text" 
                                id="userId"
                                className="form-control p-3"
                                placeholder="Enter User ID (e.g. AB1234)"
                                value={userId}
                                onChange={(e) => {
                                    setError('');
                                    setUserId(e.target.value.toUpperCase());
                                }}
                                style={{ fontSize: "15px", textTransform: "uppercase" }}
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="form-label text-muted" htmlFor="password" style={{ fontSize: "13px" }}>
                                Password
                            </label>
                            <input 
                                type="password" 
                                id="password"
                                className="form-control p-3"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => {
                                    setError('');
                                    setPassword(e.target.value);
                                }}
                                style={{ fontSize: "15px" }}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 p-3 fs-6" style={{ fontWeight: "500" }}>
                            Login
                        </button>

                        <div className="text-center mt-4">
                            <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }} onClick={(e) => e.preventDefault()}>
                                Forgot user ID or password?
                            </a>
                        </div>
                    </form>
                )}

                {/* Step 2: 2FA PIN (Second Factor Authentication) */}
                {step === 2 && (
                    <form onSubmit={handlePinSubmit}>
                        <h3 className="fs-4 fw-normal text-dark mb-2 text-center">Two-factor PIN</h3>
                        <p className="text-muted text-center mb-4" style={{ fontSize: "13px" }}>
                            Enter the 6-digit PIN from your mobile app or email
                        </p>

                        {error && (
                            <div className="alert alert-danger py-2 px-3 mb-4" style={{ fontSize: "13px" }}>
                                <i className="fa-solid fa-triangle-exclamation me-2"></i> {error}
                            </div>
                        )}

                        <div className="mb-4">
                            <input 
                                type="password" 
                                id="pin"
                                className="form-control p-3 text-center"
                                placeholder="000000"
                                value={pin}
                                onChange={(e) => {
                                    setError('');
                                    setPin(e.target.value.replace(/\D/g, '').slice(0, 6));
                                }}
                                style={{ fontSize: "18px", letterSpacing: "12px", fontWeight: "600" }}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 p-3 fs-6" style={{ fontWeight: "500" }}>
                            Verify & Enter
                        </button>

                        <div className="text-center mt-4">
                            <a href="#" className="text-decoration-none text-primary" style={{ fontSize: "13px" }} onClick={(e) => { e.preventDefault(); setStep(1); }}>
                                <i className="fa-solid fa-arrow-left me-1"></i> Back to login
                            </a>
                        </div>
                    </form>
                )}

                {/* Step 3: Success Animation */}
                {step === 3 && (
                    <div className="text-center py-4">
                        <div className="mb-4 text-success">
                            <i className="fa-regular fa-circle-check animate-bounce" style={{ fontSize: "60px" }}></i>
                        </div>
                        <h4 className="fs-4 text-dark mb-2">Welcome Back, {userId}!</h4>
                        <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
                            Redirecting you securely to your trading workspace...
                        </p>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}

                {/* Bottom Footer Section */}
                <div className="border-top mt-4 pt-3 text-center" style={{ fontSize: "13px" }}>
                    <span className="text-muted">Don't have an account? </span>
                    <a href="/signup" className="text-primary text-decoration-none" style={{ fontWeight: "500" }}>
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
