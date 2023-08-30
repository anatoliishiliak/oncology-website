import React, { useState } from 'react';
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI';
import oncologyLogo from '../assets/oncologyLogo.png';
import '../Sass/LoginComponent.scss';
import { toast } from 'react-toastify';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function LoginComponent() {
  let navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [credentials, setCredentials] = useState({});
  const signIn = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success('Signed in successfully!');
      navigate('/home');
    } catch (err) {
      toast.error('Please check your email or password!');
    }
  };

  const googleSingIn = () => {
    let response = GoogleSignInAPI();
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="heading-logo-wrapper">
          <img src={oncologyLogo} className="oncologyLogo" alt="logo" />
          <h1 className="heading">
            Department of Oncology, Ivano-Frankivsk National Medical University
          </h1>
        </div>
        <div className="sub-heading">
          <p>Stay updated to your study process!</p>
          <p className="signin-text">Sign In</p>
        </div>

        <form className="auth-inputs" onSubmit={handleSubmit(signIn)}>
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
            placeholder="Password"
          />

          <input type="submit" value={'Log In'} className="signin-btn" />
        </form>
        <div className="divider-container">
          <hr className="hr-text" data-content="OR"></hr>
        </div>
        <GoogleButton className="google-btn" onClick={googleSingIn} />
        <p className="bottom-text">
          New to Department of Oncology?
          <span
            className="join-now"
            onClick={() => {
              navigate('/register');
            }}
          >
            {' '}
            Join now!
          </span>
        </p>
      </div>
    </>
  );
}
