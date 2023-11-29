import React, { useState, useEffect } from "react";
import "../profile.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Fab, MenuItem } from "@mui/material";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "animate.css/animate.min.css";
import { axiosInstance } from "../../../apis/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AddressPage() {
  const user = useSelector((state) => state.auth.userInfo);
  useEffect(() => {
    // window.location.reload();
    const truckIcon = document.getElementById("truck-icon");
    if (truckIcon) {
      truckIcon.classList.add("animate__animated", "animate__slideInLeft");
    }

    // Cleanup: Remove animation class when the component unmounts
    return () => {
      if (truckIcon) {
        truckIcon.classList.remove("animate__animated", "animate__slideInLeft");
      }
    };
  }, []); // Empty dependency array ensures this effect runs once after the component mounts
  const [telephoneError, setTelephoneError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const navigate = useNavigate();
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const egyptianMobileRegex = /^01[0-2]\d{8}$/;
  const egyptianLandlineRegex = /^0[2-9]\d{7}$/;

  const validateForm = () => {
    let isValid = true;
    if (telephone){

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
  const handleSaveAddress = () => {
    if (validateForm()) {
      const addressData = {
        user: user.id,
        telephone,
        mobile,
        address_line1: addressLine1,
        city,
        postal_code: postalCode,
      };

      // Send a POST request to the API endpoint
      axiosInstance
        .post(`/accounts/api/address/${user.id}/`, addressData)
        .then((response) => {
          // Navigate to the profile page or any other desired page after successful save
          navigate("/profile");
        })
        .catch((error) => {
          console.error("Error saving address:", error);
          // Handle errors as needed
        });
    }
  };

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
                  variant="outlined"
                  className="form-outline mb-4"
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

                <div className="d-flex justify-content-center pt-3 text-dark ">
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
