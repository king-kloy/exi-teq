import React from 'react';

import "../css/LoginPage.css";
import logo from "../logo.svg";


class LoginPage extends React.Component {
  render() {
    return (
      <div class="login">
        <div class="triangle">
          <img src={logo} alt="logo" style={{width: "100px", height: "100px"}} />
        </div>
        <div class="login-container">
          <p class="login-title">Login</p>
          <p class="login-wlc">welcome back to the state-of-art</p>
          <input type="text" v-model="username" placeholder="username" />
          <br />
          <input type="text" v-model="password" placeholder="password" />
          <br />
          <div class="crf">
            <input type="checkbox" v-model="remember" />
            <span class="remember-me">&nbsp;remember me</span>
            <span class="forgot-passwd">forgot password?</span>
          </div>
          <button type="submit" class="btn-submit" >login</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;