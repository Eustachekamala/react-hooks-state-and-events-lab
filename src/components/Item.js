import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  // Keep track of whether the item is in the cart or not
  const [inCart, setInCart] = useState(false);

  // Handle click on the Add to Cart button
  function handleCartClick() {
    setInCart(!inCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/*Add a className of 'in-cart' to the <li> when the Add to Cart button is clicked*/}
      <button className={inCart ? "remove-from-cart" : "add-to-cart"} onClick={handleCartClick}>
        {inCart ? "Remove cart 🛒" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;
