import React, { useState } from "react";

function Address(props) {
  const { address, setDeliveryAddress, index } = props;


  const handleSetAddress = () => {
    console.log("setAddres",address);
    setDeliveryAddress(address);
  };
  return (
    <>
    <fieldset>
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
          id={`flexRadioDefault${index}`}
          onClick={handleSetAddress}
        />
        <div className="d-flex justify-content-between w-100">
          <label
            className="form-check-label gray1"
            htmlFor={`flexRadioDefault${index}`}
          >
            {address.address_line1}
            {/* Assuming you have a property named "name" in your address object */}
          </label>
        </div>

      </div>
      <div className="collapse" id={`address-${index}`}>
        <h3>Address Details</h3>
        <div className="row">
            <div className="col">Details: {address.address_line1}</div>
            <div className="col">City: {address.city}</div>
            <div className="col">postal_code: {address.postal_code}</div>
            <div className="col">countery: {address.country}</div>
            <div className="col">Mobile: {address.mobile}</div>


        </div>
      </div>
      <div>
        <a href="#" className="btn btn-outline-light mt-5 custom-btn">
        Add Address
      </a>
        </div>
        </fieldset>
    </>
  );
}

export default Address;
