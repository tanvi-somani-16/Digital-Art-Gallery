import React from "react";
import "./signup.css"

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>

      <div className="header">
        <h1>ArtVista</h1>
        <p>Join our creative community</p>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            required
            aria-label="Full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            aria-label="Email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            required
            aria-label="Password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            required
            aria-label="Confirm password"
          />
        </div>

        <div className="remember-forgot">
          <div className="remember-me">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms & Privacy Policy</label>
          </div>
        </div>

        <button type="submit" className="login-button">
          Create Account
        </button>

        <div className="login-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;