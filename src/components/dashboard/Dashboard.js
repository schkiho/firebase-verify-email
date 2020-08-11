import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../auth/Auth";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser.emailVerified) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1 className="text-center text-success">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
