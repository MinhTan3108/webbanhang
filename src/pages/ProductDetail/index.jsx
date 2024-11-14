import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
  CircularProgress,
  IconButton,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductById } from "../../store/slices/productDetailSlice";
// import { cartsRequest } from "../../api/auth/auth.cartRequest";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ShoppingCart } from "@mui/icons-material";
import Swal from "sweetalert2";
// import { fetchCarts } from "../../store/slices/cartSlices";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
// import { cartsRequest } from "../../api/auth/cartRequest";

const ProductDetail= () => {
  const [selectedColor, setSelectedColor] = useState(""); // State for selected color
  const [quantity, setQuantity] = useState(1); // State for quantity
  const navigate = useNavigate();
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const { id } = useParams();
  const dispatch= useDispatch();
  const productDetail = useSelector(
    (state) => state.productDetailState.productDetail
  );
  console.log(productDetail);
  const product = Array.isArray(productDetail) ? productDetail[0] : productDetail;

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);



  if (!productDetail) {
    return <div>No product found</div>;
  }
  const handleAddCart = () => {
    // const userId = localStorage.getItem("idUser"); // Retrieve userId from localStorage
    // if (!userId) {
    //   navigate("/login");
    //   return;
    // }
    // const dataCart = {
    //   productId: productDetail.id,
    //   quantity: quantity,
    //   userId: String(userId),
    //   color: selectedColor,
    // };
    // try {
    //   const result = cartsRequest(dataCart );
    //   if (result) {
    //     navigate("/cart");
    //     dispatch(fetchCarts(userId));
    //   } else {
    //     Swal.fire({
    //       icon: "error",
    //       text: "Something went wrong. Please try again later.",
    //     });
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <Header />
      <Box sx={{ padding: "70px 40px", marginBottom: "40px" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ paddingTop: "109px" }}
        >
          <Grid item xs={12} sm={6} key={product.id}>
            <Card
              sx={{
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "contain", maxWidth: "100%", height: "400" }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} sx={{ textAlign: "left" }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "24px",
                color: "rgb(var(--color_15))",
                letterSpacing: "0.05em",
              }}
            >
              {product.name}
            </Typography>
            <Rating
              name="read-only"
              value={product.rating || 4.5}
              precision={0.5}
              readOnly
              sx={{ color: "red", paddingTop: "10px" }}
            />
            <Typography variant="caption" color="textSecondary">
              {product.reviewCount || 10}
            </Typography>
            <Typography
              variant="body2"
              mt={2}
              color="textSecondary"
              fontSize={{ fontSize: "18px" }}
            >
              Pice: ${product.price}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              mt={3}
              sx={{ fontSize: "14px" }}
            >
              {product.description}
            </Typography>

            {/* Color Selection */}
            <Typography variant="subtitle1" mt={2}>
              Màu sắc:
            </Typography>
            <Grid container spacing={1}>
              {["Silver", "Black", "Gold"].map((color) => (
                <Grid item key={color}>
                  <Button
                    onClick={() => handleColorSelect(color)}
                    sx={{
                      backgroundColor: color,
                      width: 40,
                      height: 40,
                      border:
                         color ? "2px solid black" : "none",
                    }}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Quantity Selection */}
            <Typography variant="subtitle1" mt={2}>
              Số lượng:
            </Typography>
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => handleQuantityChange("decrease")}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1" mx={2}>
                {quantity}
              </Typography>
              <IconButton onClick={() => handleQuantityChange("increase")}>
                <AddIcon />
              </IconButton>
            </Box>

            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item>

                <Button
                  onClick={handleAddCart}
                  variant="outlined"
                  sx={{
                    backgroundColor: "black",
                    border: "1px solid black",
                    color: "white",
                    padding: "7px 90px",
                    "&:hover": { backgroundColor: "white", color: "black" },
                  }}
                >
                  <AddShoppingCartIcon sx={{ marginRight: "10px" }} />
                  Thêm vào giỏ hàng
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default ProductDetail;
