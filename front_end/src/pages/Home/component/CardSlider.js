import Card from "../../../general_components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardSlider({ cards }) {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div style={{ marginRight: "80px", marginLeft: "80px" }}>
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
  );
}
