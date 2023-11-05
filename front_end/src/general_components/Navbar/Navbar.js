import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import Badge from "@mui/material/Badge";
import Language from "../Language&Theme/language";

export default function Navbar2() {
  const watchList = useSelector((state) => state.WatchList.watchListItems);
  const navigate = useNavigate();
  const handlernavigate = () => {
    navigate("/watch-list");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-light bg-warning fs-4 container-fluid sticky-top"
    >
      <NavLink className="nav-link fs-3  ms-5" to="/">
        Movie App
      </NavLink>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="me-3">
        <Nav className="me-auto"></Nav>
        <Nav className="">
          <Language />
        </Nav>
        <Nav>
          {/* <IconButton aria-label={notificationsLabel(watchList.length)}> */}
          <button
            type="button"
            className="btn btn-warning position-relative me-4"
            onClick={handlernavigate}
          >
            <Badge
              badgeContent={watchList.length}
              color="error"
              className="ms-2"
              max={10}
            >
              <div className="d-flex justify-content-start align-items-center">
                <span className="mx-2 fs-4 ">
                  <FontAwesomeIcon icon={faHeart} />
                </span>

                <span className="">watchlist</span>
              </div>
            </Badge>
          </button>
          {/* </IconButton> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
