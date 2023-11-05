import React, { useState } from "react";
import { usePopularData } from "../../apis/popular";
import Card from "../Card/Card";
import PaginationControlled from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
function Popular() {
  const language = useSelector((state) => state.language.current_lang);

  const [page, setPage] = useState(1);
  const { popularData, isLoading } = usePopularData(page);
  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return <Loader />;
  }
  // Render the popular movies list here
  return (
    <>
      <h2 className="mb-5 ms-4 me-4">
        {language === "ar-SA" ? (
          <span>أفلام شهيرة</span>
        ) : (
          <span>Popular Movies</span>
        )}
      </h2>

      <div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-6 ms-4 me-4 justify-content-center">
          {popularData.results.map((item) =>
            item.poster_path ? (
              <div className="col" key={item.id}>
                <Card item={item} />
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="d-flex my-5 justify-content-center">
        <PaginationControlled
          handleChange={handleChange}
          page={page}
          counter={popularData.total_pages}
        />
      </div>
    </>
  );
}

export default Popular;
