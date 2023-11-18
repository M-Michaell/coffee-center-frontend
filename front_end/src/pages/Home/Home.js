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
    const [loading, setLoading] = useState(false); // Add loading state
  
    useEffect(() => {
      const fetchData = async () => {
        if (userId) {
          setLoading(true);
          await UserDataAPI(userId, dispatch);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [userId, dispatch]);
  

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { products, paginationInfo } = ProductItems(page);
  return (
    <div style={{ backgroundColor: "var(--background)" }}>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <Carousel />
          <CardSlider cards={products} />
          <Images />
          <CardList cards={products} />
          <div className="d-flex justify-content-center my-5">
            <PaginationControlled
              page={page}
              handleChange={handlePageChange}
              counter={paginationInfo.total_pages}
            />
          </div>
        </>
      )}
    </div>
  );
}