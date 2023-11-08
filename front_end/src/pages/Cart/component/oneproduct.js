import React from "react";
import Counter from "./counterbtn";

function Oneproduct(props) {
  const { item } = props;
  return (
    <>
      <div className="mt-5">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-xl-4 col-xxl-4 mb-5">
            <div className="card  rounded-5 w-100 h-100 background">
              <img
                className="img-fluid rounded-5 shadow-lg "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6R30Iix8-fjF7Lgnaqu4TXhRBbPLqKpJbsrKkMIJ3VRXbUWvOiEymJpKnHhhslDWQAg&usqp=CAU"
                alt="Card cap"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-xl-8 col-xxl-8 d-flex col-md-mt-3">
            <div className="border-0 w-100 background ">
              <div className=" text-start d-flex flex-column align-items-start pt-0">
                <div className="d-flex justify-content-between">
                  <h4 className="orange">{item.name}</h4>
                </div>

                <p className="gray1 fw-bold mb-1">{item.desc}</p>
                <p className="gray1 py-0 my-0 ">250 g</p>
                {/* controls */}
                <Counter product={item} />
                {/* end controls */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Oneproduct;
