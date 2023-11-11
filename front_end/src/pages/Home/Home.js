import CardSlider from "./component/CardSlider";
import CardList from "./component/CardList";
import ButtonHome from "./component/button";
import Images from "./component/Image";
import Carousel from "./component/carousel";
import {ProductItems} from "../../apis/product";


export default function Home() {
    const cards = ProductItems();
    return (
        <div style={{backgroundColor: "var(--background)"}}>
            <Carousel/>
            <CardSlider cards={cards}/>
            <Images/>
            <CardList cards={cards}/>
            <ButtonHome />
        </div>
    );
}