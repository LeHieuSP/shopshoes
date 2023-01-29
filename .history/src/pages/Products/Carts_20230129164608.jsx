import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delItemAction } from "../../redux/reducers/shopReducer";

export default function Carts(props) {
  const { cart } = useSelector((state) => state.shopReducer);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Carts</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>image</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <img src={item.image} alt="..." width={50} />
              </td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-outline-primary mr-2">+</button>
                {item.quantity}
                <button className="btn btn-outline-primary ml-2">-</button>
                </td>
              <td>{item.price * item.quantity}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>{
                  const action = delItemAction(item.id);
                  dispatch(action);
                }}>Del</button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}
