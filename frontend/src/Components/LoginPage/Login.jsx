import React from "react";
import "./css/login.css";

function Login() {
  return (
    <div className="form-wrapper">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>
        <div className="inpur-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            autoComplete="off"
            required
          />
        </div>
        <div className="inpur-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
