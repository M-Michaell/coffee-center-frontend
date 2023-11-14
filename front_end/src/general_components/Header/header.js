import "./header.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Navbarr() {
  const user = useSelector((state) => state.user?.user?.user);
  const navigate = useNavigate("/cart");

//   const handleCart = () => {
//     if (user) {
//       navigate();
//     } else {
//       const CustomToast = ({ closeToast }) => (
//         <div>
//           You should login first. <a href="/login/">Login now</a>
//         </div>
//       );

//       toast.info(<CustomToast />, {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }
//   };

  return (
    <Container
      fluid
      className="p-0 text-light"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Navbar expand="lg" className="bg-transparent">
        <Container fluid className="px-5 mx-0 align-items-center ">
          <div className="d-flex align-items-center">
            {" "}
            {/* Adjust alignment classes here */}
            <NavLink
              to="/home"
              className="fs-3 fw-bold text-light"
              style={{ fontFamily: "Brush Script, cursive" }}
            >
              Coffee<span style={{ color: "rgb(206, 124, 0)" }}>Geek</span>
            </NavLink>
          </div>

          <Nav className="d-flex mx-auto justify-content-between align-items-center w-75 ">
            <div className="d-flex mx-auto">
              <Navbar.Toggle
                aria-controls="actions-nav"
                style={{ color: "rgb(206, 124, 0)" }}
                className="mt-0 align-self-end"
              />{" "}
              {/* Added Navbar.Toggle here */}
              <Nav>
                <Navbar.Collapse id="actions-nav">
                  <Nav.Link
                    href="#home"
                    className="m-3"
                    style={{ color: "rgb(206, 124, 0)" }}
                  >
                    Actions
                  </Nav.Link>
                  <Nav.Link href="/order" className="m-3 text-light">
                    Payment and Delivery
                  </Nav.Link>
                  <Nav.Link href="#link" className="m-3 text-light">
                    Contacts
                  </Nav.Link>
                  <Nav.Link href="#link" className="m-3 text-light">
                    Personal Area
                  </Nav.Link>
                </Navbar.Collapse>
              </Nav>
            </div>
            <strong className="d-flex mx-auto fs-5">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="orange-icon me-2 mt-1"
              />
              +20 120 912 2212
            </strong>
            <div>
              <NavLink to="" style={{ color: "rgb(206, 124, 0)" }}>
                <FontAwesomeIcon icon={faHeart} className="me-3" />
              </NavLink>
              <NavLink to="" style={{ color: "rgb(206, 124, 0)" }}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="ms-2 me-2"
                />
              </NavLink>

              <NavLink to="/cart" style={{ color: "rgb(206, 124, 0)" }}>
                <FontAwesomeIcon
                  
                  icon={faCartShopping}
                  className="ms-3"
                />
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="container-fluid text-light row row-cols-1 row-cols-md-3 row-cols-xl-6 pt-2 px-5 gx-0 justify-content-center align-items-center "
        style={{ backgroundColor: "rgb(206, 134, 0)" }}
      >
        <div>
          <p>Coffee machines</p>
        </div>
        <div>
          <p>Natural Coffee</p>
        </div>
        <div>
          <p>Instant Coffee</p>
        </div>
        <div>
          <p>Cocoa Coffee</p>
        </div>
        <div>
          <p>Syrups</p>
        </div>
        <div>
          <p>Accessories</p>
        </div>
      </div>
    </Container>
  );
}
