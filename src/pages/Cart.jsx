import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: €
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Delivery fee at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/menu">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity, selection } = props.item;
  const dispatch = useDispatch();
  // const addToCart = (toppings, sauces) => {
  //   dispatch(cartActions.addToCart({ toppings, sauces }));
  // };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">
        {title}
        <div className="cart-item1">
          {selection && Object.entries(selection).length !== 0
            ? Object.entries(selection).map(([key, value], index) => (
                <React.Fragment key={key}>
                  {title !== "Cold Drinks" && title !== "Hot Drinks" && (
                    <li>
                      {index === 0 ? "toppings: " : "sauces: "}
                      {value}
                    </li>
                  )}
                  {(title === "Cold Drinks" || title === "Hot Drinks") && (
                    <li>{value}</li>
                  )}
                </React.Fragment>
              ))
            : ""}
        </div>
      </td>
      <td className="text-center">€{price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
