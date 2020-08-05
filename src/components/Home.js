import React from "react";
import app from "../firebase";

const Home = () => {
  console.log(app.auth().currentUser);
  return (
    <div className="container">
      <h1 className="text-center">Home</h1>
    </div>
  );
};

export default Home;
