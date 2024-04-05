import React, { useState } from "react";
import "./index.css";
import Grid from "@mui/material/Grid";
import { FiMinus, FiPlus } from "react-icons/fi";
const OrderSummary = () => {
  const [counter, setCounter] = useState(1);
  const List = [
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-U5UBUdG_DJh8e6iQotyxocNlAhYxMC34xoSQ2IazDWGTJNVs",
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtTLFqsQLGsAEmEZIhegjZ32TJuwlNrqxZdgJojzbvWuIV3dsQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUPF-CBgAHVF7sfbXZdYwCcFs-S0j9nj652KBSraryD0JWPXh",
  ];
  return (
    <div className="order-summary-container">
      <h1 className="order-summary-heading">Order Summary</h1>
      <Grid container spacing={3}>
        {List.map((v, i) => {
          return (
            <Grid item key={i} xs={3} sm={3} md={3} lg={3} xl={3}>
              <img src={v} className="order-summary-images" alt="summary" />
            </Grid>
          );
        })}
      </Grid>
      <div className="order-summary-counter-main">
        <div>
          <p className="order-summary-counter-heading">Tarot Cards</p>
          <p className="order-summary-counter-price">$320.45</p>
        </div>
        <div className="order-summary-counter-button-main">
          <button
            onClick={() => {
              if (counter > 1) {
                setCounter(counter - 1);
              }
            }}
          >
            <FiMinus />
          </button>
          <p>{counter}</p>
          <button onClick={() => setCounter(counter + 1)}>
            <FiPlus />
          </button>
        </div>
      </div>
      <p className="order-summary-dicount-title">Gift Card / Discount code</p>
      <div className="order-summary-dicount-input-main">
        <div>
          <input type="text" />
        </div>
        <button>
          <div>
            <p>Apply</p>
          </div>
        </button>
      </div>
      <div className="order-summary-price-main">
        <p className="order-summary-price-title">Sub total</p>
        <p className="order-summary-price-value">$316.55</p>
      </div>
      <div className="order-summary-price-main">
        <p className="order-summary-price-title">Tax</p>
        <p className="order-summary-price-value">$3.45</p>
      </div>
      <div className="order-summary-price-main">
        <p className="order-summary-price-title">Shipping</p>
        <p className="order-summary-price-value">Free</p>
      </div>
      <div className="order-summary-price-main">
        <p className="order-summary-price-total">Total</p>
        <p className="order-summary-price-value">$320.45</p>
      </div>
    </div>
  );
};
export default OrderSummary;
