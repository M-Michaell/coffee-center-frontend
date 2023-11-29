import React, { useState } from "react";

function Address(props) {
  const { address, setDeliveryAddress, index,addDelivery } = props;


  const handleSetAddress = () => {
    setDeliveryAddress(address);
    addDelivery()
  };
  return (
    <>
    <div>
      <div
        className="form-check w-100"
        data-bs-toggle="collapse"
        data-bs-target={`#address-50${index}`}
        aria-expanded="true"
        aria-controls={`address-50`}
      >
        <input
          className="form-check-input mt-1"
          type="radio"
          name="flexRadioDefault"
          id={`flexRadioDefault-50${index}`}
          onClick={handleSetAddress}
        />
        <div className="d-flex justify-content-between w-100">
          <label
            className="form-check-label gray1"
            htmlFor={`flexRadioDefault-50${index}`}
          >
            {address.address_line1}
          </label>
        </div>

      </div>
      <div className="collapse" id={`address-50${index}`}>
        <h3>Address Details</h3>
        <div className="row">
            <div className="col">Details: {address.address_line1}</div>
            <div className="col">City: {address.city}</div>
            <div className="col">postal_code: {address.postal_code}</div>
            <div className="col">Mobile: {address.mobile}</div>


        </div>
      </div>
     
        </div>
    </>
  );
}

export default Address;
