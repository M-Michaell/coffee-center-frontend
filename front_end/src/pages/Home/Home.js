import CardSlider from "./component/CardSlider";
import CardList from "./component/CardList";
import Images from "./component/Image";
import Carousel from "./component/carousel";
import { ProductItems } from "../../apis/product";
import PaginationControlled from "../../general_components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserDataAPI } from "../../apis/cartOperations/getUserData";
import { initialCart } from "../../store/slices/cart";
import Loader from "../../general_components/Loader/Loader";

export default function Home() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.auth?.userInfo?.id);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { products, paginationInfo } = ProductItems(page);
  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      <>
        <Carousel />
        <CardSlider cards={products} />
        <Images />
        <div className="container mt-5 pt-5">
          <h2
            className="text-start ms-5 mt-5 fw-bold text-nowrap"
            style={{ color: "var(--orange)" }}
          >
            Discover the perfect coffee
          </h2>
          <hr
            className=" ms-3"
            style={{ height: "3px", backgroundColor: "var(--orange)" }}
          ></hr>
        </div>
        <CardList cards={products} />
        <div className="d-flex justify-content-center my-5">
          <PaginationControlled
            page={page}
            handleChange={handlePageChange}
            counter={paginationInfo.total_pages}
          />
        </div>
      </>
    </div>
  );
}
