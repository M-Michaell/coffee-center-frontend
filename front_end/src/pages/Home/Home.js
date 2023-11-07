import CardSlider from "./component/CardSlider";
import QuiltedImageList from "./component/Image";
import CardList from "./component/CardList";

export default function Home(){
    return(
        <div style={{backgroundColor:"#100E0f"}}>
            <CardSlider/>
            <CardList/>
        </div>
    );
}