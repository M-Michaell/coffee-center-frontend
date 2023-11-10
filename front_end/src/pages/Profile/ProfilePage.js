import React, { useState, startTransition } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTableList,faHeartCircleCheck,} from "@fortawesome/free-solid-svg-icons";
import {faAddressBook,faCreditCard,faUser,} from "@fortawesome/free-regular-svg-icons";
import "./profile.css";
import { useUserData } from "../../apis/profile";
import OrdersComponent from "./component/Orders";
import AddressesComponent from "./component/Addresses";


export default function Account() {
    const { detailsData } = useUserData();
    const [activeComponent, setActiveComponent] = useState('addresses');
    const handleLinkClick = (component) => {
        startTransition(() => {
          setActiveComponent(component);
        });
      };
    const componentMap = {
        orders: OrdersComponent,
        addresses: AddressesComponent,
        // Add other components...
    };
    
    const RenderComponent = componentMap[activeComponent];
    
  if (!detailsData || !detailsData.Users || detailsData.Users.length === 0) {
    // Return loading state or handle the absence of data
    return <p>Loading...</p>;
  }

  const user = detailsData.Users[0];
  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-2 text-start text-light">
          <div className="mt-5 mb-5">
            <p className="fw-bold fs-3">Hello {user.username}!</p>
            <p>{user.email}</p>
          </div>
          <hr></hr>
          <ul
            className="text-start mt-5 mb-5 "
            style={{ listStyleType: "none" }}
          >
            <Link to={`/profile/orders`} className="order-link" onClick={() => handleLinkClick('orders')}>
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
            <Link to={`/profile/wishlist`} className="order-link" onClick={() => handleLinkClick('wishlist')}>
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faHeartCircleCheck}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Wishlist
                <span className="arrow-icon">&#9654;</span>
              </li>
            </Link>

            <Link to={`/profile/addresses`} className="order-link" onClick={() => handleLinkClick('addresses')}>
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
            <Link to={`/profile/payments`} className="order-link" onClick={() => handleLinkClick('payments')}>
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="me-2"
                  style={{ color: "var(--orange)" }}
                />
                Payments
                <span className="arrow-icon">&#9654;</span>
              </li>
            </Link>

            <Link to={`/profile`} className="order-link" onClick={() => handleLinkClick('profile')}>
              <li className="mb-3 text-light">
                <FontAwesomeIcon
                  icon={faUser}
                  className="me-2 fw-bold"
                  style={{ color: "var(--orange)" }}
                />
                Profile
                <span className="arrow-icon">&#9654;</span>
              </li>
            </Link>
          </ul>
          <hr></hr>
          <Link to={`/cart`}>
            <p className="mt-5 mb-5 text-light" >Sign Out</p>
            <span className="arrow-icon" style={{ color: "var(--orange)" }}>
                  &#9654;
                </span>
          </Link>
        </div>
        <div
          className="col-lg-10 shadow-lg p-3 mt-3 mb-5 p-4"
          //   style={{ border: "2px solid orange" }}
        >
         <RenderComponent user={user} />
        </div>
      </div>
    </div>
  );
}
