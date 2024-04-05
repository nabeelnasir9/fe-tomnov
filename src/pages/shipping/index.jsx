import React, { useState, useEffect } from "react";
import { Navbar, OrderSummary } from "../../components";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import "./index.css";
import { FaCaretDown } from "react-icons/fa";
const Shipping = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("123 , Electric avenue");
  const [firstLine, setFirstLine] = useState("");
  const [firstLineDone, setFirstLineDone] = useState(false);
  const [streetName, setStreetName] = useState("");
  const [streetNameDone, setStreetNameDone] = useState(false);
  const [postCode, setPosetCode] = useState("");
  const [delivery, setDelivery] = useState("Free delivery");
  //firstLineHandler
  const firstLineHandler = (e) => {
    setFirstLine(e);
    setFirstLineDone(false);
    if (e.length !== 0) {
      setFirstLineDone(true);
    }
  };
  // streetNameHandler
  const streetNameHandler = (e) => {
    setStreetName(e);
    setStreetNameDone(false);
    if (e.length !== 0) {
      setStreetNameDone(true);
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
                      <div className="step-line" />
                      <FaCircleCheck color="#9FA0A6" size={20} />
                      <div className="step-line" />
                      <p className="step-title">Payment</p>
                    </div>
                    <h1 className="account-left-heading">Shipping details</h1>
                    <div className="shipping-address-main">
                      <p>Use saved address</p>
                      <div class="dropdown">
                        <button class="dropbtn">
                          <p>{address === "" ? "Select address" : address}</p>
                          <FaCaretDown
                            color="#9FA0A6"
                            style={{ marginRight: "10px" }}
                          />
                        </button>
                        <div class="dropdown-content">
                          <div>
                            <button
                              onClick={() =>
                                setAddress("123 , Electric avenue")
                              }
                              style={{ borderBottomWidth: "0px" }}
                            >
                              123 , Electric avenue
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="account-input-title">First line of address</p>
                    <div className="account-input-main">
                      <input
                        placeholder="123"
                        type="text"
                        value={firstLine}
                        onChange={(e) => firstLineHandler(e.target.value)}
                      />
                      {firstLineDone ? (
                        <div className="step-done-circle">
                          <FaCheck size={12} color="#fff" />
                        </div>
                      ) : (
                        <FaCircleCheck color="#9FA0A6" size={20} />
                      )}
                    </div>
                    <p className="account-input-title">Street name</p>
                    <div className="account-input-main">
                      <input
                        placeholder="Electric avenue"
                        type="text"
                        value={streetName}
                        onChange={(e) => streetNameHandler(e.target.value)}
                      />
                      {streetNameDone ? (
                        <div className="step-done-circle">
                          <FaCheck size={12} color="#fff" />
                        </div>
                      ) : (
                        <FaCircleCheck color="#9FA0A6" size={20} />
                      )}
                    </div>
                    <div className="shipping-post-main">
                      <div className="shipping-post">
                        <p className="account-input-title">Postcode</p>
                        <div className="account-input-main">
                          <input
                            placeholder="ABC - 123"
                            type="text"
                            value={postCode}
                            onChange={(e) => setPosetCode(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="shipping-select">
                        <p className="account-input-title">Select shipping</p>
                        <div class="dropdown">
                          <button class="dropbtn">
                            <p>
                              {delivery === "" ? "Select delivery" : delivery}
                            </p>
                            <FaCaretDown
                              color="#9FA0A6"
                              style={{ marginRight: "10px" }}
                            />
                          </button>
                          <div class="dropdown-content">
                            <div>
                              <button
                                onClick={() => setDelivery("Free delivery")}
                                style={{ borderBottomWidth: "0px" }}
                              >
                                Free delivery
                              </button>
                            </div>
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
                      onClick={() => navigate("/payment")}
                    >
                      Payment
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
export default Shipping;
