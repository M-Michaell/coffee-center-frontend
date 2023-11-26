import OrderProducts from "../../../pages/Order/componants/OrderProducts";
import { OrderDetailsApi } from "../../../apis/order_details";
import React, { useEffect, useState } from "react";
import TrackOrder from "../../../pages/Order/componants/TrackOrder";
import "../../../pages/Cart/main.css";
// import "./../../pages/Cart/main.css";
import TotalPrice from "../../../pages/Order/componants/TotalPrice";
import { useParams } from "react-router-dom";

export default function AdminOrder() {
  const { order_id } = useParams();
  console.log(order_id);
  const orderDetailsInstance = OrderDetailsApi(order_id);
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
            <div className="orange" style={{marginTop:'150px',fontSize:'42px'}}>UNPAID</div>
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
