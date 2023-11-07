import Card from "../../../general_components/Card/Card";
import Row from 'react-bootstrap/Row';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardList(){
   const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500
  };
    return(
        <div className="m-5">
            <h1>home</h1>
        <Slider {...settings}>

                <Card/>
            <Card/>
            <Card/>
            <Card/>
             <Card/>
            <Card/>
            <Card/>
             <Card/>


        </Slider>
      </div>
    );
}