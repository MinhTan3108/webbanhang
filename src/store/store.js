import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/userSlice";
import  productSlice  from "./slices/productSlice";
import  productDetailSlice  from "./slices/productDetailSlice";
import  CartSlice  from "./slices/cartSlices";
import  orderHistorySlice  from "./slices/orderHistorySlice";
import  orderSlice  from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        userState: userSlice,
        productState: productSlice,
        productDetailState: productDetailSlice,
        cartState: CartSlice,
        orderHistoryState: orderHistorySlice,
        orderState: orderSlice

    },
});

export default store;