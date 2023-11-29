import React from "react";
import { useAddressData } from "../../../apis/profile";
import image from "../../../assets/images/addresspt4.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { deleteAddress } from "../../../apis/profile";

export default function AddressesComponent({ userId }) {
  const { addressData, refetchAddresses } = useAddressData(userId);
  const navigate = useNavigate();

  const handleAddAddressClick = async () => {
    navigate("/addressform");
    await window.location.reload();
  };

  const handleDeleteClick = async (addressId) => {
    try {
      await deleteAddress(userId, addressId);
      refetchAddresses();
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  const handleEditClick = async (addressId) => {
    navigate(`/addressform/${addressId}`);
    await window.location.reload();
  };

  return (
    <div className="container p-3" style={{ height: "90%" }}>
      {addressData && addressData.length === 0 ? (
        <>
          <div
            className="bg-image d-flex align-items-end justify-content-center"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "100%",
            }}
          ></div>
          <h3>
            <span className="fw-bold text-light" style={{ bottom: "0" }}>
              No addresses saved
            </span>
          </h3>
        </>
      ) : (
        <div className="welcome-address">
          {addressData?.map((address) => (
            <div
              className="card w-100 text-start mb-3 bg-transparent"
              key={address.id}
              style={{
                width: "100%",
                boxShadow: "0 0 5px rgba(255, 255, 255, 0.9)",
              }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    {Object.entries(address).map(([key, value]) => {
                      const displayProperties = [
                        "telephone",
                        "mobile",
                        "address_line1",
                        "city",
                        "postal_code",
                      ];

                      if (displayProperties.includes(key)) {
                        const formattedKey =
                          key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/_/g, " ");

                        return (
                          <div
                            key={key}
                            className="d-flex justify-content-start mb-2"
                          >
                            <div
                              className="me-3 col-2"
                              style={{ color: "var(--orange)" }}
                            >
                              <span className="fw-bold">{formattedKey}:</span>
                            </div>
                            <div className="col-2 text-light">
                              <span>{value}</span>
                            </div>
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                  <div className="col-3 d-flex align-items-end">
                    <button
                      type="button"
                      className="btn btn-outline-light mt-5 custom-btn"
                      onClick={() => handleEditClick(address.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger ms-5 mt-5 custom-btn"
                      onClick={() => handleDeleteClick(address.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        type="button"
        className="btn btn-outline-light mt-5 custom-btn"
        onClick={handleAddAddressClick}
      >
        ADD NEW ADDRESS
      </button>
    </div>
  );
}


