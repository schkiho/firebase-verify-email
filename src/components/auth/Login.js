import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container auth-container my-4">
      <h2 className="text-center text-success">
        <i class="fa fa-user" /> Login
      </h2>
      <form>
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
        <div className="fourm-group">
          <button type="submitt" className="btn btn-success btn-block">
            Login
          </button>
        </div>
      </form>
      <hr />
      <p className="text-center">
        You don't have an account <Link to="/register">Register</Link>.
      </p>
    </div>
  );
};

export default Login;
