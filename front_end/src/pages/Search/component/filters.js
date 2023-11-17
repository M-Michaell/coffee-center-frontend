import React from "react";

const FilterComponent = ({
  filterType,
  options,
  selectedValue,
  onFilterChange,
}) => (
  <div>
    <div
    className="d-flex justify-content-between"
      data-bs-toggle="collapse"
      href={`#collapse${filterType}`}
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      <label className="fs-5 orange">{filterType}</label>
      <span className="orange fs-4 ps-0" style={{ color: "var(--orange)" }}>
        &#9660;
      </span>
    </div>
    <div className="collapse" id={`collapse${filterType}`}>
      {options.map((option) => (
        <div key={option.id} className=" d-flex justify-content-start">
          <input
            className="form-check-input bg-transperant ms-2"
            type="checkbox"
            name={filterType}
            value={option.id}
            id={filterType+option.id}
            onChange={() => onFilterChange(filterType, option.id)}
          />
          <label htmlFor={filterType+option.id} className="gray1">{option.name}</label>
        </div>
      ))}
    </div>
    <hr></hr>
  </div>
);

export default FilterComponent;
