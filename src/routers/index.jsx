import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { Dangnhap, Home, Sanpham } from "../pages";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sanpham" element={<Sanpham />} />
          <Route path="/dangnhap" element={<Dangnhap />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
