import React from "react";

const categories = ["All", "Development", "Business"];

const CategoryFilter = ({ setFilter, activeFilter }) => {
  return (
    <div className="flex gap-7 lg:gap-10 pb-5">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setFilter(category)}
          className={
            activeFilter === category ? "text-white" : " text-gray-400"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default CategoryFilter;
