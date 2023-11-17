import CardSlider from "./component/CardSlider";
import CardList from "./component/CardList";
import ButtonHome from "./component/button";
import Images from "./component/Image";
import Carousel from "./component/carousel";
import {ProductItems} from "../../apis/product";
import PaginationControlled from "../../general_components/Pagination/Pagination";
import { useState } from "react";


export default function Home() {
    const [page, setPage] = useState(1);

    const handlePageChange = (event, value) => {
        setPage(value);
      };
    const { products, paginationInfo} = ProductItems(page);
    return (
        <div style={{backgroundColor: "var(--background)"}}>
            <Carousel/>
            <CardSlider cards={products}/>
            <Images/>
            <CardList cards={products}/>
            <div className="d-flex justify-content-center my-5">
            <PaginationControlled
              page={page}
              handleChange={handlePageChange}
              counter={paginationInfo.total_pages}
            />
          </div>
        </div>
    );
}