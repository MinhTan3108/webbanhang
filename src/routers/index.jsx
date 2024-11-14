import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { Dangnhap, Home, Sanpham,Dangki, ProductDetail } from "../pages";

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
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
