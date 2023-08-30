import React, { useState } from 'react';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI';
import oncologyLogo from '../assets/oncologyLogo.png';
import '../Sass/LoginComponent.scss';
import { toast } from 'react-toastify';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function RegisterComponent() {
  let navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [credentials, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success('Account created!');
      navigate('/home');
    } catch (err) {
      toast.error('Cannot create account!');
    }
  };

  const googleSingIn = () => {
    let response = GoogleSignInAPI();
  };

  return (
    <div className="login-wrapper">
      <div className="heading-logo-wrapper">
        <img src={oncologyLogo} className="oncologyLogo" alt="logo" />
        <h1 className="heading">
          Department of Oncology, Ivano-Frankivsk National Medical University
        </h1>
      </div>
      <div className="sub-heading">
        <h2>Become a member of the Oncology Department</h2>
      </div>

      <form className="auth-inputs" onSubmit={handleSubmit(register)}>
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
          type="email"
          className="common-input"
          placeholder="Email"
        />
        <input
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
          type="password"
          className="common-input"
          placeholder="Password (6 or more characters)"
        />
        <input type="submit" value={' Join now'} className="signin-btn" />
      </form>

      <div className="divider-container">
        <hr className="hr-text" data-content="OR"></hr>
      </div>
      <GoogleButton className="google-btn" onClick={googleSingIn} />
      <p className="bottom-text">
        Already a member?
        <span
          className="join-now"
          onClick={() => {
            navigate('/');
          }}
        >
          {' '}
          Sign in
        </span>
      </p>
    </div>
  );
}
