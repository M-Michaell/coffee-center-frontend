import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../store/slices/auth";
import { toast } from "react-toastify";
import Loader from "../../general_components/Loader/Loader";

export default function RegistrationForm() {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const specialCharsRegex = /[^a-zA-Z0-9]/;
  const capitalLetterRegex = /[A-Z]/;
  const letterRegex = /[a-z]/;
  const phoneRegex = /^(?:\+20|0)?1[0-2]\d{8}$/;
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    re_password: "",
    // ...
  });

  const [err, setErr] = useState({
    first_name: null,
    last_name: null,
    email: null,
    phone: null,
    username: null,
    password: null,
    re_password: null,
    checked: null,
  });

  const handleInput = (e) => {
    if (e.target.name === "last_name") {
      setFormInput({ ...formInput, last_name: e.target.value });
    }
    if (e.target.name === "first_name") {
      setFormInput({ ...formInput, first_name: e.target.value });
    }
    if (e.target.name === "password") {
      setFormInput({ ...formInput, password: e.target.value });
      setErr({
        ...err,
        password:
          e.target.value.length < 8
            ? "length should be 8 or more"
            : null || !specialCharsRegex.test(e.target.value)
            ? "must have special char"
            : null || !letterRegex.test(e.target.value)
            ? "must have 1 letter at least"
            : null || !capitalLetterRegex.test(e.target.value)
            ? "must have capital letter"
            : null,
      });
    }
    if (e.target.name === "username") {
      setFormInput({ ...formInput, username: e.target.value });
      setErr({
        ...err,
        username: !letterRegex.test(e.target.value)
          ? "must have 1 letter at least"
          : null,
      });
    }
    if (e.target.name === "email") {
      setFormInput({ ...formInput, email: e.target.value });
      setErr({
        ...err,
        email: emailRegex.test(e.target.value)
          ? null
          : e.target.value.length === 0
          ? "This field is required"
          : "Enter a valid email address example , xxx@example.com",
      });
    }
    if (e.target.name === "confirmPassword") {
      setFormInput({ ...formInput, re_password: e.target.value });
      setErr({
        ...err,
        re_password:
          e.target.value !== formInput.password
            ? "passwords don't match"
            : null,
      });
    }
    if (e.target.name === "phone") {
      setFormInput({ ...formInput, phone: e.target.value });
      setErr({
        ...err,
        phone: !phoneRegex.test(e.target.value)
          ? "write correct phone number"
          : null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register({ ...formInput }));
  };
  useEffect(() => {
    if (isError) {
      toast.error("May username or email is already used,try again ");
    }
    if (isSuccess) {
      navigate("/");
      toast.success(
        "An activation email has been sent to your email. Please check your email"
      );
    }
    dispatch(reset());
  }, [isError, isSuccess, dispatch, message, navigate]);

  return (
    <div className="text-start" style={{ color: "var(--gray1)" }}>
      <form
        className="p-5 mb-5 mx-auto my-5"
        onSubmit={handleSubmit}
        style={{
          maxWidth: "900px",
          borderColor: "var(--orange)",
          border: "3px solid var(--orange)",
          boxShadow: "1px 1px 40px var(--orange)",
        }}
      >
        <h1 className="text-center">Registration</h1>
        <div className="col-md-4 w-75">
          <label
            htmlFor="validationDefault01"
            style={{ color: "var(--gray1)", fontSize: "18px" }}
            className="form-label mt-3"
          >
            First name
          </label>
          <input
            value={formInput.first_name}
            style={{
              backgroundColor: "var(--gray2)",
              borderColor: "var(--orange)",
              fontSize: "20px",
              color: "var(--orange)",
            }}
            onChange={handleInput}
            name="first_name"
            type="text"
            pattern="[a-zA-Z]+"
            className="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div className="col-md-4 w-75">
          <label
            htmlFor="validationDefault02"
            style={{ color: "var(--gray1)", fontSize: "18px" }}
            className="form-label mt-3"
          >
            Last name
          </label>
          <input
            value={formInput.last_name}
            style={{
              backgroundColor: "var(--gray2)",
              borderColor: "var(--orange)",
              fontSize: "20px",
              color: "var(--orange)",
            }}
            name="last_name"
            onChange={handleInput}
            type="text"
            pattern="[a-zA-Z]+"
            className="form-control"
            id="validationDefault02"
            required
          />
        </div>
        {err.first_name && (
          <h6 className="form-text text-danger">{err.first_name}</h6>
        )}

        <div className="col-md-4 w-75">
          <label
            htmlFor="phone"
            style={{ color: "var(--gray1)", fontSize: "18px" }}
            className="form-label mt-3"
          >
            Phone Number
          </label>
          <input
            value={formInput.phone}
            style={{
              backgroundColor: "var(--gray2)",
              borderColor: "var(--orange)",
              fontSize: "20px",
              color: "var(--orange)",
            }}
            name="phone"
            onChange={handleInput}
            type="text"
            className="form-control"
            id="phone"
            required
          />
        </div>
        {err.phone && (
          <h6 className="form-text text-danger fs-5">{err.phone}</h6>
        )}

        <div className="col-md-4 w-75">
          <label
            htmlFor="validationDefault02"
            style={{ color: "var(--gray1)", fontSize: "18px" }}
            className="form-label text-start mt-2"
          >
            Email
          </label>
          <input
            onChange={handleInput}
            style={{
              backgroundColor: "var(--gray2)",
              borderColor: "var(--orange)",
              fontSize: "20px",
              color: "var(--orange)",
            }}
            name="email"
            value={formInput.email}
            type="email"
            className="form-control"
            id="validationDefault02"
            required
          />
        </div>
        {err.email && (
          <h6 className="form-text text-danger fs-5">{err.email}</h6>
        )}

        <div className="col-md-4 w-75">
          <label
            htmlFor="validationDefaultUsername"
            style={{ color: "var(--gray1)", fontSize: "18px" }}
            className="form-label mt-2"
          >
            User Name
          </label>
          <div className="input-group">
            <span
              className="input-group-text"
              style={{
                backgroundColor: "var(--gray2)",
                borderColor: "var(--orange)",
                fontSize: "20px",
                color: "var(--orange)",
              }}
              id="inputGroupPrepend2"
            >
              @
            </span>
            <input
              onChange={handleInput}
              style={{
                backgroundColor: "var(--gray2)",
                borderColor: "var(--orange)",
                fontSize: "20px",
                color: "var(--orange)",
              }}
              name="username"
              value={formInput.username}
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        {err.username && (
          <h6 className="form-text text-danger fs-5">{err.username}</h6>
        )}

        <div className="col-md-4 w-75">
          <label
            htmlFor="inputPassword6"
            style={{ color: "var(--gray1)", fontSize: "20px" }}
            className="col-form-label mt-2"
          >
            Password
          </label>
        </div>
        <div className="col-md-4 w-75">
          <input
            onChange={handleInput}
            style={{
              backgroundColor: "var(--gray2)",
              borderColor: "var(--orange)",
              fontSize: "20px",
              color: "var(--orange)",
            }}
            type="password"
            id="inputPassword6"
            name="password"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        {err.password && (
          <h6 id="passwordHelp" className="form-text text-danger fs-5">
            {err.password}
          </h6>
        )}

        <div className="col-md-4 w-75">
          <label
            htmlFor="validationDefault02"
            style={{ color: "var(--gray1)", fontSize: "20px" }}
            className="form-label mt-2"
          >
            Confirm Password
          </label>
          <input
            onChange={handleInput}
            style={{
              backgroundColor: "var(--gray2)",
              borderColor: "var(--orange)",
              fontSize: "20px",
              color: "var(--orange)",
            }}
            name="confirmPassword"
            type="password"
            className="form-control"
            id="validationDefault02"
            required
          />
        </div>
        {err.re_password && (
          <h6 className="form-text text-danger fs-5">{err.re_password}</h6>
        )}

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input mt-3"
              style={{ backgroundColor: "var(--orange)" }}
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label
              className="form-check-label mt-2"
              style={{
                borderColor: "var(--orange)",
                fontSize: "20px",
                color: "var(--orange)",
              }}
              htmlFor="invalidCheck2"
            >
              Agree to terms and conditions
            </label>
          </div>
        </div>
        {isLoading && <Loader />}
        <div className="d-flex justify-content-center">
          <button
            className="btn rounded-pill btn-block mb-4 mt-5 w-50"
            style={{
              backgroundColor: " var(--orange) ",
              color: "var(--fff)",
              fontSize: "18px",
            }}
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
