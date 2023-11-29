import React, { useEffect, useState } from "react";
import { UserOrdersApi } from "../../../apis/order_details";
import OrdersComponent from "./Order";

export default function Tracing({ user }) {
  const [maxDate, setMaxDate] = useState(getCurrentDate());

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
  }

  const handleFromChange = function () {
    const startDate = document.getElementById("startDateForTracing");
    const endDate = document.getElementById("endDateForTracing");
    endDate.min = startDate.value;
    if (endDate.value && endDate.value < startDate.value) {
      endDate.value = startDate.value;
    }
  };

  const [userOrders, setUserOrders] = useState(null);

  const fetchData = async (userOrdersDetails) => {
    try {
      const response = await userOrdersDetails.get();
      setUserOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching user order details:", error);
    }
  };

  const handleSearchByDate = () => {
    const startDate = document.getElementById("startDateForTracing").value;
    const endDate = document.getElementById("endDateForTracing").value;
    const userOrdersDetails = UserOrdersApi(user.id, startDate, endDate, true);
    fetchData(userOrdersDetails);
  };

  useEffect(() => {
    const userOrdersDetails = UserOrdersApi(user.id, null, null, true);
    fetchData(userOrdersDetails);
  }, []);

  return (
    <div className="">
      <div className="">
        <h1 className="text-start fw-bold mb-3" style={{ color: "var(--fff)" }}>
          Orders
        </h1>

        <div className="pt-5 pb-3 me-0 d-flex flex-row border-2">
          <div
            className="col input-group me-3 "
            style={{ border: "gray solid 1px" }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text border-0">From</span>
            </div>
            <input
              className="form-control bg-dark border-0 text-light"
              id="startDateForTracing"
              type="date"
              max={maxDate}
              onChange={handleFromChange}
            />
          </div>

          <div
            className="col input-group me-3"
            style={{ border: "gray solid 1px" }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text border-0">To</span>
            </div>
            <input
              className="form-control bg-dark border-0 text-light"
              id="endDateForTracing"
              type="date"
              max={maxDate}
            />
          </div>

          <button className="col btn btn-dark" onClick={handleSearchByDate}>
            Search
          </button>
        </div>
      </div>
      {userOrders
        ? userOrders.map((order, index) => (
            <div className="pb-5">
              <OrdersComponent key={order.id} order={order} />
            </div>
          ))
        : "Loading..."}
    </div>
  );
}
