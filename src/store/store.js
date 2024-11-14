import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/userSlice";
import  productSlice  from "./slices/productSlice";
import  productDetailSlice  from "./slices/productDetailSlice";

const store = configureStore({
    reducer: {
        userState: userSlice,
        productState: productSlice,
        productDetailState: productDetailSlice,

    },
});

export default store;