import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../../index.css";
const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state || {};
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome{username}</h3>
      <nav>
        <NavLink to="profile" activeClassName="active" className="nav-link">
          profile
        </NavLink>
        <NavLink to="setting" activeClassName="active" className="nav-link">
          Setting
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
