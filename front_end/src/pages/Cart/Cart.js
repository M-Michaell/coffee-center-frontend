import CartItems from "./component/CartItems";
import "./main.css";
import map from "../../assets/map.png";
import { useState } from "react";

function Cart() {
  const [Delivery, setDelivery] = useState(0);

  const onCheck = () => {
    Delivery === 0 ? setDelivery(50) : setDelivery(0); // Set the delivery cost to 50
  };


  return (
    <>
      <div
        className="container text-start"
        style={{ backgroundColor: "var(--background)" }}
      >
        <h2 className="orange mt-4 text-start fs-1 ms-5">
          Cart
          <hr></hr>
        </h2>
        <div className="row g-2">
          {/* Cart Items (order-1 on small screens) */}
          <div className="col-xl-5 col order-2 order-md-2">
            <CartItems Delivery={Delivery} />
          </div>

          {/* Details and Delivery (order-2 on small screens) */}
          <div className="col-xl-7 col mt-3 order-1 order-md-1">
            {/* Details */}
            <div className="d-flex">
              <div>
                <p className="custom-border px-2 fs-5 fff me-3">1</p>
              </div>
              <div>
                <p className="ms-3 fff fs-5 text-start">Personal Details</p>
                <div className="row g-4 text-nowrap fs-5 gray1">
                  <div className="col-xl-6 col"> name: michael maher</div>
                  <div className="col-xl-6 col">
                    {" "}
                    email: michaelmaher@gmail.com
                  </div>
                  <div className="col-xl-6 col"> phone: 023212656565</div>
                  <div className="col-xl-6 col"> city: mansoura</div>
                </div>
              </div>
            </div>
            {/* End Details */}
            {/*deliery Details */}
            <div className="d-flex mt-5 w-100">
              <div>
                <p className="custom-border px-2 fs-5 fff me-3">2</p>
              </div>
              <div className="mb-5">
                <p className="ms-3 fff fs-5 text-start">Delivery Details</p>
                <div className="row g-4 text-nowrap fs-5">
                  {/* first */}
                  <div
                    className="form-check w-100 "
                    data-bs-toggle="collapse"
                    data-bs-target="#mapstore"
                    aria-expanded="true"
                    aria-controls="collapseExample"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={onCheck}
                    />
                    <div className="d-flex justify-contant-between w-100">
                      <label
                        className="form-check-label gray1"
                        htmlFor="flexRadioDefault1"
                      >
                        Pick it from our store
                      </label>
                      <p className="justify-self-end ms-5 fff"> 0 EGP</p>
                    </div>
                  </div>
                  <div className="collapse" id="mapstore">
                    <div className="mb-5">
                      <img className="img-fluid" src={map} alt=".." />
                    </div>
                  </div>
                  {/* end first */}
                  {/* second */}
                  <div
                    className="form-check w-100 mt-0  "
                    data-bs-toggle="collapse"
                    data-bs-target="#adress"
                    aria-expanded="true"
                    aria-controls="collapseExample"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      onClick={onCheck}
                    />
                    <div className="d-flex justify-contant-between w-100">
                      <label
                        className="form-check-label gray1"
                        htmlFor="flexRadioDefault2"
                      >
                        Delivery it to your place
                      </label>
                      <p className="justify-self-end ms-5 fff"> 50 EGP</p>
                    </div>
                    <div className="collapse" id="adress">
                      <p>adress1</p>
                      <p>adress2</p>
                      <p>adress3</p>
                    </div>
                  </div>
                  {/*end second */}
                </div>
              </div>
            </div>
            {/* End deliery Details */}
            {/* start paymentDetails */}
            <div className="d-flex">
              <div>
                <p className="custom-border px-2 fs-5 fff me-3">1</p>
              </div>
              <div>
                <p className="ms-3 fff fs-5 text-start">Payment Details</p>
                <div className="row g-4 text-nowrap fs-5 gray1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="upon"
                    />
                    <label className="form-check-label" htmlFor="upon">
                      Upon receipt of the items
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="onlinecard"
                    />
                    <label className="form-check-label" htmlFor="onlinecard">
                      By online card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="vodafone"
                    />
                    <label className="form-check-label" htmlFor="vodafone">
                      vodafone Cash
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* end paymentDetails */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
