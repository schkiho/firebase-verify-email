import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import firebase from "../../config/fbConfig";
import loader from "../layout/loader/loader.gif";

const Dashboard = ({ auth }) => {
  const [flyer, setFlyer] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFlyer = () => {
    let images = [];

    firebase
      .firestore()
      .collection("flyer")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          images.push(doc.data());
          setFlyer(images);
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    getFlyer();
  }, []);

  console.log(flyer);

  if (auth.uid && !auth.emailVerified) return <Redirect to="verify-email" />;
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-4">
          <Link to="/flyer-upload" className="btn btn-lg btn-primary my-2">
            Flyer Upload
          </Link>
          <h1 className="text-primary mb-4">Flyer</h1>
          {!loading && flyer
            ? flyer.map((item, index) => (
                <img
                  src={item.url}
                  alt="#"
                  key={index}
                  height="100"
                  width="200"
                  className="my-4"
                />
              ))
            : null}
        </div>
        <div className="col text-center mt-4">
          <Link to="/album-upload" className="btn btn-lg btn-primary my-2">
            Album Upload
          </Link>
          <h1 className="text-primary mb-4">Gallery</h1>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Dashboard);
