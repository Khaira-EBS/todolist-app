import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisibilityFilter } from "../../action";

function VisibilityFilter() {
  const filters = ["all", "active", "completed"];
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.visibilityFilter);

  const handleFilter = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  return (
    <div className="filter-container flex items-center justify-center space-x-4 pt-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilter(filter)}
          className={`${
            filter === currentFilter
              ? "bg-[#7743DB] hover:[#9064e2] text-white font-base py-2 px-4 rounded-xl text-md"
              : "bg-gray-300 hover:bg-gray-400 text-black font-base py-2 px-4 rounded-xl text-md"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default VisibilityFilter;
