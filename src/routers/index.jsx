import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { Dangnhap, Home, Sanpham,Dangki } from "../pages";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sanpham" element={<Sanpham />} />
          <Route path="/dangnhap" element={<Dangnhap />} />
          <Route path="/dangki" element={<Dangki />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
