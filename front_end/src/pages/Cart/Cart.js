import CartItems from "./component/CartItems";
import "./main.css";
import map from "../../assets/map.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import Address from "./component/address";
import Payment from "./component/payment";
import Messages from "./component/errorMessages";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth.userInfo);
  const addresses = useSelector((state) => state.user?.addresses);
  const payments = useSelector((state) => state.user?.payments);
  const [Delivery, setDelivery] = useState(0);
  const [DeliveryAddress, setDeliveryAddress] = useState();
  const [payment, setPayment] = useState();
  const [must, setMust] = useState([]);
  const navigate = useNavigate();

  const addDelivery = () => {
    setDelivery(50);
  };
  const removeDelivery = () => {
    setDelivery(0);
  };
  const handleAdress = () => {
    navigate("/addressform");
  };
  const handlePayment = () => {
    navigate("/paymentform");
  };

  return (
    <>
      <div
        className="container text-start"
        style={{ backgroundColor: "var(--background)" }}
      >
        <h2 className="orange mt-4 text-start fs-1 ms-5">Cart</h2>

        <hr
          className=" orange mb-5"
          style={{ backgroundColor: "var(--orange)", height: "3px" }}
        />
        <div className="mb-5">
          {must?.map((item, index) => (
            <div key={index}>
              <Messages item={item} must={must} setMust={setMust} />
            </div>
          ))}
        </div>
        <div className="row g-4">
          {/* Cart Items (order-1 on small screens) */}
          <div className="col-xl-5 col order-2 order-md-2">
            <CartItems
              Delivery={Delivery}
              payment={payment}
              DeliveryAddress={DeliveryAddress}
              setMust={setMust}
              user={user}
            />
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
                  <div className="col-xl-6 col"> UserName:{user.username}</div>
                  <div className="col-xl-6 col">
                    {" "}
                    Name:{user.first_name} {user.last_name}
                  </div>
                  <div className="col-xl-6 col"> Email: {user.email}</div>
                  <div className="col-xl-6 col"> Phone: {user.phone}</div>
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
                  <form>
                    <div
                      className="form-check w-100  "
                      data-bs-toggle="collapse"
                      data-bs-target="#mapstore"
                      aria-expanded="true"
                      aria-controls="collapseExample"
                    >
                      <input
                        className="form-check-input "
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onClick={() => {
                          setDeliveryAddress({ Address: "from store" });
                          removeDelivery();
                        }}
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
                        {/* <img className="img-fluid" src={map} alt=".." /> */}
                        <div className="videowrap">
                        <iframe
                            title="mapstore"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.608035877899!2d31.352869!3d31.040000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838d0f1c327ed%3A0x533395a3a9dd06d7!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1662384760663!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                          ></iframe>
                          </div>

                      </div>
                    </div>
                    {/* end first */}
                    {/* second */}
                    <div
                      className=""
                      data-bs-toggle="collapse"
                      data-bs-target="#adress"
                      aria-expanded="true"
                      aria-controls="collapseExample"
                    >
                      <div className="d-flex justify-contant-between align-items-center w-100">
                        <span
                          className="orange fs-3 ps-0"
                          style={{ color: "var(--orange)" }}
                          onClick={addDelivery}
                        >
                          &#9660;
                        </span>

                        <label
                          className="form-check-label gray1"
                          htmlFor="flexRadioDefault2"
                        >
                          Delivery it to your place
                        </label>
                        <p className=" ms-3 mb-0 fff"> +50 EGP</p>
                      </div>
                      <div className="collapse ms-3" id="adress">
                        {addresses?.map((address, index) => (
                          <Address
                            address={address}
                            setDeliveryAddress={setDeliveryAddress}
                            key={index}
                            index={index}
                          />
                        ))}
                        <div>
                          <button
                            onClick={handleAdress}
                            className="btn btn-outline-light mt-5 custom-btn d-block"
                          >
                            Add Address
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/*end second */}
                </div>
              </div>
            </div>
            {/* End deliery Details */}
            {/* start paymentDetails */}
            <div className="d-flex">
              <div>
                <p className="custom-border px-2 fs-5 fff me-3">3</p>
              </div>
              <div>
                <p className="ms-3 fff fs-5 text-start">Payment Details</p>
                <div className="row g-4 text-nowrap fs-5 gray1">
                  <form>
                    <div className="form-check ms-1">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="flexRadioDefault"
                        id="upon"
                        onClick={() => {
                          setPayment({ payment: "cash" });
                        }}
                      />
                      
                      <label className="form-check-label" htmlFor="upon">
                        Upon receipt of the items
                      </label>
                    </div>

                    <div className="form-check ms-1">
                      <input
                        className="form-check-input "
                        type="radio"
                        name="flexRadioDefault"
                        id="paypal"
                        onClick={() => {
                          setPayment({ payment: "paypal" });
                        }}
                      />
                      
                      <label className="form-check-label" htmlFor="paypal">
                        PayPal
                      </label>
                    </div>

                    <div
                      className=" "
                      data-bs-toggle="collapse"
                      data-bs-target="#onlinecard"
                      aria-expanded="true"
                      aria-controls="collapseExample"
                    >
                      <span
                        className="orange fs-3 ps-0"
                        style={{ color: "var(--orange)" }}
                      >
                        &#9660;
                      </span>
                      <span className="form-check-label" htmlFor="onlinecard1">
                        By online card
                      </span>
                    </div>
                    <div className="collapse ms-3 mb-3" id="onlinecard">
                      {payments?.map((payment, index) => (
                        <Payment
                          payment={payment}
                          setPayment={setPayment}
                          key={index}
                          index={index}
                        />
                      ))}
                      <div>
                        <button
                          
                          onClick={handlePayment}
                          className="btn btn-outline-light m-3 mt-4 custom-btn d-block"
                        >
                          Add Card
                        </button>
                      </div>
                    </div>

                    {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="vodafone"
                      />
                      <label className="form-check-label" htmlFor="vodafone">
                        vodafone Cash
                      </label>
                    </div> */}
                  </form>
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
