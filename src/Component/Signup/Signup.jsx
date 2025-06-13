import React, { useState } from 'react';
import './Signup.css';
import { MdOutlinePersonAddAlt1 } from 'react-icons/md';

function Signup() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    alert("SignUp Successfully...👍");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Create Account</h2>

        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="pass1">Password</label>
          <input
            type="password"
            id="pass1"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="conpass1">Confirm Password</label>
          <input
            type="password"
            id="conpass1"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="signup-btn" type="submit">
          Sign Up <MdOutlinePersonAddAlt1 />
        </button>
      </form>
    </div>
  );
}

export default Signup;
