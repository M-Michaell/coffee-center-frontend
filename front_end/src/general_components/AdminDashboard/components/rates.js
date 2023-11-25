import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../apis/config";
import Rating2 from "../../../pages/Details/componants/rate";
import RateForOne from "./ratesForOne";

export default function Rates() {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState();
  const [item, setItem] = useState();
  const [show, setShow] = useState(1);

  const submitAdd = (num1, item) => {
    setShow(num1);
    setItem(item);
  };

  useEffect(() => {
    axiosInstance
      .get("/get_rating/")
      .then((response) => {
        const sortedProducts = response.data.sort(
          (a, b) => b.avg_rate - a.avg_rate
        );
        setAllProducts(sortedProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return show === 2 ? (
    <RateForOne submitAdd={submitAdd} item={item} />
  ) : (
    <div>
      <table className="table table-borderless orange">
        <thead>
          <tr className="fs-4">
            <td style={{ color: "var(--gray1)" }}>id</td>
            <td style={{ color: "var(--gray1)" }}>name</td>
            <td style={{ color: "var(--gray1)" }}>Avg rates</td>
          </tr>
        </thead>
        <tbody>
          {allProducts?.map((item, index) => (
            <tr key={item.name + item.id}>
              <td style={{ color: "var(--gray1)", fontSize: "20px" }}>
                {item.id}
              </td>
              <td
                style={{
                  color: "var(--gray1)",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/product/details/${item.id}`);
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  color: "var(--gray1)",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onClick={() => submitAdd(2, item)}
              >
                <div className="d-flex justify-content-center">
                  <Rating2 rate={item.avg_rate} />
                  <span className="ms-2 mb-1">
                    {Math.round(item.avg_rate, 2)}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
