import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [filterByCategory, setFilterByCategory] = useState("All");

  // Filter items based on the selected category
  const filteredItems = items.filter((item) => {
    if (filterByCategory === "All") {
      return true;
    }
    return item.category === filterByCategory;
  });

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilterByCategory(event.target.value);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
