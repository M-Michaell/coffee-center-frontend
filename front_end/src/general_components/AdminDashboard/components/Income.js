import React, { useDebugValue, useEffect, useState } from "react";
import { totalIncomeApi } from "../../../apis/order_details";

export default function Income({ user }) {
  const [maxDate, setMaxDate] = useState(getCurrentDate());

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    month = month < 10 ? `0 ${month}` : month;
    day = day < 10 ? `0 ${day}` : day;

    return ` ${year}- ${month}- ${day}`;
  }

  const handleFromChange = function () {
    const startDate = document.getElementById("startDateForIncome");
    const endDate = document.getElementById("endDateForIncome");
    endDate.min = startDate.value;
    if (endDate.value && endDate.value < startDate.value) {
      endDate.value = startDate.value;
    }
  };

  const [incomeData, setIncomeData] = useState(null);

  const fetchData = async (totalIncome) => {
    try {
      const response = await totalIncome.get();
      const incoming = response.data.income;
      console.log("user orders: ", incoming.cash["paid"]);

      setIncomeData({
        pPaid: parseInt(incoming.paypal["paid"]),
        pUnPaid: parseInt(incoming.paypal["unpaid"]),
        cPaid: parseInt(incoming.cash["paid"]),
        cUnPaid: parseInt(incoming.cash["unpaid"]),
      });
    } catch (error) {
      console.error("Error fetching user order details:", error);
    }
  };

  const handleSearchByDate = () => {
    const startDate = document.getElementById("startDateForIncome").value;
    const endDate = document.getElementById("endDateForIncome").value;
    const totalIncome = totalIncomeApi(user.id, startDate, endDate);
    fetchData(totalIncome);
  };

  useEffect(() => {
    const totalIncome = totalIncomeApi(user.id, null, null);
    fetchData(totalIncome);
  }, []);

  return (
    <div className="">
      <div className="">
        <h1 className="text-start fw-bold mb-3" style={{ color: "white" ,color: "var(--fff)"  }}>
         Total income
        </h1>

        <div className="pt-5 pb-3 me-0 d-flex flex-row border-2">
          <div
            className="col input-group me-3 "
            style={{ border: "gray solid 1px" }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text border-0">From</span>
            </div>
            <input
              className="form-control bg-dark border-0 text-light"
              id="startDateForIncome"
              type="date"
              max={maxDate}
              onChange={handleFromChange}
            />
          </div>

          <div
            className="col input-group me-3"
            style={{ border: "gray solid 1px" }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text border-0">To</span>
            </div>
            <input
              className="form-control bg-dark border-0 text-light"
              id="endDateForIncome"
              type="date"
              max={maxDate}
            />
          </div>

          <button className="col btn btn-dark" onClick={handleSearchByDate}>
            Search
          </button>
        </div>
      </div>
      {incomeData ? (
        <div className="container p-3 mt-5 text-light">
          <div className="row pt-4 pb-2" style={{border:'1px solid orange'}}>
            <h2 className="col">Payment Report</h2>
          </div>
          <div className="row" >
            <div className="col pt-4 pb-2"  style={{border:'1px solid orange'}}>
              <h4>Paid</h4>
            </div>
            <div className="col pt-4 pb-2"  style={{border:'1px solid orange'}}>
              <h4>UnPaid</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col p-0 pt-4 pb-2" style={{border:'1px solid orange'}}>
                    <h5>PayPal</h5>
                  <div>
                    <h5 className="">{incomeData.pPaid} $</h5>
                  </div>
                </div>
                <div className="col pt-4 pb-2" style={{border:'1px solid orange'}}>
                    <h5>Cash</h5>
                  <h5>{incomeData.cPaid} $</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col pt-4 pb-2" style={{border:'1px solid orange'}}>
                    <h5>PayPal</h5>
                  <h5>{incomeData.pUnPaid} $</h5>
                </div>
                <div className="col pt-4 pb-2" style={{border:'1px solid orange'}}>
                    <h5>Cash</h5>
                  <h5>{incomeData.cUnPaid} $</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col pt-4 pb-2" style={{border:'1px solid orange'}}>
                <h5>Total Paid</h5>
              <h5>{incomeData.pPaid + incomeData.cPaid} $</h5>
            </div>
            <div className="col pt-4 pb-2" style={{border:'1px solid orange'}}>
                <h5>Total UnPaid</h5>
              <h5>{incomeData.pUnPaid + incomeData.cUnPaid} $</h5>
            </div>
          </div>
          <div className="row pt-4 pb-2" style={{border:'1px solid orange'}}>
            <h5>Total Income</h5>
            <h5>
              {incomeData.pPaid +
                incomeData.cPaid +
                incomeData.pUnPaid +
                incomeData.cUnPaid} $
            </h5>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
