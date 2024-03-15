import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsDashCircleFill, BsPlusCircleFill } from "react-icons/bs";
import { FaTimes, FaLongArrowAltLeft } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      ISBN: "0345339711",
      "Book-Title": "The Two Towers (The Lord of the Rings, Part 2)",
      "Book-Author": "J.R.R. TOLKIEN",
      "Year-Of-Publication": 1986,
      Publisher: "Del Rey",
      "Image-URL-L":
        "http://images.amazon.com/images/P/0345339711.01.LZZZZZZZ.jpg",
      quantity: 1,
      price: 44.0,
    },
  ]);
  const [deliveryType, setDeliveryType] = useState("5");
  const navigate = useNavigate();

  const handleDeliveryChange = (event) => {
    setDeliveryType(event.target.value);
  };

  const calculateItemTotal = (item) => {
    return item.quantity * item.price;
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.ISBN === item.ISBN
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    }
  };

  const handleIncrease = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.ISBN === item.ISBN
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
  };

  const handleClick = () => {
    navigate(`/`); // Navigate to details page
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{
                borderRadius: "15px",
                maxWidth: "1200px",
                margin: "0 auto",
                maxHeight: "80vh",
                overflowY: "auto",
              }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                        <h6 className="mb-0 text-muted">{`${cartItems.length} items`}</h6>
                      </div>
                      <hr className="my-4" />

                      {cartItems.map((item) => (
                        <div
                          key={item.ISBN}
                          className="row mb-4 d-flex justify-content-between align-items-center"
                        >
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item["Image-URL-L"]}
                              className="img-fluid rounded-3"
                              alt={item["Book-Title"]}
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Book</h6>
                            <h6 className="text-black mb-0">
                              {item["Book-Title"]}
                            </h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                            <button
                              className="btn btn-link px-2 me-2"
                              onClick={() => handleDecrease(item)}
                            >
                              <BsDashCircleFill />
                            </button>
                            <input
                              min="0"
                              name="quantity"
                              value={item.quantity}
                              type="number"
                              className="form-control form-control-sm"
                              style={{ minWidth: "50px", fontSize: "14px" }} // Adjust these values as needed
                              readOnly
                            />

                            <button
                              className="btn btn-link px-2"
                              onClick={() => handleIncrease(item)}
                            >
                              <BsPlusCircleFill />
                            </button>
                          </div>

                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">{`€ ${calculateItemTotal(
                              item
                            ).toFixed(2)}`}</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <FaTimes />
                            </a>
                          </div>
                        </div>
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a
                            href="/Home"
                            className="text-body"
                            onClick={() => handleClick()}
                          >
                            <FaLongArrowAltLeft className="me-2" />
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">{`Items ${cartItems.length}`}</h5>
                        <h5>{`€ ${calculateTotal().toFixed(2)}`}</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping</h5>

                      <div className="mb-4 pb-2">
                        <select
                          className="form-select"
                          value={deliveryType}
                          onChange={handleDeliveryChange}
                        >
                          <option value="5.00">Standard-Delivery- 5.00/-</option>
                          <option value="10.00">Fast-Delivery- 10.00/-</option>
                        </select>
                      </div>

                      <h5 className="text-uppercase mb-3">Give code</h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Examplea2"
                          >
                            Enter your code
                          </label>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>{`€ ${(calculateTotal() + parseFloat(deliveryType)).toFixed(2)}`}</h5>
                      </div>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Check Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
