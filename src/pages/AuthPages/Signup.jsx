import React from 'react';
import "./Auth.css"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <Navbar />

      <section className="auth-section">
        <div className="auth-container">
          <h3>Sign Up</h3>
          <br />
          <form>
            <div className="input-container">
              <label className="input-label">First Name*</label>
              <input className="input-field" type="text" required />
            </div>
            <br />
            <div className="input-container">
              <label className="input-label">Last Name*</label>
              <input className="input-field" type="text" required />
            </div>
            <br />
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
            <div className="auth-btn-div">
              <button type="submit" className="btn auth-btn">Sign Up</button>
            </div>
          </form>
          <br />
          <div className="auth-alternate-link">Already a member?<Link to="/login">Log In</Link></div>
        </div>
		  </section>
    </>
  );
}

export default Signup;
