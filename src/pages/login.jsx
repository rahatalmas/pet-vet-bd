import '../css/login.css';
import { useState } from "react";

const Login = () => {
  const [petName, setPetName] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  const HandleLogin = (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setWarning("Password less than 6 characters");
    } else {
      setWarning('');
      const user = { petName, password };
      console.log(user);
      //api calling and other logics next...
      setPetName('');
      setPassword('');
    }
  };

  return (
    <>
      <div className="top-gap"></div>
      <div className="login-page">
        <div className="login-form-wrapper">
          <div className="login-page-logo-wrapper">
            <img className="login-page-logo" src="./assets/logo.jpg" alt="Logo" />
            <h3 className="login-page-welcome">Welcome Back</h3>
          </div>
          <form className="login-form" onSubmit={HandleLogin}>
            <input
              className="login-input"
              type="text"
              id="petName"
              name="petName"
              value={petName}
              placeholder="Enter your username"
              onChange={(e) => setPetName(e.target.value)}
            />

            {warning && <p className="warning-text">{warning}</p>}
            <input
              className="login-input"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          
  
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div>
            <p className="signUpSuggestion">
              Don't Have an Account? <span className="signUpLink">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
