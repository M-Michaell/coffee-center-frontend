import OrderProducts from "./componants/OrderProducts";
import { OrderDetailsApi } from "../../apis/order_details";
import React, { useEffect, useState } from "react";
import TrackOrder from "./componants/TrackOrder";
import "./../Cart/main.css";
import TotalPrice from "./componants/TotalPrice";

export default function Order() {
  const orderID = 1;
  const orderDetailsInstance = OrderDetailsApi(orderID);
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await orderDetailsInstance.get();
        setOrderDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-5 m-5"style={{border:'1px orange solid'}}>
      {orderDetails ? (
        <div className="vh-100 mt-5">
          <h1 className="orange pb-5">Thank you for your order</h1>
          <OrderProducts order_items={orderDetails.order_items} />
          <TotalPrice price={orderDetails.payment_method.amount} />
          <div className="pt-5 mt-5">
            <h1 className="orange">Tracking</h1>
              <TrackOrder />
          </div>
        </div>
      ) : (
        <p className="p-5 m-5">Loading...</p>
      )}
    </div>
  );
}
