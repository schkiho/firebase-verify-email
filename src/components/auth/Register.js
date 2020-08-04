import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container auth-container my-4">
      <h2 className="text-center text-success">
        <i class="fa fa-user-plus" /> Register
      </h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Firstname"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Lastname"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email address"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password2"
            placeholder="Confirm password"
          />
        </div>
        <div className="fourm-group">
          <button type="submitt" className="btn btn-success btn-block">
            Register
          </button>
        </div>
      </form>
      <hr />
      <p className="text-center">
        When you already have an account <Link to="/login">Login</Link>.
      </p>
    </div>
  );
};

export default Register;
