import React from "react";
import image from "../assets/404-error-template-10.jpg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center my-5 d-flex flex-column  position-relative">
      <img
        className="img-fluid w-100 position-relative"
        src={image}
        alt="erroe"
      />
      <button className="btn btn-warning  align-items-center position-absolute bottom-0 start-50 translate-middle-x">
        <Link className="nav-link " to="/">
          Home Page
        </Link>
      </button>
    </div>
  );
}

export default NotFound;
