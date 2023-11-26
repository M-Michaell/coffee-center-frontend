import { useState, useEffect } from "react";
import { AdminSetOrderTracingApi } from "../../../apis/order_details";
import { useNavigate } from "react-router-dom";

export default function OrderComponent({ order }) {
  const [currentTrace, setCurrentTrace] = useState(order.tracing);
  const tracingApi = AdminSetOrderTracingApi();
  const traceMapper = {
    o: "Ordered",
    s: "Shipped",
    w: "On the way",
    d: "Delivered",
  };
  const traceColorMapper = {
    o: "btn-secondary",
    s: "btn-primary",
    w: "btn-danger",
    d: "btn-success",
  };
  const traces = ["o", "s", "w", "d"];

  const handleOrderTracing = (event) => {
    const currentIndex = traces.indexOf(currentTrace);
    const nextIndex = (currentIndex + 1) % traces.length;
    const nextTrace = traces[nextIndex];
    const traceButton = event.target;

    tracingApi
      .setOrderTracing(order.id, nextTrace)
      .then((response) => {
        const updatedTrace = response.data.orders.tracing;
        setCurrentTrace(updatedTrace);
        traceButton.innerText = traceMapper[updatedTrace];
        traceButton.className = `btn ${traceColorMapper[updatedTrace]}`;
        console.log("Response:", updatedTrace);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const navigate = useNavigate()
    const handleOrderNavigate = () => {
        navigate(`/Admin/order/${order.id}/`)
    }

  useEffect(() => {
    setCurrentTrace(order.tracing);
  }, [order.tracing]);
  return (
    <div>
      <div
        className="card bg-transparent text-light border-2"
        style={{ width: "100%", boxShadow: "0 0 5px var(--orange)" }}
      >
        <div
          className="card-header row text-start m-auto p-auto"
          style={{ width: "100%", borderBottom: "1px solid var(--orange)" }}
        >
          <div className="col-2 text-center">
            <span className="fw-bold">
              Order: <br></br>
            </span>
            <a onClick={handleOrderNavigate}>
            {order.id}
            </a>
          </div>
          <div className="col-4">
            <span className="fw-bold">
              Order Placed in: <br></br>
            </span>
            {order.created_at}
          </div>
          <div className="col-2">
            <span className="fw-bold">Total: </span> <br></br>
            {order.price}$
          </div>
          <div className="col-4 justify-content-end d-flex py-1 my-1">
            <button
              className={`btn ${traceColorMapper[currentTrace]} py-0`}
              id="orderTracingButton"
              style={{ width: "200px" }}
              onClick={handleOrderTracing}
              disabled={order.paid === 'NP' && order.paidBy !== 'cash'}
            >
              {traceMapper[currentTrace]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
