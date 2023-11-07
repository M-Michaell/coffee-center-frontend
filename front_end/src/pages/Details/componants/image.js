import React, { useState } from "react";
import image from "../../../assets/images/images.jpeg";

export default function DetailsImage() {
  const [isHeartClicked, setHeartClicked] = useState(false);

  const handleHeart = () => {
    setHeartClicked(!isHeartClicked);
  };

  return (
    <div className="p-auto position-relative" style={{ width: "500px" }}>
      <i
        className={`bi ${isHeartClicked ? "bi-heart-fill" : "bi-heart"} position-absolute`}
        style={{ top: "0px", right: "0px", color: "#BD712B", fontSize: "30px" }}
        onClick={handleHeart}
      ></i>
      <img src={image} alt="" />
    </div>
  );
}
