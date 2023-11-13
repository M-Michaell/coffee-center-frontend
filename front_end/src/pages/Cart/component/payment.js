import React, { useState } from 'react'

function Payment(props) {
    const { payment, setPayment, index } = props;
   
  
    const handleSetPayment = () => {
      setPayment(payment);
    };
    return (
      <>
      <div>
        <div
          // Adding a unique key for each iteration
          className="form-check w-100"
          data-bs-toggle="collapse"
          data-bs-target={`#address-${index}`} // Making the target ID unique for each iteration
          aria-expanded="true"
          aria-controls={`address-${index}`}
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={`flexRadioCard${index}`}
            onClick={() => {
              handleSetPayment(); // Call your handleSetAddress function
            }}
          />
          <div className="d-flex justify-content-between w-100">
            <label
              className="form-check-label gray1"
              htmlFor={`flexRadioCard${index}`}
            >
              Account: {payment?.account_no}
              {/* Assuming you have a property named "name" in your address object */}
            </label>
          </div>
  
        </div>
        <div>
          <a href="#" className="btn btn-outline-light m-3 mt-4 custom-btn">
          Add Card
        </a>
          </div>
          </div>
      </>
    );
  }

export default Payment