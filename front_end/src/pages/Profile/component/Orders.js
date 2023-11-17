import React from 'react';

export default function OrdersComponent() {
  return (
    <div>
      <h1 className='text-start fw-bold mb-3' style={{ color: "white" }}>Your Orders</h1>

      <div className="card bg-transparent text-light border-2" style={{ width: '100%', boxShadow: "0 0 5px var(--orange)" }}>
        <div className="card-header row text-start m-auto p-auto" style={{ width: '100%', borderBottom: "1px solid var(--orange)" }}>
          <div className='col-4'>
            <span className='fw-bold'>Order Placed in: <br></br></span>
            12/12/2001
          </div>
          <div className="col-4" ><span className='fw-bold'>Total: </span> <br></br>234$</div>
          <div className="col-4"><a href="#">view order details</a></div>
        </div>
        <div className="card-body text-start row">
         <div className="col-8">
          <img src="" alt="order item image"/>
          <p>Description</p>
          <button type="button" className="btn btn-primary">view details</button>
         </div>
         <div className='col-2'>
          <button type="button" className='btn btn-primary'>Track Order</button>
          <hr></hr>
          <span>OR Track Status</span>
         </div>
        </div>
      </div>
    </div>
  );
}
