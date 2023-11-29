import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faCcVisa,
  faCcMastercard,
  faApplePay,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export default function Footerr() {
  return (
    <footer
      className="text-white pt-5 "
      style={{
        borderTop: "4px solid rgb(206, 124, 0)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5
              className="mb-4 fw-bold fs-2"
              style={{ fontFamily: "Brush Script, cursive" }}
            >
              Coffee<span style={{ color: "rgb(206, 124, 0)" }}>Geek</span>
            </h5>
            <p>
              <FontAwesomeIcon icon={faFacebook} className="me-3 fs-4" />
              <FontAwesomeIcon icon={faTwitter} className="me-3 fs-4" />
              <FontAwesomeIcon icon={faInstagram} className="fs-4" />
            </p>
          </div>
          {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Coffee guru
            </h5>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                Coffee Machines
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                Natural Coffee
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                Instant Coffee
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                Cocoa Coffee
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                Accessories
              </a>
            </p>
          </div> */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Let's Connect
            </h5>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                Actions
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                About
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                Payment and Delivery
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                Contacts
              </a>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 font-weight-bold">Our Store</h5>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                Primary. 17 abdel wahab selim el beshry- Heliopolis. Cairo,
                Cairo 11261, EG.
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light fs-5"
                style={{ textDecoration: "None" }}
              >
                <strong>
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="orange-icon"
                  />
                  <span>+20 120 912 2212</span>
                </strong>
              </a>
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Payment Methods
            </h5>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                <FontAwesomeIcon icon={faCcVisa} className="fs-1 me-2" />
                <FontAwesomeIcon icon={faCcMastercard} className="fs-1 me-2" />

                <i className="fa-brands fa-cc-paypal fs-1"></i>
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-light"
                style={{ textDecoration: "None" }}
              >
                you can pay for purchases in cash upon{" "}
                <span style={{ color: "rgb(206, 124, 0)" }}>
                  receipt or choose another payment method
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="row mt-3 mb-0 text-center justify-content-center text-secondary ">
          <div className="col-md-7 col-lg-8">
            <p>
              Copyright @2023 All rights reserved by:
              <a
                href="#"
                className="text-warning"
                style={{ textDecoration: "None" }}
              >
                SMMM
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
