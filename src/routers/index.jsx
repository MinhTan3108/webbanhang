import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { Dangnhap, Home, Sanpham,Dangki, ProductDetail, Buy, Order, AdminOrder } from "../pages";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sanpham" element={<Sanpham />} />
          <Route path="/dangnhap" element={<Dangnhap />} />
          <Route path="/dangki" element={<Dangki />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="order" element={<Order />} />
          <Route path="/admin" element={<AdminOrder />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
