import { Box, Button, Grid, InputBase, TextField, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{borderBottom: "1px solid black",paddingBottom:"50px" ,mb:5 ,mt:5}}>
      <Grid container spacing={5} sx ={{borderTop: "1px solid black",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"50px",paddingRight:"20px"}}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              style={{
                color: "#1a1a1a",
                marginRight: "20px",
                fontWeight: 500,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
              sx={{ fontSize: "20px" }}
            >
              H.I.P
            </Typography>
            <Typography component={"h3"}>
              ĐĂNG KÝ BẢN TIN CỦA CHÚNG TÔI
            </Typography>
            <Typography component={"p"} sx={{color:"gray"}}>
              Hãy là người đầu tiên khám phá những người mới <br /> đến và tin tức nội
              bộ.
            </Typography>
            <Typography component={"div"} sx={{position:"relative"}}>
                <TextField id="outlined-basic" label="Email*" variant="standard"  sx={{width: "100%"}}/><br />
                <Button variant="contained" sx={{width: "180px",borderRadius:"30px",position:"absolute",right:"0" ,height: "40px",color: "white", backgroundColor: "black",margin:"10px 0 ","&:hover": { backgroundColor: "white",color: "black",border: "1px solid black" }}}>Contained</Button>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2} >
        <Box sx={{ textAlign: "left",paddingLeft:"60px" }}>
            <Typography
              variant="h6"
              style={{
                color: "#1a1a1a",
                marginRight: "20px",
                fontWeight: 500,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
              sx={{ fontSize: "20px" }}
            >
             SHOP
            </Typography>
            <Typography component={"p"} sx={{color:"gray"}}>
                SHOP ALL <br />
                BODY <br />
                HOME SCENTS
            </Typography>
            
            </Box>
        </Grid>
        <Grid item xs={12} md={2}>
        <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              style={{
                color: "#1a1a1a",
                marginRight: "20px",
                fontWeight: 500,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
              sx={{ fontSize: "20px" }}
            >
             CHÍNH SÁCH 
            </Typography>
            <Typography component={"p"} sx={{color:"gray"}}>
                Điều khoản & Điều kiện <br />
                Chính sách và bảo mật <br />
                Chính sách vận chuyển <br />
                Chính sách hoàn tiền <br />
                Tuyên bố về khả năng truy cập
            </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={2}>
        <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              style={{
                color: "#1a1a1a",
                marginRight: "20px",
                fontWeight: 500,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
              sx={{ fontSize: "20px" }}
            >
             TRỤ SỞ CHÍNH
            </Typography>
            <Typography component={"p"} sx={{color:"gray"}}>
                68 phong bắc 1 <br />
                San Francisco, CA 94158 <br />
                info@H.I.P <br />
                123-456-7890 
            </Typography>
            </Box>
        </Grid>

        <Grid item xs={12} md={2}>
        <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              style={{
                color: "#1a1a1a",
                marginRight: "20px",
                fontWeight: 500,
                fontWeight: "bold",
                fontFamily: "Times New Roman",
              }}
              sx={{ fontSize: "20px" }}
            >
             MẠNG XÃ HỘI
            </Typography>
            <Typography component={"p"} sx={{color:"gray"}}>
                Tiktok <br />
                Instagram <br />
                Facebook <br />
                Youtube 
            </Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
