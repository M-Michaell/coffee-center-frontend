import React from 'react';
import {NavLink} from "react-router-dom";


export default function ProfileComponent({ user }) {
  return (
    <div className="text-light">
      <h1 className="mb-3">Profile</h1>
      <div
        className="card bg-dark text-light w-100 mb-4 mt-4"
        style={{ border: "1px solid var(--orange)" }}
      >
        <div
          className="card-body "
          style={{ backgroundColor: "var(--background)" }}
        >
          <h5 className="card-title  text-start mb-4 fw-bold">
            General Information
          </h5>
          <div className="row">
            <p className="card-text text-start col-4">First name: {user.first_name}</p>
            <p className="card-text text-start col-4">Last name: {user.last_name}</p>
            <p className="card-text text-start col-4">User name: {user.username}</p>
          </div>
        </div>
      </div>
      <div
        className="card text-light w-100"
        style={{ border: "1px solid var(--orange)" }}
      >
        <div
          className="card-body "
          style={{ backgroundColor: "var(--background)" }}
        >
          <h5 className="card-title  text-start fw-bold mb-4">Security</h5>
          <div className="row">
            <p className="card-text text-start col-4">Email: {user.email}</p>
            {/* Add other user-related information here */}
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-outline-light mt-5 custom-btn">
        Edit my info
      </a>
      <NavLink
          to="/delete-user"
         className="btn btn-outline-danger ms-5 mt-5 custom-btn">
        Delete account
      </NavLink>
    </div>
  );
}
