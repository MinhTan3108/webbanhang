import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { ShoppingBag, Person, Search } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#e3ded9', boxShadow: 'none',height: '70px' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        {/* Left Section */}
        <Box display="flex">
        <Button omponent={Link} to="/" color="inherit" sx={{ color: '#1a1a1a', marginLeft: '20px',textTransform: "uppercase",textDecoration: "none","&:hover": { backgroundColor: "transparent",textDecoration : "underline" }}}>HOME</Button>
          <Button component={Link} to="/sanpham" color="inherit" sx={{ color: '#1a1a1a', marginLeft: '20px',textTransform: "uppercase",textDecoration: "none","&:hover": { backgroundColor: "transparent",textDecoration : "underline" }}}>SHOP ALL</Button>
          <Button color="inherit" sx={{color: '#1a1a1a', marginLeft: '20px',textTransform: "uppercase",textDecoration: "none","&:hover": { backgroundColor: "transparent",textDecoration : "underline" } }}>BODY</Button>
          <Button color="inherit" sx={{color: '#1a1a1a', marginLeft: '20px',textTransform: "uppercase",textDecoration: "none","&:hover": { backgroundColor: "transparent",textDecoration : "underline" }}}>HOME SCENTS</Button>
        </Box>
        <Box>
          <Typography variant="body1" style={{ color: '#1a1a1a', marginRight: '20px', fontWeight: 500,fontWeight: "bold" ,fontFamily: "Times New Roman",}} sx={{ fontSize: '40px',ml:5 }}>
            H.I.P
          </Typography>
        </Box>
        {/* Right Section */}
        <Box display="flex" alignItems="center">
        <InputBase
            placeholder="Tìm kiếm..."
            // value={search}
            // onChange={handleSearch}
            // onKeyPress={(e) => {
            //   if (e.key === "Enter") {
            //     handleSearchSubmit();
            //   }
            // }}
            sx={{
              borderBottom: "1px solid black",
              color: "black",
              padding: "0 10px",
              width: "200px",
              marginRight: "10px",
            }}
          />
          <IconButton
            color="inherit"
            // onClick={handleSearchSubmit}
            sx={{ color: "black", "&:hover": { backgroundColor: "#f0f0f0" } }}
          >
            <Search />
          </IconButton>
          <IconButton color="inherit" style={{ color: '#000' }}>
            <Person />
          </IconButton>
          <Typography variant="body2" style={{ marginRight: '10px', color: '#000' }}>
            Log In
          </Typography>
          <IconButton color="inherit" style={{ color: '#000' }}>
            <ShoppingBag />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
