import React, { useEffect, useState } from "react";
import OrderComponent from "./Order";
import { UserOrdersApi } from "../../../apis/order_details";

export default function OrdersComponent({ user }) {
  const [userOrders, setUserOrders] = useState(null);
  const userOrdersDetails = UserOrdersApi(user.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userOrdersDetails.get();
        setUserOrders(response.data.orders);
        console.log("user orders: ", response.data.orders);
      } catch (error) {
        console.error("Error fetching user order details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-start fw-bold mb-3" style={{ color: "white" }}>
        Your Orders
      </h1>
      {userOrders
        ? userOrders.map((order, index) => (
            <div className="pb-5">
              <OrderComponent key={order.id} order={order}/>
            </div>
          ))
        : "Loading..."}
    </div>
  );
}
