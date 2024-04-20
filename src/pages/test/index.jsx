import { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../../components";
import Grid from "@mui/material/Grid";
import { IoIosArrowRoundBack } from "react-icons/io";
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

const Test = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const email = localStorage.getItem("email");
        const response = await axios.get(
          "http://localhost:3001/api/auth/orders/",
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
      }
    };
    fetchUserOrders();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                      <TableCell>Order No</TableCell>
                      <TableCell>Items</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Delivery Date</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody style={{ backgroundColor: "#111827" }}>
                    {orders.map((row, i) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>
                          {row.lineItems.map((item, index) => (
                            <div key={index}>
                              <img
                                src={item.price_data.product_data.images[0]}
                              />
                              <p>{item.price_data.product_data.name}</p>
                            </div>
                          ))}
                        </TableCell>
                        <TableCell>
                          <div className="order-history-table-status-main">
                            <FaRegClock color="#fff" />
                            <p>Completed</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {row.lineItems.map((item, index) => (
                            <div key={index}>
                              <p>{item.quantity}</p>
                            </div>
                          ))}
                        </TableCell>
                        <TableCell>
                          <div className="order-history-table-date-main">
                            <p className="order-history-table-date-text">
                              (Expected)
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          {row.lineItems.map((item, index) => (
                            <div key={index}>
                              <p className="order-history-table-price">
                                $
                                {(item.price_data.unit_amount / 100).toFixed(2)}
                              </p>
                            </div>
                          ))}
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
                    ))}
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

export default Test;
