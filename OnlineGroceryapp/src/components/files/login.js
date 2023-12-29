import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faSignInAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Login()
{
    
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleEmail=(event)=>
  {
    setEmail(event.target.value)
  }
  const handlePassword=(event)=>
  {
    setPassword(event.target.value)
  }
  
  const handleForgotPassword = () => {
    // Add your logic to handle forgot password
    console.log('Forgot password');
  };

  const handleRegister = () => {
    // Add your logic to navigate to registration page
    console.log('Register');
  };

  const handleLoginWithGoogle = () => {
    // Add your logic for login with Google
    console.log('Login with Google');
  };

  const handleLoginWithFacebook = () => {
    // Add your logic for login with Facebook
    console.log('Login with Facebook');
  };

    
    return(
      <div style={{backgroundColor:"lightskyblue"}}>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" >
      <div className="card shadow p-4">
        <h2 className="card-title text-center mb-4">Login</h2>
        <form onSubmit={fetch}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email address/Name"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <div className="text-center mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mb-3">
          <button className="btn btn-link" onClick={handleForgotPassword} style={{textDecoration:"none",color:"black"}}>
            Forgot password?
          </button>
          <br />
          <button className="btn btn-link" onClick={handleRegister} style={{textDecoration:"none",color:"black"}}>
           <Link to='/Registerationpg' style={{textDecoration:"none",color:"black"}}>New User? Register here</Link> 
          </button>
        </div>
        <div className="text-center">
          <button className="btn btn-danger me-3" onClick={handleLoginWithGoogle} >
            <FontAwesomeIcon icon={faGoogle} size="2x" className="me-2"  />
          </button>
          <button className="btn btn-primary" onClick={handleLoginWithFacebook}>
            <FontAwesomeIcon icon={faFacebook} size="2x" className="me-2" />
          </button>
        </div>
      </div>
    </div>
    </div>
    );
}