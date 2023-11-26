import React, { useState } from "react";
import { Discounts } from "../../../apis/add_categories";
import { NavLink, useParams } from "react-router-dom";
import { axiosInstance } from "../../../apis/config";
import { toast } from "react-toastify";
import DiscountForm from "../../product_forms/discount";
import DiscountEdit from "../../product_forms/discountEditForm";
import "../../../pages/Cart/main.css";

export default function Product() {
  const [show, setShow] = useState(1);
  const [item, setItem] = useState();
  const discounts = Discounts();

  const deleteItem = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.delete(`discount_details/${id}/`);
      toast.success("deleted Sucessfully");
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

  const restoreItem = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.patch(`discount_details/${id}/`, {
        deleted: 0,
      });
      toast.success("restored Sucessfully");
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

  const submitAdd = (num) => {
    setShow(num);
  };

  return show === 2 ? (
    <DiscountForm submitAdd={submitAdd} />
  ) : show === 3 ? (
    <DiscountEdit submitAdd={submitAdd} item={item} />
  ) : (
    <div>
      <div className="d-flex justify-content-between">
        <h1 className="" style={{ marginLeft: "100px" }}>
          Discount
        </h1>
        <button
          className="btn border border-warning rounded-pill mb-5"
          style={{ marginRight: "266px" }}
          onClick={() => submitAdd(2)}
        >
          add new item
        </button>
      </div>

      <table className="table table-borderless ">
        <tbody>
          {discounts?.map((item, index) => {
            return (
              <tr key={item.id}>
                <td
                  className={`${
                    item.deleted ? "text-decoration-line-through" : ""
                  }`}
                  style={{ color: "var(--gray1)", fontSize: "20px" }}
                >
                  {item?.name}
                </td>
                <td>
                  <NavLink
                    to={`/admin/discount/${item.name}/${item.id}/`}
                    onClick={() => {
                      submitAdd(3);
                      setItem(item);
                    }}
                    className={`btn btn-outline-light custom-btn ${
                      item.deleted
                        ? "text-decoration-line-through disabled"
                        : ""
                    }`}
                  >
                    Edit
                  </NavLink>
                  <button
                    onClick={(event) => {
                      deleteItem(event, item.id);
                    }}
                    className={`btn btn-outline-danger ms-5 custom-btn ${
                      item.deleted
                        ? "text-decoration-line-through disabled"
                        : ""
                    }`}
                  >
                    Delete
                  </button>
                  <button
                    onClick={(event) => restoreItem(event, item.id)}
                    className={`btn btn-outline-success ms-5 custom-btn ${
                      item.deleted
                        ? ""
                        : "text-decoration-line-through disabled"
                    }`}
                  >
                    Restore
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
