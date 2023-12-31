// ProfilePage.js
import React, { useState, startTransition, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableList,
  faHeartCircleCheck,
  faAddressBook,
  faCreditCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./profile.css";
import { useUserData } from "../../apis/profile";
import { useSelector } from "react-redux";
import { logout, deleteUser } from "../../store/slices/auth";
import { useDispatch } from "react-redux";

const OrdersComponent = React.lazy(() => import("./component/Orders"));
const AddressesComponent = React.lazy(() => import("./component/Addresses"));
const ProfileComponent = React.lazy(() => import("./component/Profile"));
const WishlistComponent = React.lazy(() => import("./component/Wishlist"));
const PaymentsComponent = React.lazy(() => import("./component/Payments"));

export default function Account({ location = {} }) {
  const dispatch = useDispatch();
  const { detailsData } = useUserData();
  const [activeComponent, setActiveComponent] = useState("profile");
  useEffect(() => {
    // Check if location state is available and has activeComponent
    if (location.state && location.state.activeComponent) {
      setActiveComponent(location.state.activeComponent);
    }
  }, [location.state]);

  const handleLinkClick = (component) => {
    startTransition(() => {
      setActiveComponent(component);
    });
  };
  const componentMap = {
    orders: OrdersComponent,
    addresses: AddressesComponent,
    profile: ProfileComponent,
    wishlist: WishlistComponent,
    payments: PaymentsComponent,
  };

  const RenderComponent = componentMap[activeComponent];

  // if (!detailsData || !detailsData.Users || detailsData.Users.length === 0) {
  //   return <p>Loading...</p>;
  // }
  const user = useSelector((state) => state.auth.userInfo);
  const userId = user?.id;
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
              to={`/profile/orders`}
              className="order-link"
              onClick={() => handleLinkClick("orders")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faTableList}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Orders
                <span className="arrow-icon">&#9654;</span>
              </li>
            </Link>
            <Link
              to={`/profile/addresses`}
              className="order-link"
              onClick={() => handleLinkClick("addresses")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Addresses
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            <Link
              to={`/profile/wishlist`}
              className="order-link"
              onClick={() => handleLinkClick("wishlist")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faHeartCircleCheck}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Wishlist
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link>
            {/* <Link
              to={`/profile/payments`}
              className="order-link"
              onClick={() => handleLinkClick("payments")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Payments
                <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
              </li>
            </Link> */}
            <Link
              to={`/profile/addresses`}
              className="order-link"
              onClick={() => handleLinkClick("profile")}
            >
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faUser}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Profile
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
          <RenderComponent user={user} userId={userId}/>
        </div>
      </div>
    </div>
  );
}
