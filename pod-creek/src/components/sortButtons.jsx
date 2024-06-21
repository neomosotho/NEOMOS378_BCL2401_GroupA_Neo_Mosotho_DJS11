/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const SortButtons = ({ onSort }) => {
  const handleSortChange = (sortOption) => {
    onSort(sortOption); // Call parent component function
  };

  return (
    <div>
      <button onClick={() => handleSortChange("All")}>All</button>
      <button onClick={() => handleSortChange("A-Z")}>A-Z</button>
      <button onClick={() => handleSortChange("Z-A")}>Z-A</button>
      <button onClick={() => handleSortChange("Newest")}>Newest</button>
      <button onClick={() => handleSortChange("Oldest")}>Oldest</button>
    </div>
  );
};

export default SortButtons;

