import Card from "../../../general_components/Card/Card";
import Row from 'react-bootstrap/Row';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardSlider(){
   const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,

  };
    return(
        <div style={{marginRight: "80px", marginLeft:"80px"}} >
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