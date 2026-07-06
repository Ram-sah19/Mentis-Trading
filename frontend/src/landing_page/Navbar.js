import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light bg-light border-bottom p-3" style={{backgroundColor:"#ffffff"  , position: "sticky",
    top: 0,
    zIndex: 1000 }}>
      <Link class="navbar-brand" to="/">
        <img src=" media/images/logo.svg" alt="logo" style={{width:"22%", marginLeft:"35%"}}/>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/signup" style={{marginLeft:"170px"}}>
              Signup <span class="sr-only"></span>
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/about" style={{marginLeft:"30%"}} >
              About
            </Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to="/product" style={{marginLeft:"40%"}}>
              Products
            </Link>
          </li>
            <li class="nav-item active">
            <Link class="nav-link" to="/pricing" style={{marginLeft:"80%"}}>
              Pricing
            </Link>
          </li>
            <li class="nav-item active">
            <Link class="nav-link" to="/support" style={{marginLeft:"90%"}}>
              Support
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
