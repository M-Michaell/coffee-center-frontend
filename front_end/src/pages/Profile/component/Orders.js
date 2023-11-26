import React, { useEffect, useState } from "react";
import OrderComponent from "./Order";
import { UserOrdersApi } from "../../../apis/order_details";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export default function OrdersComponent({ user }) {
  const [maxDate, setMaxDate] = useState(getCurrentDate());

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Ensure month and day have leading zeros if needed
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }

  const handleFromChange = function () {
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    endDate.min = startDate.value;
    if (endDate.value && endDate.value < startDate.value) {
      endDate.value = startDate.value;
    }
  };

  const [userOrders, setUserOrders] = useState([]);

  const fetchData = async (userOrdersDetails) => {
    try {
      const response = await userOrdersDetails.get();
      setUserOrders(response.data.orders);
      console.log("user orders: ", response.data.orders);
    } catch (error) {
      console.error("Error fetching user order details:", error);
    }
  };

  const handleSearchByDate = () => {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const userOrdersDetails = UserOrdersApi(user.id, startDate, endDate);
    fetchData(userOrdersDetails);
  };

  useEffect(() => {
    const userOrdersDetails = UserOrdersApi(user.id, null, null);
    fetchData(userOrdersDetails);
  }, []);

  return (
    <div>
      <h1 className="text-start fw-bold mb-3" style={{ color: "white" }}>
        Your Orders
      </h1>
      {userOrders.length ? (
        userOrders.map((order, index) => (
          <div className="pb-5" key={order.id}>
            <OrderComponent order={order} />
          </div>
        ))
      ) : (
        <div>
          <RemoveShoppingCartIcon sx={{ fontSize: 200 }} className="my-5" />
          <div className="d-flex flex-column mt-5">
            <h2>Your Orders List is Feeling a Bit Lonely</h2>
            <p>
              Uh-oh! It seems like your orders list is empty. Time to fill it up
              with delightful goodies!
            </p>
            <p>
              Explore our amazing products and treat yourself to something
              special.
            </p>
            <Link
              to="/"
              className="btn w-25 mx-auto my-5 btn-outline-light custom-btn fs-6 px-auto"
            >
              Start Shopping <i className="bi bi-cart fs-4 ms-2"></i>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
