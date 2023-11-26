import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../apis/config";
import Rating2 from "../../../pages/Details/componants/rate";

export default function RateForOne(props) {
  const { submitAdd, item } = props;
  const [rates, setRates] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/get_rating/${item.id}/`)
      .then((response) => {
        setRates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [item.id]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            submitAdd(1, false);
          }}
          className="btn btn-outline-light custom-btn"
        >
          back
        </button>
        <div>
          <hr></hr>
          <div className="fs-4 d-flex  flex-column text-start" style={{color:"var(--orange)"}}>
            <p className="me-3">id:{item.id}</p>
            <p>Name: {item.name}</p>
          </div>
          <hr></hr>
        </div>
      </div>
      <div>
        <div>
          <table className="table table-borderless orange">
            <thead>
              <tr className="fs-4">
                <td style={{ color: "var(--gray1)" }}>User id</td>
                <td style={{ color: "var(--gray1)" }}>User email</td>
                <td style={{ color: "var(--gray1)" }}>Rate</td>
              </tr>
            </thead>
            <tbody>
              {rates?.map((item, index) => (
                <tr key={item + item.product_name}>
                  <td style={{ color: "var(--gray1)", fontSize: "20px" }}>
                    {item.user_id}
                  </td>
                  <td
                    style={{
                      color: "var(--gray1)",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  >
                    {item.user_email}
                  </td>

                  <td
                    style={{
                      color: "var(--gray1)",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <div className="d-flex justify-content-center">
                      <Rating2 rate={item.rate} />
                   
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
