import OrderProducts from "./componants/OrderProducts";
import { OrderDetailsApi } from "../../apis/order_details";
import React, { useEffect, useState } from "react";
import TrackOrder from "./componants/TrackOrder";
import "./../Cart/main.css";
import TotalPrice from "./componants/TotalPrice";
import Checkout from "../paypal/paypal";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Order() {
  const { order_id } = useParams();
  const user = useSelector((state) => state.auth.userInfo);
  console.log('user',user)
  const orderDetailsInstance = OrderDetailsApi(order_id,user.id);
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
    <div className="p-5 m-5" style={{ border: "1px orange solid" }}>
      {orderDetails ? (
        <div className="vh-100 mt-5">
          <h1 className="orange pb-5">Thank you for your order</h1>
          <OrderProducts order_items={orderDetails.order_items} />
          <TotalPrice
            price={orderDetails.payment_method.amount}
            price_before={orderDetails.payment_method.total_price}
          />

          {orderDetails.payment_method.provider !== "cash" &&
          orderDetails.payment_method.status == "NP" ? (
            <div className="d-flex align-items-center flex-column pt-5 mt-5">
              <h1 className="orange">Confirm Your Payment</h1>
              <Checkout order={orderDetails} />
            </div>
          ) : (
            <div className="pt-5 mt-5">
              <h1 className="orange">Tracking</h1>
              <TrackOrder tracing={orderDetails.payment_method.tracing} />
            </div>
          )}

          
        </div>
      ) : (
        <p className="p-5 m-5">Loading...</p>
      )}
    </div>
  );
}
