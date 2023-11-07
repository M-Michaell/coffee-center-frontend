import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";

function CartItems() {
  return (
    <>
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fff mb-0">Promo code</p>
          <a className="orange btn btn-outline-warning rounded-pill px-5 py-0">
            Add
          </a>
        </div>
        <hr className="fff" />
        <div>
          <div className="d-flex gray1 w-75 justify-content-evenly fs-5">
            <p>items</p>
            <p className="fff">price</p>
          </div>

          {/* /////////////// */}
          <div className="mt-5">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-xl-4 col-xxl-4">
                <div className="card  rounded-5 w-100">
                  <img
                    className="img-fluid h-100 rounded-5 shadow-lg "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6R30Iix8-fjF7Lgnaqu4TXhRBbPLqKpJbsrKkMIJ3VRXbUWvOiEymJpKnHhhslDWQAg&usqp=CAU"
                    alt="Card cap"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-xl-8 col-xxl-8 d-flex">
                <div className="card border-0 w-100">
                  <div className="card-body text-start d-flex justify-content-evenly flex-column align-items-start ">
                    <div className="d-flex justify-content-between">
                      <h4 className="orange">this is coffee</h4>
                    </div>

                    <p className="gray1 fw-bold mb-1">Egyption coffee</p>
                    <p className="gray1 py-0 my-0 ">250 g</p>
                    {/* controls */}
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div className="d-flex align-items-center">
                        <a className="fs-5 gray1 p-2">
                          <FontAwesomeIcon icon={faMinus} />
                        </a>
                        <p className="fff fs-3 p-2">1</p>
                        <a className="fs-5 orange p-2 ">
                          <FontAwesomeIcon icon={faPlus} />
                        </a>
                        <a className="fs-4 px-3 gray1">
                          <FontAwesomeIcon icon={faX} />
                        </a>
                      </div>
                      <p className="fff">250 Eg</p>
                    </div>
                    {/* end controls */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /////////////////// */}

          {/* start total */}
          <hr className="fff" />
          <div className="d-flex flex-column w-75 mx-auto my-5 ">
            <div className="d-flex justify-content-between mb-0 pb-0">
              <p className="gray1 p-0 m-0">Discount</p>
              <p className="fff fs-5 m-0 p-0">250 EG</p>
            </div>
            <div className="d-flex justify-content-between mt-0 pt-0">
              <p className="gray1 p-0 m-0">Delivery</p>
              <p className="fff fs-5 p-0 m-0">250 EG</p>
            </div>
            <div className="d-flex justify-content-between my-4">
              <p className="gray1 ms-3 fs-5">To pay</p>
              <p className="fff fs-4">250 EG</p>
            </div>

            <a
              className="btn rounded-pill fff w-75 align-self-end py-2"
              style={{ background: "var(--orange)" }}
            >
              Confirm the order
            </a>
          </div>
          {/* end total */}
        </div>
      </div>
    </>
  );
}

export default CartItems;
