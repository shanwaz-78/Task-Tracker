import React from "react";
import "./css/signup.css";

function SignUp() {
  return (
    <div className="form-wrapper">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form style={{ paddingTop: "30px" }}>
        <h3>Sign Up Here</h3>
        <div className="inpur-wrapper">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            autoComplete="off"
            required
          />
        </div>
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
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "20px" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
