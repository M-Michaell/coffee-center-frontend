import React from 'react';
export default function Profile(){

   
          <div className="text-light">
            <h1 className="mb-3">Profile</h1>
            <div
              class="card bg-dark text-light w-100 mb-4 mt-4"
              style={{ border: "1px solid var(--orange)" }}
            >
              <div
                class="card-body "
                style={{ backgroundColor: "var(--background)" }}
              >
                <h5 class="card-title  text-start mb-4 fw-bold">
                  General Information
                </h5>
                <div className="row">
                  <p class="card-text text-start col-4">First name:{user.first_name}</p>
                  <p class="card-text text-start col-4">Last name: {user.last_name}</p>
                  <p class="card-text text-start col-4">User name:{user.username}</p>
                </div>
              </div>
            </div>
            <div
              class="card text-light w-100"
              style={{ border: "1px solid var(--orange)" }}
            >
              <div
                class="card-body "
                style={{ backgroundColor: "var(--background)" }}
              >
                <h5 class="card-title  text-start fw-bold mb-4">Security</h5>
                <div className="row">
                  <p class="card-text text-start col-4">Email:{user.email}</p>
                  <p class="card-text text-start col-4">Password:{user.phone}</p>
                  <p class="card-text text-start col-4">Phone:{user.phone}</p>
                </div>
              </div>
            </div>
            <a href="#" class="btn btn-outline-light mt-5 custom-btn">
              Edit my info
            </a>
            <a href="#" class="btn btn-outline-danger ms-5 mt-5 custom-btn">
              Delete account
            </a>
          </div>


}
