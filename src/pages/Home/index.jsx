import React from "react";
import Header from "../../layouts/Header";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Footer from "../../layouts/Footer";

const Home = () => {
  const products = [
    {
      title: "LAVENDER FIELDS",
      description: "100 ml/ Home Fragrance",
      price: "850.000 VND",
      image:
        "https://static.wixstatic.com/media/c837a6_0a6b6f919918476d9c579112fc64b5fe~mv2.jpg/v1/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_0a6b6f919918476d9c579112fc64b5fe~mv2.jpg", // Thay thế bằng link thực của ảnh
      label: "Best Seller",
    },
    {
      title: "HONEY KISS",
      description: "100 ml/ Body Lotion",
      price: "150.000 VND",
      image:
        "https://static.wixstatic.com/media/c837a6_46e62124f4fe4bfd8fa3061e0c815825~mv2.jpg/v1/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_46e62124f4fe4bfd8fa3061e0c815825~mv2.jpg",
      label: "Best Seller",
    },
    {
      title: "CITRUS GARDEN",
      description: "Candle 250 g/ 8.6 oz",
      price: "550.000 VND",
      image:
        "https://static.wixstatic.com/media/c837a6_12bd9fd4c5f5452abbdf76f56512bec6~mv2.jpg/v1/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_12bd9fd4c5f5452abbdf76f56512bec6~mv2.jpg",
      label: "Best Seller",
    },
    {
      title: "JASMINE BREEZE",
      description: "100 ml/ Eau De Parfum",
      price: "180.000 VND",
      image:
        "https://static.wixstatic.com/media/c837a6_748eb14417e049899f171bc21dd54995~mv2.jpg/v1/fill/w_474,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_748eb14417e049899f171bc21dd54995~mv2.jpg",
      label: "Best Seller",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginBottom :"40px"
        }}
      >
        <Box display="flex" height="660px" width="100%">
          {/* Left Section: Text Information */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            padding="40px"
            sx={{ backgroundColor: "#f9f9f9" }}
          >
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              NOMAD 13 <br /> EAU DE PARFUM
            </Typography>
            <Typography component={"p"} sx={{ mb: 4 }}>
              Discover the original fragrance
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 20px",
              }}
            >
              Shop Now
            </Button>
          </Box>

          {/* Right Section: Image */}
          <Box
            flex={1}
            sx={{
              backgroundImage: `url('https://static.wixstatic.com/media/84770f_e9c16251453b45e785c4c7d16f27b2c7~mv2.jpg/v1/fill/w_950,h_1041,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/new%20welcome.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Box>

        <Box>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: "20px" }}
          >
            <Typography variant="h5" fontWeight="bold">
              SẢN PHẨM BÁN CHẠY
            </Typography>
            <Button
              variant="text"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Xem Thêm →
            </Button>
          </Grid>

          <Grid container>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card elevation={0} sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="380px"
                    image={product.image}
                    alt={product.title}
                  />
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      color: "black",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    {product.label}
                  </Typography>
                  <CardContent style={{ textAlign: "left" }}>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      style={{ marginTop: "10px" }}
                    >
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px",
            backgroundImage:
              "url(https://static.wixstatic.com/media/c837a6_5b41865393e44ee88011d8d373985afc~mv2.jpg/v1/fill/w_1899,h_519,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_5b41865393e44ee88011d8d373985afc~mv2.jpg)", // Thay thế bằng đường dẫn của hình nền
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            height: "300px",
          }}
        >
          {/* Phần văn bản */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              TRY ONE OF OUR BESTSELLERS AND GET 10% OFF
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                padding: "10px 20px",
                fontSize: "16px",
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Shop Now
            </Button>
          </Box>

          {/* Phần hình ảnh sản phẩm */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src="https://static.wixstatic.com/media/c837a6_00c8a4dc07d14744a82a255e3cb7dfd4~mv2.png/v1/fill/w_734,h_489,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2028.png" // Thay thế bằng đường dẫn của hình ảnh sản phẩm
              alt="Products"
              style={{
                maxHeight: "350px",
                objectFit: "contain",
                display: "inline-block",
                padding: "30px 0 0 230px",
              }}
            />
          </Box>
        </Box>
        <Box sx={{}}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: "30px",
              fontWeight: "bold",
              textAlign: "left",
              marginTop: "60px",
            }}
          >
            SẢN PHẨM THEO DANH MỤC
          </Typography>

          <Grid container>
            {/* Phần Body Fragrances */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  height: "500px",
                  backgroundImage:
                    "url(https://static.wixstatic.com/media/c837a6_af21d0be8ad54ce4adc6acb7a2decb91~mv2.jpg/v1/fill/w_591,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/body.jpg)", // Hình ảnh Body Fragrances
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  BODY FRAGRANCES
                </Typography>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontWeight: "bold",
                      borderBottom: "2px solid black",
                      padding: 0,
                    }}
                    endIcon={<span style={{ marginLeft: "5px" }}>→</span>}
                  >
                    View More
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Phần Home Scents */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  height: "500px",
                  backgroundImage:
                    "url(https://static.wixstatic.com/media/84770f_6b8b418c932f49e39e3097cac4f58e11~mv2.jpg/v1/fill/w_950,h_965,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2022.jpg)", // Hình ảnh Home Scents
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  HOME SCENTS
                </Typography>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontWeight: "bold",
                      borderBottom: "2px solid black",
                      padding: 0,
                    }}
                    endIcon={<span style={{ marginLeft: "5px" }}>→</span>}
                  >
                    View More
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{}}>
          <Grid container spacing={0}>
            {/* Phần Text bên trái */}
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: "20px" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  VỀ NOUS DEUX FRAGRANCES
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ marginBottom: "30px", fontWeight: "bold" }}
                >
                  Kể từ năm 1960
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: "1.6" }}>
                  Đây là một không gian để chia sẻ thêm về doanh nghiệp: ai đứng
                  sau nó, nó làm gì và trang web này mang đến điều gì. Đây là cơ
                  hội để kể câu chuyện đứng sau doanh nghiệp hoặc mô tả một dịch
                  vụ hoặc sản phẩm đặc biệt mà nó cung cấp. Bạn có thể sử dụng
                  phần này để chia sẻ lịch sử của công ty hoặc làm nổi bật một
                  tính năng cụ thể giúp nó nổi bật so với các đối thủ. Hãy để
                  những gì bạn viết nói lên chính nó. Giữ một giọng điệu và
                  phong cách nhất quán xuyên suốt trang web để trung thành với
                  hình ảnh thương hiệu và cho khách truy cập cảm nhận về giá trị
                  và cá tính của công ty.
                </Typography>
              </Box>
            </Grid>

            {/* Phần Hình ảnh bên phải */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  backgroundImage:
                    "url(https://static.wixstatic.com/media/c837a6_7f2fccf4a9c14386935bd5d9f65e982b~mv2.jpg/v1/fill/w_950,h_916,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/yuvalna_fine_art_photographytextures_reminiscent_of_sea_anemo_c44a10de-4080-4b39-8787-1436.jpg)", // Thay bằng đường dẫn tới hình ảnh của bạn
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
