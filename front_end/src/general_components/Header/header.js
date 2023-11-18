import "./header.css";
import React, { useEffect, useState } from "react";
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
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Form, FormControl } from "react-bootstrap";
import {logout} from "../../store/slices/auth";
import {useDispatch}  from "react-redux";

export default function Navbarr() {
  const dispatch = useDispatch();
  const wishlistCount = useSelector(state => state.wishlist.count);
  const user = useSelector(state => state.auth.userInfo);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const navigate = useNavigate();
  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      toast.info("Enter Please enter a search input", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      navigate(`/search/${searchTerm}`);
    }
  };

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

  const renderAuthLinks = () => {
    if (user) {
      return (
        <>
          <NavLink to="/profile" href="#username" className="m-3 text-light">
            {user.username}
          </NavLink>

          <a
              href="/"
              type="submit"
              onClick={()=>{dispatch(logout());}}
              className="m-3 text-light">
            Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login"
        className="m-3 text-light">
            Login
          </NavLink>
          <NavLink to="/registration" className="m-3 text-light">
            Register
          </NavLink>
        </>
      );
    }
  };

  return (
    <Container
      fluid
      className="p-0 text-light"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Navbar expand="lg" className="bg-transparent">
        <Container fluid className="px-5 mx-0 align-items-center">
          <div className="d-flex align-items-center">
            <NavLink
              to="/"
              className="fs-3 fw-bold text-light"
              style={{ fontFamily: "Brush Script, cursive" }}
            >
              Coffee<span style={{ color: "rgb(206, 124, 0)" }}>Geek</span>
            </NavLink>
          </div>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ color: "rgb(206, 124, 0)" }}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
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
            </Nav>

            <div className="d-flex mx-auto" style={{maxWidth:"400px"}}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button variant="bg-transparent" onClick={handleSearchClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2 orange fs-5" />
              </Button>
            </div>

            <div className="d-flex align-items-center">
              {renderAuthLinks()}

              <strong className="fs-5 me-3">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="orange-icon me-2 mt-1"
                />
                +20 120 912 2212
              </strong>
              <NavLink to="/profile/wishlist" style={{ color: 'rgb(206, 124, 0)' }} className="position-relative me-3">
        <FontAwesomeIcon icon={faHeart} className="me-1" />
        {wishlistCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {wishlistCount}
            <span className="visually-hidden">wishlist items</span>
          </span>
        )}
      </NavLink>
              <NavLink to="" style={{ color: "rgb(206, 124, 0)" }}></NavLink>
              <NavLink to="/cart" style={{ color: "rgb(206, 124, 0)" }}>
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </div>
          </Navbar.Collapse>
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
