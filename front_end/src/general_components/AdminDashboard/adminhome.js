// ProfilePage.js
import React, { useState, startTransition } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTag,
  faGlobe,
  faMugHot,
  faCirclePlus,
  faPercent,
  faBagShopping,
  faFireBurner,
  faStar,
  faTruck,
  faDollar,
} from "@fortawesome/free-solid-svg-icons";
import "./admin.css";
import { useSelector } from "react-redux";
import { logout } from "../../store/slices/auth";
import { useDispatch } from "react-redux";

const Caffeine = React.lazy(() => import("./components/CaffeinesComponent"));
const CoffeeType = React.lazy(() =>
  import("./components/CoffeetypesComponent")
);
const Creator = React.lazy(() => import("./components/CreatorsComponent"));
const Discount = React.lazy(() => import("./components/DiscountsComponent"));
const Origin = React.lazy(() => import("./components/OriginsComponent"));
const Product = React.lazy(() => import("./components/ProductsComponent"));
const RoastingDegree = React.lazy(() =>
  import("./components/RoastingDegreeComponent")
);
const Rates = React.lazy(() => import("./components/rates"));
const Tracing = React.lazy(() => import("./components/Tracing"));
const Income = React.lazy(() => import("./components/Income"));
const Users = React.lazy(() => import("./components/UsersComponent"));

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const [activeComponent, setActiveComponent] = useState("caffeine");

  const handleLinkClick = (component) => {
    startTransition(() => {
      setActiveComponent(component);
    });
  };
  const componentMap = {
    caffeine: Caffeine,
    coffeetype: CoffeeType,
    creator: Creator,
    discount: Discount,
    origin: Origin,
    product: Product,
    roastingdegree: RoastingDegree,
    rates: Rates,
    tracing:Tracing,
    income:Income,
    users: Users
  };

  const RenderComponent = componentMap[activeComponent];

  const user = useSelector((state) => state.auth.userInfo);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 text-start text-light">
          <div className="mt-5 mb-5">
            <p className="fw-bold fs-3">Hello {user?.username}!</p>
            <p>{user.email}</p>
          </div>
          <hr></hr>
          <ul className="text-start mt-5 " style={{ listStyleType: "none" }}>
            <Link
              to={`/admin/caffeine`}
              className="order-link"
              onClick={() => handleLinkClick("caffeine")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faMugHot}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Caffeine
                <span className="arrow-icon">&#9654;</span>
              </li>
            </Link>
            <Link
              to={`/admin/coffeetypes/`}
              className="order-link"
              onClick={() => handleLinkClick("coffeetype")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Coffee Type
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <Link
              to={`/admin/creator`}
              className="order-link"
              onClick={() => handleLinkClick("creator")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faUserTag}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Creator
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <Link
              to={`/admin/discount`}
              className="order-link"
              onClick={() => handleLinkClick("discount")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faPercent}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Discount
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <Link
              to={`/admin/origin`}
              className="order-link"
              onClick={() => handleLinkClick("origin")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Origin
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <Link
              to={`/admin/product`}
              className="order-link"
              onClick={() => handleLinkClick("product")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Product
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <Link
              to={`/admin/roastingdegree`}
              className="order-link"
              onClick={() => handleLinkClick("roastingdegree")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faFireBurner}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Roasting Degree
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <hr></hr>
            <Link
              to={`/admin/rates`}
              className="order-link"
              onClick={() => handleLinkClick("rates")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                   icon={faStar}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                rates
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <hr></hr>
            <Link
              to={`/admin/rates`}
              className="order-link"
              onClick={() => handleLinkClick("tracing")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                   icon={faTruck}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                tracing
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <hr></hr>
            <Link
              to={`/admin/rates`}
              className="order-link"
              onClick={() => handleLinkClick("income")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                   icon={faDollar}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Income
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <Link
              to={`/admin/users`}
              className="order-link"
              onClick={() => handleLinkClick("users")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                   icon={faStar}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Users
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
          </ul>
          <hr></hr>
          <a
            className="mt-5 text-light"
            href="/home"
            onClick={() => {
              dispatch(logout());
            }}
          >
            <p>Sign Out</p>
            <span className="arrow-icon" style={{ color: "var(--orange)" }}>
              &#9654;
            </span>
          </a>
        </div>
        <div className="col-lg-10 shadow-lg p-3 mt-3 mb-5 p-4">
          <RenderComponent user={user} />
        </div>
      </div>
    </div>
  );
}
