import OrderProducts from "./componants/OrderProducts";
import { OrderDetailsApi } from "../../apis/order_details";
import React, { useEffect, useState } from "react";

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
    <div>
        {orderDetails ? (
        <div className="vh-100 mt-5">
          <OrderProducts order_items={orderDetails.order_items}/>
        </div>
          ) : (
            <p>Loading...</p>
          )}
        
        
        
    </div>
  )
}
