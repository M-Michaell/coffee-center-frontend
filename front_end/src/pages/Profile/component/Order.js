import { useNavigate } from "react-router-dom";


export default function OrderComponent({order}){
    const navigate = useNavigate()
    const handleOrderDetails = () => {
        navigate(`/order/${order.id}/`)
    }
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
          <div className="col-4">
            <span className="fw-bold">
              Order Placed in: <br></br>
            </span>
            {order.created_at}
          </div>
          <div className="col-4">
            <span className="fw-bold">Total: </span> <br></br>{order.price}$
          </div>
          <div className="col-4">
            <button className="btn btn-secondary" onClick={handleOrderDetails}>view order details</button>
          </div>
        </div>
        {/* <div className="card-body text-start row">
          <div className="col-8">
            <img src="" alt="order item image" />
            <p>Description</p>
            <button type="button" className="btn btn-primary">
              view details
            </button>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary">
              Track Order
            </button>
            <hr></hr>
            <span>OR Track Status</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};
