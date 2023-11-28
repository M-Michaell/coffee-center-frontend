import Card from "../../../general_components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default function CardSlider({ cards }) {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 5000,
    // autoplaySpeed: 400,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2
        className="text-start ms-5 my-5 mb-2 fw-bold text-nowrap"
        style={{ color: "var(--orange)" }}
      >
        New Items
      </h2>
      <hr
        className="w-50 ms-3"
        style={{ height: "3px", backgroundColor: "var(--orange)" }}
      ></hr>
      <div className="mx-1">
        <Slider {...settings}>
          {cards?.map((product, index) => {
            return <Card key={product.id} item={product} />;
          })}
          {cards?.map((product, index) => {
            return <Card key={product.id} item={product} />;
          })}
          {cards?.map((product, index) => {
            return <Card key={product.id} item={product} />;
          })}
        </Slider>
      </div>
    </>
  );
}
