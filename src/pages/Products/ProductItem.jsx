import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/reducers/shopReducer";

export default function ProductItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={item.image} alt="..." />
      <div className="card-body bg-dark text-white">
        <h2 style={{fontSize: '16px'}}>{item.name}</h2>
        <p>{item.price}</p>
        <button className="btn btn-secondary" onClick={()=>{


          const itemCart = {...item,quantity: 1};
          const action = addToCartAction(itemCart);
          dispatch(action);
        }}>
          Add to cart
          <i className="fa fa-shopping-cart ml-1"></i>
        </button>
      </div>
    </div>
  );
}
