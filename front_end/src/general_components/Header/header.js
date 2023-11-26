import "./header.css";

import React, { useState } from "react";
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
import { Button, FormControl } from "react-bootstrap";
import { logout } from "../../store/slices/auth";
import { useDispatch } from "react-redux";
import AdminDashboard from "../AdminDashboard/adminhome";

export default function Navbarr() {
  const dispatch = useDispatch();
  const wishlistCount = useSelector((state) => state.wishlist.count);
  const user = useSelector((state) => state.auth.userInfo);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const navigate = useNavigate();
  const handleWishlistClick = () => {
    // Navigate to profile page with activeComponent set to 'wishlist'
    navigate("/profile", { state: { activeComponent: "wishlist" } });
  };
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

  const handleCart = () => {
    if (!user) {
      toast.info("You should login first", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const renderAuthLinks = () => {
    if (user) {
      return (
        <>
          <NavLink to="/profile" className="m-3 text-light fs-5 orange">
            {user.username}
          </NavLink>

          <a
            href="/"
            type="submit"
            onClick={() => {
              dispatch(logout());
            }}
            className="m-3 text-light"
          >
            Logout
          </a>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login" className="m-3 text-light fs-5">
            Login
          </NavLink>
          <NavLink to="registration" className="m-3 text-light fs-5">
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
              Coffee<span style={{ color: "var(--orange)" }}>Geek</span>
            </NavLink>
           
          </div>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ color: "var(--orange)" }}
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="mx-auto">
              <Nav.Link
                href="#home"
                className="m-3"
                style={{ color: "var(--orange)" }}
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
            </Nav> */}
             {user?.is_staff ? (
              <NavLink
                to="/admin"
                className="btn border border-warning rounded-pill mx-auto "
                style={{ fontFamily: "Brush Script, cursive" }}
              >
                AdminDashboard
              </NavLink>
            ) : (
              <div></div>
            )}

            <div
              className="d-flex ms-auto ms-5 customSearch"
              style={{ maxWidth: "400px" }}
            >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-2   custom-search"
                onChange={handleSearchChange}
              />
              <Button variant="bg-transparent" onClick={handleSearchClick}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="me-2 orange fs-5"
                />
              </Button>
            </div>

            <strong className="fs-5 me-3 ">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="orange-icon me-2 mt-1 orange"
              />
              +20 120 912 2212
            </strong>
            <div className="d-flex my-3">
              <NavLink
                to="/profile"
                onClick={handleWishlistClick}
                style={{ color: "var(--orange)" }}
                className="position-relative"
              >
                <FontAwesomeIcon icon={faHeart} className="me-1 fs-4" />
                {wishlistCount > 0 && (
                  <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                    {wishlistCount}
                    <span className="visually-hidden">wishlist items</span>
                  </span>
                )}
              </NavLink>
              <NavLink
                to={user ? "/cart" : "/login"}
                onClick={handleCart}
                style={{ color: "var(--orange)" }}
              >
                <FontAwesomeIcon icon={faCartShopping} className="ms-3 fs-4" />
              </NavLink>
            </div>
            {renderAuthLinks()}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="container-fluid text-light row row-cols-1 row-cols-md-3 row-cols-xl-6 pt-2 px-5 gx-0 justify-content-center align-items-center "
        style={{ backgroundColor: "rgb(206, 134, 0)" }}
      >
        <p className="fs-5 mx-auto w-100">
          Unlock a 25% discount – Your savings, our treat!
        </p>
      </div>
    </Container>
  );
}
