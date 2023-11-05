import React from "react";
import "./loader.css";

export default function Loader() {
  return (
    <div>
      <div className="perant position-absolute start-50 translate-middle-x top-50 ">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </div>
  );
}
