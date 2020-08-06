import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";

import { loginSchema } from "../validationSchemas/authSchemas";
import { loginUser } from "./authFunctions";
import { AuthContext } from "./Auth";
import Modal from "./VerifyModal";

const Login = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(loginSchema),
  });

  const onSubmit = (data) => {
    loginUser(data);
    if (currentUser) {
      currentUser.emailVerified ? history.push("/dashboard") : showModal();
    }
  };

  const showModal = () => setShow(true);

  const hideModal = () => setShow(false);

  return (
    <Fragment>
      <div className="container auth-container my-4">
        <h2 className="text-center text-success">
          <i className="fa fa-user" /> Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <p className="text-center text-danger">
              {errors.password?.message}
            </p>
          </div>
          <div className="fourm-group">
            <button type="submit" className="btn btn-success btn-block">
              Login
            </button>
          </div>
        </form>
        <hr />
        <p className="text-center">
          You don't have an account <Link to="/register">Register</Link>.
        </p>
      </div>
      <Modal show={show} handleClose={hideModal}>
        <p>Modal</p>
        <p>Data</p>
      </Modal>
    </Fragment>
  );
};

export default withRouter(Login);
