import React from "react";

export default function ProductItem(props) {
  const { item } = props;

  return (
    <div className="card">
      <img src={item.image} alt="..." />
      <div className="card-body">
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <button className="btn btn-secondary">
          Add to cart
          <i className="fa fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
}
