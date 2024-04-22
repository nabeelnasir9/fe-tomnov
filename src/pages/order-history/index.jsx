import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components";
import Grid from "@mui/material/Grid";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./index.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const columns = [
  { id: "ordeNo", label: "Order no", minWidth: 100 },
  { id: "items", label: "Items", minWidth: 200 },
  {
    id: "status",
    label: "Status",
    minWidth: 150,
  },
  {
    id: "quantity",
    label: "quantity",
    minWidth: 150,
  },
  {
    id: "deliveryDate",
    label: "Delivery Date",
    minWidth: 150,
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
  },
  {
    id: "course",
    label: "",
    minWidth: 150,
  },
];

const OrderHistory = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const email = localStorage.getItem("email");
        const response = await axios.get(
          "https://be-tomnonv.onrender.com/api/auth/orders/",
          {
            params: {
              userEmail: email,
            },
          },
        );
        if (response.status === 200) {
          console.log("User orders:", response.data);
          setOrders(response.data);
        }
      } catch (error) {
        console.error("There was a problem fetching the user's orders:", error);
        return null;
      }
    };
    fetchUserOrders();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="tomnov-generate-container">
      <Navbar margin={true} />
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={8}>
          <button
            className="order-history-back-button"
            onClick={() => window.history.back()}
          >
            <IoIosArrowRoundBack className="back-icon" />
            <p>Order History</p>
          </button>
          <p className="order-history-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>

          <div className="order-history-table-main">
            <Paper
              sx={{ width: "100%" }}
              style={{ backgroundColor: "#111827" }}
            >
              <TableContainer sx={{ maxHeight: "65vh" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            backgroundColor: "#192338",
                          }}
                        >
                          <p className="order-history-table-header-title">
                            {column.label}
                          </p>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody style={{ backgroundColor: "#111827" }}>
                    {orders.map((row, i) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell>
                            <p className="order-history-table-order-no">
                              {i + 1}
                            </p>
                          </TableCell>
                          <TableCell>
                            {row.lineItems.length > 0 && (
                              <div className="order-history-table-item-main">
                                <img
                                  src={
                                    row.lineItems[0].price_data.product_data
                                      .images[0]
                                  }
                                  alt="item"
                                />
                                <p>
                                  {
                                    row.lineItems[0].price_data.product_data
                                      .name
                                  }
                                </p>
                                {row.lineItems.length > 1 && (
                                  <p>+ {row.lineItems.length - 1} more</p>
                                )}
                              </div>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="order-history-table-status-main">
                              <FaRegClock color="#fff" />
                              <p>Completed</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            {row.lineItems.length > 0 && (
                              <div className="order-history-table-tracking-main">
                                <p>
                                  {row.lineItems.reduce(
                                    (total, item) =>
                                      total + parseInt(item.quantity),
                                    0,
                                  )}
                                </p>
                              </div>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="order-history-table-date-main">
                              <p className="order-history-table-date-text">
                                (Expected)
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            {row.lineItems.length > 0 && (
                              <div>
                                <p className="order-history-table-price">
                                  $
                                  {(
                                    row.lineItems.reduce(
                                      (total, item) =>
                                        total + item.price_data.unit_amount,
                                      0,
                                    ) / 100
                                  ).toFixed(2)}
                                </p>
                              </div>
                            )}
                          </TableCell>
                          <TableCell>
                            <button
                              className="order-history-table-re-order-button"
                              onClick={() => navigate("/account")}
                            >
                              <p>Re-Order</p>
                              <FaArrowRight color="#fff" />
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                style={{
                  backgroundColor: "#111827",
                  color: "#fff",
                  fontFamily: "Oxygen",
                }}
              />
            </Paper>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={2}></Grid>
      </Grid>
    </div>
  );
};

export default OrderHistory;
