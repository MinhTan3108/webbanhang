import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import moment from "moment";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { fetchOrderHistory } from "../../store/slices/orderHistorySlice";

const Order = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("idUser");
  const orders = useSelector((state) => state.orderHistoryState.orders) || [];
  const loading = useSelector((state) => state.orderHistoryState.loading);

  useEffect(() => {
    if (userId) {
      dispatch(fetchOrderHistory(userId));
    }
  }, [dispatch, userId]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Đảm bảo container chiếm hết chiều cao viewport
      }}
    >
      <Header />
      <Box
        sx={{
          flexGrow: 1, // Đẩy footer xuống dưới
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "20px", fontWeight: "bold", color: "black" }}
        >
          Lịch sử đơn hàng
        </Typography>

        {loading && <CircularProgress sx={{ margin: "20px" }} />}

        {!loading && orders.length === 0 && (
          <TableContainer
            component={Paper}
            sx={{ boxShadow: 3, borderRadius: "8px" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#1976d2", color: "white" }}>
                  <TableCell
                    sx={{ fontWeight: "bold", color: "white", width: "10%" }}
                  >
                    Mã đơn hàng
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Thông tin người dùng
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Sản phẩm
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Ngày đặt
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Tổng tiền
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="h6" sx={{ color: "#ff1744" }}>
                    Không có lịch sử đơn hàng.
                  </Typography>
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        )}

        {!loading && orders.length > 0 && (
          <TableContainer
            component={Paper}
            sx={{ boxShadow: 3, borderRadius: "8px" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#96928E", color: "white" }}>
                  <TableCell
                    sx={{ fontWeight: "bold", color: "white", width: "10%" }}
                  >
                    Mã đơn hàng
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Thông tin người dùng
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Sản phẩm
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Ngày đặt
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Trạng thái
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Ngày xác nhận
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "white" }}
                  >
                    Tổng tiền
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow
                    key={order.id}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" },
                      "&:hover": { backgroundColor: "#e0e0e0" },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: "bold" }}
                    >
                      #{order.id}
                    </TableCell>
                    <TableCell align="left">
                      Họ tên: {order.fullName} <br />
                      Email: {order.email} <br />
                      SĐT: {order.phone} <br />
                      Địa chỉ: {order.address} <br />
                      {order.note ? `Ghi chú: {order.note}` : "Ghi chú: không có"}
                    </TableCell>

                    <TableCell align="left">
                      {order.products.map((product, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "8px",
                            padding: "8px",
                            border: "1px solid #ccc",
                          }}
                        >
                          {product.img && (
                            <img
                              src={product.img}
                              alt={`Sản phẩm ID: ${product.productId}`}
                              style={{
                                width: "50px",
                                height: "50px",
                                marginRight: "10px",
                                borderRadius: "4px",
                                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                              }}
                            />
                          )}
                          <Typography sx={{ marginRight: "8px" }}>
                            {product.nameProduct} x {product.quantity}
                          </Typography>
                        </Box>
                      ))}
                    </TableCell>
                    <TableCell align="left">
                      {order.date
                        ? moment(new Date(order.date)).format(
                            "DD/MM/YYYY HH:mm:ss"
                          )
                        : "không có"}
                    </TableCell>
                    <TableCell align="left">{order.status}</TableCell>
                    <TableCell align="left">
                      {order.dateUpdate && order.status === "Đã xác nhận"
                        ? moment(new Date(order.dateUpdate)).format(
                            "DD/MM/YYYY HH:mm:ss"
                          )
                        : "không có"}
                    </TableCell>
                    <TableCell align="left">
                      {order.totalAmount.toFixed(3)} VND
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default Order;
