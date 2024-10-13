import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField, Typography, Box, Link } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';

const Dangnhap = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#f7f7f7' }}
    >
      <Box
        sx={{
          width: '400px',
          backgroundColor: '#fff',
          padding: '40px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Blue xin chào!
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Đăng nhập bằng tài khoản của bạn
        </Typography>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              <Field
                as={TextField}
                fullWidth
                id="password"
                name="password"
                label="Mật khẩu"
                type="password"
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <Link href="#" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Box>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#1e2f97',
                  color: '#fff',
                  marginTop: '16px',
                  marginBottom: '16px',
                  padding: '10px',
                  fontSize: '16px',
                }}
              >
                ĐĂNG NHẬP
              </Button>
            </Form>
          )}
        </Formik>

        <Box display="flex" justifyContent="center" gap={2} mb={2}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ textTransform: 'none', flex: 1, borderColor: '#db4437', color: '#db4437' }}
          >
            Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ textTransform: 'none', flex: 1, borderColor: '#3b5998', color: '#3b5998' }}
          >
            Facebook
          </Button>
        </Box>

        <Typography variant="body2" align="center">
          Bạn chưa có tài khoản?{' '}
          <Link href="#" variant="body2" sx={{ color: '#1e2f97' }}>
            Đăng ký
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Dangnhap;
