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
          className="form-check w-100"
          data-bs-toggle="collapse"
          data-bs-target={`#card-${index}`} 
          aria-expanded="true"
          aria-controls={`card-${index}`}
        >
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={`flexRadioCard${index}`}
            onClick={() => {
              handleSetPayment(); 
            }}
          />
          <div className="d-flex justify-content-between w-100">
            <label
              className="form-check-label gray1"
              htmlFor={`flexRadioCard${index}`}
            >
              Account: {payment?.account_no}
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