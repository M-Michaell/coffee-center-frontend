import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../apis/config";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function DiscountEdit({ submitAdd }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    percentage: "",
    active: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`discount_details/${id}/`);
        const { name, description, percentage, active } = res.data;
        setFormInput({ name, description, percentage, active });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

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
      await axiosInstance.put(`discount_details/${id}/`, formInput);
      toast.success("Edit Successfully");
      window.location.reload();
      submitAdd(1);
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
        toast.error(error.response.data.name || "Server Error");
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
        <h1 className="text-center">Edit Discount </h1>

        <div className="col-md-4 w-100">
          <label
            htmlFor="name"
            style={{ color: "var(--gray1)", fontSize: "18px" }}
            className="form-label text-start mt-2"
          >
            Name
          </label>
          <input
            style={{
              backgroundColor: "var(--gray2)",
              borderColor: "var(--orange)",
              fontSize: "20px",
              color: "var(--orange)",
            }}
            name="name"
            value={formInput.name}
            onChange={handleInput}
            type="text"
            className="form-control"
            id="name"
            required
          />

          <label
            htmlFor="description"
            style={{ color: "var(--gray1)", fontSize: "18px" }}
            className="form-label text-start mt-2"
          >
            Description
          </label>
          <input
            style={{
              backgroundColor: "var(--gray2)",
              borderColor: "var(--orange)",
              fontSize: "20px",
              color: "var(--orange)",
            }}
            name="description"
            value={formInput.description}
            onChange={handleInput}
            type="text"
            className="form-control"
            id="description"
            required
          />

          <label
            htmlFor="percentage"
            style={{ color: "var(--gray1)", fontSize: "18px" }}
            className="form-label text-start mt-2"
          >
            Percentage
          </label>
          <input
            style={{
              backgroundColor: "var(--gray2)",
              borderColor: "var(--orange)",
              fontSize: "20px",
              color: "var(--orange)",
            }}
            name="percentage"
            value={formInput.percentage}
            onChange={handleInput}
            type="number"
            className="form-control"
            id="percentage"
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
            Edit
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
