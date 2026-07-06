import React, { useState, useEffect } from 'react';

function Signup({ initialMode = 'signup' }) {
    // Mode toggling state
    const [isLoginMode, setIsLoginMode] = useState(initialMode === 'login');
    
    // Step tracking: 1: Inputs, 2: Verification (OTP or 2FA PIN), 3: Success
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');

    // Signup specific fields
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');

    // Login specific fields
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [pin, setPin] = useState('');

    // Synchronize mode state when navigation triggers route reuse
    useEffect(() => {
        setIsLoginMode(initialMode === 'login');
        setStep(1);
        setError('');
        setMobileNumber('');
        setOtp('');
        setUserId('');
        setPassword('');
        setPin('');
    }, [initialMode]);

    // Handle form transitions
    const handleMobileSubmit = (e) => {
        e.preventDefault();
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(mobileNumber)) {
            setError('Please enter a valid 10-digit mobile number.');
            return;
        }
        setError('');
        setStep(2);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        const otpRegex = /^[0-9]{6}$/;
        if (!otpRegex.test(otp)) {
            setError('Please enter a valid 6-digit OTP code.');
            return;
        }
        setError('');
        setStep(3);
    };

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
        setStep(2);
    };

    const handlePinSubmit = (e) => {
        e.preventDefault();
        const pinRegex = /^[0-9]{6}$/;
        if (!pinRegex.test(pin)) {
            setError('Please enter a valid 6-digit 2FA PIN.');
            return;
        }
        setError('');
        setStep(3);
    };

    const toggleMode = (mode) => {
        setIsLoginMode(mode === 'login');
        setStep(1);
        setError('');
        setMobileNumber('');
        setOtp('');
        setUserId('');
        setPassword('');
        setPin('');
    };

    return (
        <div className="container py-5 mt-lg-5 mb-5">
            <div className="row align-items-center justify-content-center g-5">
                {/* Left Side: Illustration */}
                <div className="col-lg-6 col-12 text-center">
                    <img 
                        src="media/images/signup.png" 
                        alt="Auth Illustration" 
                        className="img-fluid" 
                        style={{ maxWidth: "85%", height: "auto" }}
                    />
                </div>

                {/* Right Side: Auth Form Card */}
                <div className="col-lg-5 col-12 px-4">
                    
                    {/* A. SIGNUP FLOW */}
                    {!isLoginMode && (
                        <div>
                            {step === 1 && (
                                <div>
                                    <h2 className="fs-3 fw-normal text-dark mb-2">Signup now</h2>
                                    <p className="text-muted mb-4" style={{ fontSize: "15px" }}>Or track your existing application</p>
                                    
                                    <form onSubmit={handleMobileSubmit} className="mt-4">
                                        <div className="mb-4">
                                            <label htmlFor="mobile" className="form-label text-muted" style={{ fontSize: "13px" }}>
                                                Mobile number
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white border-end-0 text-muted" style={{ fontSize: "15px" }}>+91</span>
                                                <input 
                                                    type="tel" 
                                                    id="mobile"
                                                    className={`form-control p-3 border-start-0 ${error ? 'is-invalid' : ''}`}
                                                    placeholder="Enter 10 digit mobile number"
                                                    value={mobileNumber}
                                                    onChange={(e) => {
                                                        setError('');
                                                        setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10));
                                                    }}
                                                    style={{ fontSize: "15px" }}
                                                    required
                                                />
                                            </div>
                                            {error && (
                                                <div className="text-danger mt-2" style={{ fontSize: "13px" }}>
                                                    <i className="fa-solid fa-triangle-exclamation me-1"></i> {error}
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-muted" style={{ fontSize: "12px", lineHeight: "1.5" }}>
                                            You will receive an OTP on your number for verification.
                                        </p>

                                        <button type="submit" className="btn btn-primary w-100 p-3 fs-6 mt-2" style={{ fontWeight: "500" }}>
                                            Continue
                                        </button>
                                    </form>

                                    {/* Toggle Link to Login */}
                                    <div className="mt-4 text-center" style={{ fontSize: "14px" }}>
                                        <span className="text-muted">Already have an account? </span>
                                        <button 
                                            className="btn btn-link text-primary p-0 pb-1 text-decoration-none" 
                                            style={{ fontSize: "14px", fontWeight: "500", verticalAlign: "baseline" }}
                                            onClick={() => toggleMode('login')}
                                        >
                                            Log in
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div>
                                    <h2 className="fs-3 fw-normal text-dark mb-2">Verify Mobile</h2>
                                    <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
                                        We have sent a 6-digit OTP code to <strong className="text-dark">+91 {mobileNumber}</strong>. 
                                        <span className="text-primary ms-2 cursor-pointer" onClick={() => setStep(1)} style={{ cursor: "pointer", textDecoration: "underline" }}>Change</span>
                                    </p>
                                    
                                    <form onSubmit={handleOtpSubmit} className="mt-4">
                                        <div className="mb-4">
                                            <label htmlFor="otp" className="form-label text-muted" style={{ fontSize: "13px" }}>
                                                Enter 6-digit OTP
                                            </label>
                                            <input 
                                                type="text" 
                                                id="otp"
                                                className={`form-control p-3 ${error ? 'is-invalid' : ''}`}
                                                placeholder="000000"
                                                value={otp}
                                                onChange={(e) => {
                                                    setError('');
                                                    setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
                                                }}
                                                style={{ fontSize: "16px", letterSpacing: "8px", textAlign: "center", fontWeight: "600" }}
                                                required
                                            />
                                            {error && (
                                                <div className="text-danger mt-2 text-center" style={{ fontSize: "13px" }}>
                                                    <i className="fa-solid fa-triangle-exclamation me-1"></i> {error}
                                                </div>
                                            )}
                                        </div>

                                        <button type="submit" className="btn btn-primary w-100 p-3 fs-6 mt-2" style={{ fontWeight: "500" }}>
                                            Verify OTP
                                        </button>

                                        <div className="text-center mt-3">
                                            <span className="text-muted" style={{ fontSize: "13px" }}>Didn't receive the OTP? </span>
                                            <a href="#" className="text-primary text-decoration-none" style={{ fontSize: "13px" }} onClick={(e) => { e.preventDefault(); alert("OTP resent!"); }}>Resend OTP</a>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="text-center py-4">
                                    <div className="mb-4 text-success">
                                        <i className="fa-regular fa-circle-check" style={{ fontSize: "64px" }}></i>
                                    </div>
                                    <h2 className="fs-3 text-dark mb-3">Verification Successful!</h2>
                                    <p className="text-muted mb-4" style={{ fontSize: "15px" }}>
                                        Your mobile number has been verified. We are setting up your account profile.
                                    </p>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* B. LOGIN FLOW */}
                    {isLoginMode && (
                        <div>
                            {step === 1 && (
                                <form onSubmit={handleCredentialsSubmit}>
                                    <h2 className="fs-3 fw-normal text-dark mb-2">Login to Kite</h2>
                                    <p className="text-muted mb-4" style={{ fontSize: "15px" }}>Access your trading console and charts</p>

                                    {error && (
                                        <div className="alert alert-danger py-2 px-3 mb-4" style={{ fontSize: "13px" }}>
                                            <i className="fa-solid fa-triangle-exclamation me-2"></i> {error}
                                        </div>
                                    )}

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

                                    {/* Toggle Link to Signup */}
                                    <div className="mt-4 text-center" style={{ fontSize: "14px" }}>
                                        <span className="text-muted">Don't have an account? </span>
                                        <button 
                                            className="btn btn-link text-primary p-0 pb-1 text-decoration-none" 
                                            style={{ fontSize: "14px", fontWeight: "500", verticalAlign: "baseline" }}
                                            onClick={() => toggleMode('signup')}
                                        >
                                            Sign up
                                        </button>
                                    </div>

                                    <div className="text-center mt-3">
                                        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "12px" }} onClick={(e) => e.preventDefault()}>
                                            Forgot user ID or password?
                                        </a>
                                    </div>
                                </form>
                            )}

                            {step === 2 && (
                                <form onSubmit={handlePinSubmit}>
                                    <h3 className="fs-4 fw-normal text-dark mb-2 text-center">Two-factor PIN</h3>
                                    <p className="text-muted text-center mb-4" style={{ fontSize: "13px" }}>
                                        Enter the 6-digit PIN from your mobile authenticator app
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

                            {step === 3 && (
                                <div className="text-center py-4">
                                    <div className="mb-4 text-success">
                                        <i className="fa-regular fa-circle-check" style={{ fontSize: "60px" }}></i>
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
                        </div>
                    )}

                    {/* Want to open NRI Account footer links */}
                    <div className="border-top mt-5 pt-4 text-center">
                        <a href="#" className="text-decoration-none text-muted" style={{ fontSize: "13px" }}>
                            Want to open an NRI account?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;