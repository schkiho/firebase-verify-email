import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";

import { registerSchema } from "../validationSchemas/authSchemas";
import { registerUser } from "../auth/authFunctions";

const Register = ({ history }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(registerSchema),
  });

  const onSubmit = (data) => {
    registerUser(data);
    history.push("/login");
  };

  return (
    <div className="container auth-container my-4">
      <h2 className="text-center text-success">
        <i className="fa fa-user-plus" /> Register
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            ref={register}
            name="Firstname"
            placeholder="Firstname"
          />
          <p className="text-center text-danger">{errors.Firstname?.message}</p>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            ref={register}
            name="Lastname"
            placeholder="Lastname"
          />
          <p className="text-center text-danger">{errors.Lastname?.message}</p>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            ref={register}
            name="email"
            placeholder="Email address"
          />
          <p className="text-center text-danger">{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            ref={register}
            name="password"
            placeholder="Password"
          />
          <p className="text-center text-danger">{errors.password?.message}</p>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password2"
            ref={register}
            placeholder="Confirm password"
          />
          <p className="text-center text-danger">{errors.password2?.message}</p>
        </div>
        <div className="fourm-group">
          <button type="submit" className="btn btn-success btn-block">
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

export default withRouter(Register);
