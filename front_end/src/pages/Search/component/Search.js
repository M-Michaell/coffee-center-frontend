import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SearchResult } from "../../../apis/search";
import FilterComponent from "./filters";
import "../../Cart/main.css";
import Card from "../../../general_components/Card/Card";
import PaginationControlled from "../../../general_components/Pagination/Pagination";

function Search() {
  const { productname } = useParams();

  console.log("Search word:", productname);
  const searchWord = productname;
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    CoffeeType: [],
    Caffeine: [], // Example with default value '1'
    Creator: [],
    Origin: [], // Example with default value '1'
    RoastingDegree: [],
  });

  const { products, paginationInfo, filterOptions } = SearchResult(
    searchWord,
    page,
    filters
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      // Toggle the value in the array for multi-value filters
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          (v) => v !== value
        );
        setPage(1);
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value];
        setPage(1);
      }

      return updatedFilters;
    });
  };

  return (
    <>
      <div style={{ width: "90%" }} className="mx-auto">
        <p className="text-start fs-4 orange mt-5">Search Result for: {searchWord}</p>
        <hr
          className=" orange mb-5"
          style={{ backgroundColor: "var(--orange)", height: "3px" }}
        />
        <div className="row">
          <div className="col col-sm col-md-3 col-xl-2 mt-5">
            <p className="fs-4 orange">Filters</p>
            <hr
              className="mx-auto"
              style={{ backgroundColor: "var(--orange)", height: "3px" }}
            />
            {Object.entries(filterOptions).map(([filterType, options]) => (
              <div className="">
                <FilterComponent
                  key={filterType}
                  filterType={filterType}
                  options={options}
                  selectedValue={filters[filterType]}
                  onFilterChange={handleChange}
                />
              </div>
            ))}
          </div>
          <div className="col col-sm col-md-9 col-xl-10 mb-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 justify-content-center align-items-center w-100 h-100">
              {products?.length > 0 ? (
                products.map((product) => (
                  <div
                    className="col d-flex justify-content-center"
                    key={product.id}
                  >
                    <Card item={product} />
                  </div>
                ))
              ) : (
                <p className="fs-5 orange ">
                  We apologize, but it seems we couldn't find any items matching
                  your search or filters. Please try adjusting your criteria or
                  explore our other offerings.
                </p>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center my-5">
            <PaginationControlled
              page={page}
              handleChange={handlePageChange}
              counter={paginationInfo.total_pages}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
