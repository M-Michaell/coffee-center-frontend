import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import { axiosInstance } from "../../../apis/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AddressEdit() {
  const [telephoneError, setTelephoneError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const user = useSelector((state) => state.auth.userInfo);
  const egyptianMobileRegex = /^(012|011|010|015)\d{8}$/;
  const egyptianLandlineRegex = /^0[2-9]\d{7}$/;

  const egyptGovernorates = [
    "Alexandria",
    "Assiut",
    "Aswan",
    "Beheira",
    "Bani Suef",
    "Cairo",
    "Daqahliya",
    "Damietta",
    "Fayyoum",
    "Gharbiya",
    "Giza",
    "Ismailia",
    "Kafr El Sheikh",
    "Luxor",
    "Marsa Matrouh",
    "Minya",
    "Monofiya",
    "New Valley",
    "North Sinai",
    "Port Said",
    "Qalioubiya",
    "Qena",
    "Red Sea",
    "Sharqiya",
    "Sohag",
    "South Sinai",
    "Suez",
  ];

  const validateForm = () => {
    let isValid = true;
    if (telephone) {
      if (!egyptianLandlineRegex.test(telephone)) {
        setTelephoneError("Invalid telephone number");
        isValid = false;
      } else {
        setTelephoneError("");
      }
    }

    if (!egyptianMobileRegex.test(mobile)) {
      setMobileError("Invalid mobile number");
      isValid = false;
    } else {
      setMobileError("");
    }

    return isValid;
  };
  useEffect(() => {
    axiosInstance
      .get(`/accounts/api/address/${user.id}/${id}/`)
      .then((response) => {
        const userData = response.data.User;

        // Extract values and set the state
        setTelephone(userData.telephone || "");
        setMobile(userData.mobile || "");
        setAddressLine1(userData.address_line1 || "");
        setCity(userData.city || "");
        setPostalCode(userData.postal_code || "");
      })
      .catch((error) => {});
  }, [id]);

  const handleSaveAddress = () => {
    if (validateForm()) {
      const updatedAddressData = {
        user: user.id,
        telephone,
        mobile,
        address_line1: addressLine1,
        city,
        postal_code: postalCode,
      };

      axiosInstance
        .put(`/accounts/api/address/${user.id}/${id}/`, updatedAddressData)
        .then((response) => {
          navigate("/profile"); // Redirect to the profile page or any other desired page after successful update
        })
        .catch((error) => {
          if (error.response) {
            // The request was made, but the server responded with a status code
            // outside of the 2xx range.
            console.error(
              "Server responded with an error:",
              error.response.data
            );
          } else if (error.request) {
            // The request was made, but no response was received.
            console.error("No response received from the server");
          } else {
            // Something happened in setting up the request that triggered an Error.
            console.error("Error setting up the request:", error.message);
          }
        });
    }
  };

  return (
    <div className="container py-5">
      <Grid container justifyContent="center" alignItems="center">
        <Card
          className="my-4"
          style={{ boxShadow: "0px 0px 20px var(--orange)" }}
        >
          <Grid container>
            <Grid item xs={12} md={6} className="position-relative">
              <img
                src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp"
                alt="Sample photo"
                className="img-fluid h-100"
              />
              <div
                className="position-absolute top-0 start-0 end-0 bottom-0 "
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              ></div>
              <div className=" position-absolute top-50 start-50 translate-middle text-center text-white">
                <i
                  className="fas fa-shipping-fast text-white fa-3x"
                  id="truck-icon"
                ></i>
                <p className="text-white title-style">CoffeeGeek delivery</p>
                <Typography
                  variant="body1"
                  className="text-white mb-0"
                ></Typography>
                <figure className="text-center mb-0">
                  <blockquote className="blockquote text-white">
                    <p className="pb-3">
                      <i
                        className="fas fa-quote-left fa-xs text-primary"
                        style={{
                          color: "hsl(210, 100%, 50%)",
                        }}
                      ></i>
                      <span className="lead font-italic">
                        What you love at your doorstep.
                      </span>
                      <i
                        className="fas fa-quote-right fa-xs text-primary"
                        style={{
                          color: "hsl(210, 100%, 50%)",
                        }}
                      ></i>
                    </p>
                  </blockquote>
                </figure>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent className="p-md-5 text-black">
                <Typography
                  variant="h3"
                  className="mb-4 text-uppercase"
                  style={{ color: "var(--orange)" }}
                >
                  Address Info
                </Typography>

                <Grid container>
                  <Grid item xs={12} md={6} mb={4}>
                    <div style={{ marginRight: "8px" }}>
                      <TextField
                        fullWidth
                        id="telephone"
                        label="Telephone"
                        variant="outlined"
                        error={Boolean(telephoneError)}
                        helperText={telephoneError}
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} mb={4}>
                    <TextField
                      fullWidth
                      id="mobile"
                      label="Mobile"
                      variant="outlined"
                      error={Boolean(mobileError)}
                      helperText={mobileError}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  id="address_line1"
                  label="Address"
                  variant="outlined"
                  className="form-outline mb-4"
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                />

                <TextField
                  fullWidth
                  select
                  id="city"
                  label="Governorate"
                  className="form-outline mb-4"
                  variant="outlined"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  {egyptGovernorates.map((governorate) => (
                    <MenuItem key={governorate} value={governorate}>
                      {governorate}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  id="postal_code"
                  label="Postal Code"
                  variant="outlined"
                  className="form-outline mb-4"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />

                <div className="d-flex justify-content-center pt-3 text-dark">
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    style={{ backgroundColor: "var(--orange)" }}
                    onClick={handleSaveAddress}
                  >
                    Save Address
                  </Button>
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}
