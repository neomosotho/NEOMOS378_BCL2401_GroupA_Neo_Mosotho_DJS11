/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

// The SortButtons component renders a set of buttons for sorting data
const SortButtons = ({ onSort }) => {
  // Function to handle sort change and call the parent component's sort function
  const handleSortChange = (sortOption) => {
    onSort(sortOption); // Call parent component function
  };

  return (
    <div>
      {/* Button to sort all items */}
      <button onClick={() => handleSortChange("All")}>All</button>
      {/* Button to sort items alphabetically A-Z */}
      <button onClick={() => handleSortChange("A-Z")}>A-Z</button>
      {/* Button to sort items alphabetically Z-A */}
      <button onClick={() => handleSortChange("Z-A")}>Z-A</button>
      {/* Button to sort items from newest to oldest */}
      <button onClick={() => handleSortChange("Newest")}>Newest</button>
      {/* Button to sort items from oldest to newest */}
      <button onClick={() => handleSortChange("Oldest")}>Oldest</button>
    </div>
  );
};

export default SortButtons;


