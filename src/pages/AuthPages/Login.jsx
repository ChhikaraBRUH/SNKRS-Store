import React from 'react';
import "./Auth.css"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Navbar />

       <section className="auth-section">
          <div className="auth-container">
            <h3>Login</h3>
            <br />
            <form>
              <div className="input-container">
                <label className="input-label">Email Address*</label>
                <input className="input-field" type="text" required />
              </div>
              <br />
              <div className="input-container">
                <label className="input-label">Password*</label>
                <input className="input-field" type="password" required />
              </div>
              <br />
              <div className="remember-div">
                <input type="checkbox" id="remember-me-input" />
                <label for="remember-me-input">Remember Me</label>
              </div>
              <br />
              <div className="forgot-pass-div">
                <a href="#">Forgot Password?</a>
              </div>
              <br />
              <div className="auth-btn-div">
                <button type="submit" className="btn auth-btn">Log In</button>
              </div>
            </form>
            <br />
            <div className="auth-alternate-link">Not a member?<Link to="/signup">Join Us</Link></div>
          </div>
      </section>
    </>
  );
}

export default Login;
