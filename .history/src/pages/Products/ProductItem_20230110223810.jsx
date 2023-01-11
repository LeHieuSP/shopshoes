import React from "react";

export default function ProductItem() {
  return (
    <div className="card">
      <img src="https://i.pravatar.cc?u=10" alt="..." />
      <div className="card-body">
        <h2>Product 1</h2>
        <p>1000</p>
        <button className="btn btn-secondary">
          Add to cart
          <i className="fa fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
}
