import React, { useState } from "react";
import { Navbar, Button } from "../../components";
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
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
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
    id: "trackingID",
    label: "Tracking ID",
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
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const OrdersList = [
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "Completed",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "Completed",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "Completed",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "Completed",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "Completed",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
    {
      orderNo: 2133,
      itemsImage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSqC1w7juXyqLMMZ5zuUO5UqduW9xxfOfpANgUqLhfWFKj4D0W",
      title: "Tarot card Artworks",
      status: "In Progress",
      trackingId: 2176413876,
      deliveryDate: "23-07-2021",
      price: 168.2,
    },
  ];

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
                    {OrdersList.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    ).map((row, i) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          <TableCell>
                            <p className="order-history-table-order-no">
                              {row.orderNo}
                            </p>
                          </TableCell>
                          <TableCell>
                            <div className="order-history-table-item-main">
                              <img src={row.itemsImage} />
                              <p>{row.title}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="order-history-table-status-main">
                              <FaRegClock color="#fff" />
                              <p>{row.status}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="order-history-table-tracking-main">
                              <p>{row.trackingId}</p>
                              <FaArrowUpRightFromSquare color="#777777" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="order-history-table-date-main">
                              <p className="order-history-table-date">
                                {row.deliveryDate}
                              </p>
                              <p className="order-history-table-date-text">
                                (Expected)
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="order-history-table-price">
                                ${row.price}
                              </p>
                            </div>
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
                count={OrdersList.length}
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
