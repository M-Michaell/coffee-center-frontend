import CardSlider from "./component/CardSlider";
import CardList from "./component/CardList";
import ButtonHome from "./component/button";
import Images from "./component/Image";

export default function Home() {
    return (
        <div style={{backgroundColor: "var(--background)"}}>
            <CardSlider/>
            <Images/>
            <CardList/>
            <ButtonHome/>
        </div>
    );
}