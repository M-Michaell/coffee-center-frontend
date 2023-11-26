import React, { useState } from "react";
import { axiosInstance } from "../../apis/config";
import { toast } from "react-toastify";

export default function DiscountForm({ submitAdd }) {
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    percentage: "",
    active: false,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInput((prevInput) => ({
      ...prevInput,
      [name]: name === "active" ? e.target.checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("discount_list/", formInput);
      toast.success("Creator added successfully");
      window.location.reload();
      submitAdd(1);
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
        toast.error(error.response.data.name[0] || "Server Error");
      } else if (error.request) {
        console.error("Request Error:", error.request);
        toast.error("Request Error: No response received");
      } else {
        console.error("Error:", error.message);
        toast.error("Error: Something went wrong");
      }
    }
  };

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
        <h1 className="text-center">Add Discount</h1>

        <div className="col-md-4 w-100">
          <label
            htmlFor="name"
            className="form-label text-start mt-2"
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formInput.name}
            onChange={handleInput}
            required
          />

          <label
            htmlFor="description"
            className="form-label text-start mt-2"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formInput.description}
            onChange={handleInput}
            required
          />

          <label
            htmlFor="percentage"
            className="form-label text-start mt-2"
          >
            Percentage
          </label>
          <input
            type="number"
            className="form-control"
            id="percentage"
            name="percentage"
            value={formInput.percentage}
            onChange={handleInput}
            required
          />

          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="active"
              name="active"
              checked={formInput.active}
              onChange={handleInput}
            />
            <label className="form-check-label" htmlFor="active">
              Active
            </label>
          </div>
        </div>

        <div className="d-flex justify-content-around">
          <button
            className="btn rounded-pill btn-block mb-4 mt-5 w-25"
            style={{
              backgroundColor: "var(--orange)",
              color: "var(--fff)",
              fontSize: "18px",
            }}
            type="submit"
          >
            Add
          </button>
          <button
            className="btn rounded-pill btn-block mb-4 mt-5 w-25"
            onClick={() => submitAdd(1)}
            style={{
              backgroundColor: "var(--orange)",
              color: "var(--fff)",
              fontSize: "18px",
            }}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
