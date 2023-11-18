import React from "react";
import { useAddressData } from "../../../apis/profile";
import image from "../../../assets/images/addresspt4.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import { useNavigate } from "react-router-dom";
import { deleteAddress } from '../../../apis/profile';

export default function AddressesComponent() {
  const { addressData , refetchAddresses} = useAddressData();
  const navigate = useNavigate();
  const handleAddAddressClick = () => {
    navigate("/addressform");
  };
  const handleDeleteClick = async (addressId) => {
    try {
      // Send a delete request to your API
      await deleteAddress(addressId);

      // Refetch the addresses to update the UI
      refetchAddresses();
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };
  const handleEditClick = (addressId) => {
    navigate(`/addressform/${addressId}`);
  };
  return (
    <div className="container p-3" style={{ height: "90%" }}>
      {addressData && addressData.length === 0 ? (
        <>
          <div
            className="bg-image d-flex align-items-end justify-content-center "
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "100%", // Set height to 100%
            }}
          >
          </div>
            <h3>
              <span
                className="fw-bold text-light "
                style={{ bottom: "0" }}
              >
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
              style={{ width: "100%", boxShadow: "0 0 5px rgba(255, 255, 255, 0.9)" }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    {Object.entries(address).map(([key, value]) => {
                      // List of properties to display
                      const displayProperties = [
                        "telephone",
                        "mobile",
                        "address_line1",
                        "country",
                        "city",
                        "postal_code",
                      ];

                      // Check if the current key is in the list of display properties
                      if (displayProperties.includes(key)) {
                        // Convert the first letter of the key to uppercase
                        const formattedKey =
                          key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/_/g, " ");

                        return (
                          <div
                            key={key}
                            className="d-flex justify-content-start mb-2"
                          >
                            <div className="me-3 col-2" style={{color:"var(--orange)"}}>
                              <span className="fw-bold">{formattedKey}:</span>
                            </div>
                            <div className="col-2 text-light">
                              <span>{value}</span>
                            </div>
                          </div>
                        );
                      }

                      return null; // Skip rendering for properties not in the display list
                    })}
                  </div>
                  <div className="col-3 d-flex align-items-end">
                    <button type="button" className="btn btn-primary me-4" onClick={() => handleEditClick(address.id)}>
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteClick(address.id)}>
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
        className="btn btn-primary fw-bold mt-3 d-inline-block "
        onClick={handleAddAddressClick}
      >
        ADD NEW ADDRESS
      </button>
    </div>
  );
}
