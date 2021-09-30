import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import github from "../../images/github.png"

import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  function loginDemo (e) {
    e.preventDefault()
    return dispatch(sessionActions.login({ credential:"demo@user.io", password:"password" }))
  };

  return (
    <div className="login-page-container">
      <div className="login-info-section">
        <h2 className="login-info-header">Welcome Back</h2>
        <p className="login-paragraph"> Stop asking I Don't Know What Do You Want To Do?</p>
        <p> Just go there instead!</p>
        <div className="login-signup-link">
          <p>New to Idkwdywtd?</p> <NavLink to="/signup">Join Now</NavLink>
        </div>
        <div className="login-signup-link">
          <p>Afraid of committment?</p> <NavLink to="" onClick={loginDemo}>Try Our Demo</NavLink>
        </div>
      </div>
      <div className="login-content-container">
      <h2 className="login-header">Log In</h2>
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <ul className="login-error-ul">
              {errors.map((error, idx) => <li className="login-error" key={idx}>{error}</li>)}
            </ul>
              <input
                placeholder="Username or Email"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
      <div className='about-me-section'>
        <a href='https://github.com/penced0513' ><img src={github}  alt=''/></a>
      </div>
    </div>
  );
}

export default LoginFormPage;
