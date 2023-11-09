import CardSlider from "./component/CardSlider";
import CardList from "./component/CardList";
import ButtonHome from "./component/button";
import Images from "./component/Image";
import Carousel from "./component/carousel";

export default function Home() {
    return (
        <div style={{backgroundColor: "var(--background)"}}>
            <Carousel/>
            <CardSlider/>
            <Images/>
            <CardList/>
            <ButtonHome/>
        </div>
    );
}