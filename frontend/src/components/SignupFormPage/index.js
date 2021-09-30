import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import github from "../../images/github.png"

import './SignupForm.css';


function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  function loginDemo (e) {
    e.preventDefault()
    return dispatch(sessionActions.login({ credential:"demo@user.io", password:"password" }))
  };

  return (
    <div className="login-page-container">
      <div className="login-info-section">
        <h2 className="login-info-header">Hello Friend</h2>
        <p className="login-paragraph"> Stop saying I don't know what do you want to do</p>
        <p> Just go there instead!</p>
        <div className="login-signup-link">
          <p>New to Idkwdywtd?</p> <NavLink to="/signup">Create Account</NavLink>
        </div>
        <div className="login-signup-link">
          <p>Afraid of committment?</p> <NavLink to="" onClick={loginDemo}>Try Our Demo</NavLink>
        </div>
      </div>
      <div className="signup-content-container">
        <h2 className="login-header">Sign Up</h2>
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <ul className="login-error-ul">
              {errors && <li className="login-error" key={errors[0]}>{errors[0]}</li>}
            </ul>
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
      <div className='about-me-section'>
        <a href='https://github.com/penced0513' ><img src={github} alt=''/></a>
      </div>
    </div>
  );
}

export default SignupFormPage;
