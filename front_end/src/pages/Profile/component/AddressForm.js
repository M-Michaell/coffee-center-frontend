import React, {useState} from "react";
import "../profile.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "animate.css/animate.min.css";
import { useEffect } from "react";
import { axiosInstance } from "../../../apis/config";
import { useNavigate } from "react-router-dom";
 
export default function AddressPage() {
  useEffect(() => {
    const truckIcon = document.getElementById("truck-icon");
    if (truckIcon) {
      console.log("Adding Animation Classes");
      truckIcon.classList.add("animate__animated", "animate__slideInLeft");
    }

    // Cleanup: Remove animation class when the component unmounts
    return () => {
      if (truckIcon) {
        console.log("Removing Animation Classes");
        truckIcon.classList.remove("animate__animated", "animate__slideInLeft");
      }
    };
  }, []); // Empty dependency array ensures this effect runs once after the component mounts

  const navigate = useNavigate()
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  
  const handleSaveAddress = () => {
    // Get values from form fields

    // Create an object with the data
    const addressData = {
      user: 3,
      telephone,
      mobile,
      address_line1: addressLine1,
      country,
      city,
      postal_code: postalCode,
      // Add more fields if needed
    };

    // Send a POST request to the API endpoint
    axiosInstance
      .post("/accounts/api/address/", addressData)
      .then((response) => {
        console.log("Address saved successfully:", response.data);
        // Navigate to the profile page or any other desired page after successful save
        navigate("/profile");
      })
      .catch((error) => {
        console.error("Error saving address:", error);
        // Handle errors as needed
      });
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
              className="me-2"
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

      <Grid container>
        <Grid item xs={12} md={6} mb={4}>
          <div style={{ marginRight: "8px" }}>
          <TextField
                        fullWidth
                        select
                        id="country"
                        label="Country"
                        variant="outlined"
                        value={country}  // <-- set the value prop
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <MenuItem value="Egypt">Egypt</MenuItem>
                        <MenuItem value="Jordan">Jordan</MenuItem>
                        <MenuItem value="Oman">Oman</MenuItem>
                      </TextField>
          </div>
        </Grid>
        <Grid item xs={12} md={6} mb={4}>
          <TextField
            fullWidth
            select
            id="city"
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <MenuItem value="some city">Option 1</MenuItem>
            <MenuItem value="some city">Option 2</MenuItem>
            <MenuItem value="some city">Option 3</MenuItem>
          </TextField>
        </Grid>
      </Grid>

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
