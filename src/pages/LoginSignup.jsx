import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>SignUp</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your name" id="" />
          <input type="email" placeholder="your email" id="" />
          <input type="password" placeholder="password" />
        </div>
        <button>continue</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login</span>
        </p>
        <div className="loinsignup-agree">
          <input type="checkbox" />
          <p>By continuing, i agree to terms and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
