import { useEffect, useState } from "react";
import MyCheckBox from "./checkbox";
import RatingSize from "./createRating";
import Map from "./map";
import Rate2 from "./rate";
import Row from "./row";
import { useSelector } from "react-redux";
import { AddRate } from "../../../apis/product_details/createRate";

export default function MoreData({ product }) {
  const user = useSelector((state) => state.auth.userInfo);
  const [rateValue, setRateValue] = useState(0);
  const handleRatingChange = (newValue) => {
    setRateValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user && product) {
        const data = await AddRate(user.id, product.id, rateValue);
        console.log("", data);

        if (data > 0) {
          setRateValue(data);
        }
      }
    };

    fetchData();
  }, [user, product.id, rateValue]);

  const newPrice = Math.ceil(
    (product.price * (100 - product.discount_percentage)) / 100
  );

  return (
    <div className="text-start text-light">
      <div className="d-flex flex-row">
        <div className="mb-4 me-5 ">
          <h2 className="mb-0" style={{ color: "var(--orange)" }}>
            {product.name}
          </h2>
          <span className="pt-0 text-secondary" style={{ fontSize: "12px" }}>
            origin: {product.origin_name}
          </span>
        </div>
        <div className="mt-2">
          <Rate2 rate={product.avg_rate} />
        </div>
      </div>

      <div className="mt-4 mb-3 ">
        <span
          className="text-secondary text-decoration-line-through me-4"
          style={{ fontSize: "12px" }}
        >
          {product.price} EGP
        </span>
        <span style={{ fontWeight: "bolder" }}>{newPrice} EGP</span>
      </div>
      <div>
        <button
          className="btn"
          style={{
            backgroundColor: "var(--orange)",
            color: "white",
            borderRadius: "20px",
            width: "150px",
          }}
        >
          Buy Now
        </button>
      </div>
      <div>
        <table className="w-100 mt-5">
          <Row x={"Roasting Stage: "} y={product.roasting_degree_name} />
          <Row x={"Coffee type: "} y={product.coffee_type} />
          <Row x={"Caffeiene degree: "} y={product.caffeine_name} />
          <Row x={"corriposation: "} y={product.creator_name} />
          <Row
            x={"Taste: "}
            y={"Beautiful cream caramel havor with hints of molasses"}
          />
          <Row x={"Great For: "} y={"Espesso"} />
        </table>
      </div>
      <div className="my-3">
        <h4>Rate this product</h4>
        <div>
          <RatingSize value={rateValue} onChange={handleRatingChange} />
        </div>
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}
