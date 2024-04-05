import React, { useState, useEffect } from "react";
import { Navbar, OrderSummary } from "../../components";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import "./index.css";
import { FaCaretDown } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState("");
  const [nameDone, setNameDone] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberDone, setCardNumberDone] = useState(false);
  //nameHandler
  const nameHandler = (e) => {
    setName(e);
    setNameDone(false);
    if (e.length !== 0) {
      setNameDone(true);
    }
  };
  // cardNumberHandler
  const cardNumberHandler = (e) => {
    setCardNumber(e);
    setCardNumberDone(false);
    if (e.length !== 0) {
      setCardNumberDone(true);
    }
  };
  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={7} lg={6} xl={6}>
              <div className="account-lect-section">
                <Grid container spacing={0}>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                  <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                    <div className="step-container">
                      <p className="step-done-title">Account</p>
                      <div className="step-done-line" />
                      <div className="step-done-circle">
                        <FaCheck size={12} color="#111827" />
                      </div>
                      <div className="step-done-line" />
                      <p className="step-done-title">Shipping</p>
                      <div className="step-done-line" />
                      <div className="step-done-circle">
                        <FaCheck size={12} color="#111827" />
                      </div>
                      <div className="step-done-line" />
                      <p className="step-done-title">Payment</p>
                    </div>
                    <h1 className="account-left-heading">Payment Details</h1>
                    <div className="shipping-address-main">
                      <p>Payment Method</p>
                      <div class="dropdown">
                        <button class="dropbtn">
                          <p>
                            {paymentMethod === ""
                              ? "Select Payment Method"
                              : paymentMethod}
                          </p>
                          <FaCaretDown
                            color="#9FA0A6"
                            style={{ marginRight: "10px" }}
                          />
                        </button>
                        <div class="dropdown-content">
                          <div>
                            <button
                              onClick={() => setPaymentMethod("Credit Card")}
                            >
                              Credit Card
                            </button>
                            <button
                              onClick={() => setPaymentMethod("PayPal")}
                              style={{ borderBottomWidth: "0px" }}
                            >
                              PayPal
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="account-input-title">Name on card</p>
                    <div className="account-input-main">
                      <input
                        placeholder="abc"
                        type="text"
                        value={name}
                        onChange={(e) => nameHandler(e.target.value)}
                      />
                      {nameDone ? (
                        <div className="step-done-circle">
                          <FaCheck size={12} color="#fff" />
                        </div>
                      ) : (
                        <FaCircleCheck color="#9FA0A6" size={20} />
                      )}
                    </div>
                    <p className="account-input-title">Card number</p>
                    <div className="account-input-main">
                      <input
                        placeholder="123 - 456 -"
                        type="text"
                        value={cardNumber}
                        onChange={(e) => cardNumberHandler(e.target.value)}
                      />
                      {cardNumberDone ? (
                        <div className="step-done-circle">
                          <FaCheck size={12} color="#fff" />
                        </div>
                      ) : (
                        <FaCircleCheck color="#9FA0A6" size={20} />
                      )}
                    </div>
                    <div className="payment-expiration-main">
                      <div className="payment-expiration-sec-1">
                        <p className="account-input-title">Expiration</p>
                        <div>
                          <div>
                            <div className="account-input-main">
                              <input placeholder="03" type="text" />
                            </div>
                          </div>
                          <p>/</p>
                          <div>
                            <div className="account-input-main">
                              <input placeholder="24" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="payment-expiration-cvc-main">
                        <div className="cvc-main">
                          <p className="account-input-title">CVC</p>
                          <button>
                            <IoIosHelpCircleOutline color="#9FA0A6" />
                          </button>
                        </div>
                        <div>
                          <div className="account-input-main">
                            <input placeholder="123" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                </Grid>
              </div>
              <div className="account-left-line" />
              <Grid container spacing={0}>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                  <div className="account-left-footer">
                    <button
                      className="account-left-footer-button"
                      onClick={() => navigate("/tomnov-generate")}
                    >
                      Cancel order
                    </button>
                    <button
                      className="account-left-footer-gradient-button"
                      onClick={() => navigate("/")}
                    >
                      Complete Order
                    </button>
                  </div>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
              </Grid>
            </Grid>
            {/* ---------- right section --------- */}
            <Grid item xs={12} sm={12} md={5} lg={6} xl={6}>
              <OrderSummary />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};
export default Payment;
