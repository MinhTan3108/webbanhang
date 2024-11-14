
import axiosClient from "../axiosClient";

export const cartsRequest = async ({
  productId,
  quantity,
  color,
  userId,
}) => {
  try {
    const response = await axiosClient.post("/carts", {
      productId,
      quantity,
      color,
      userId,
    });
    return response;
  } catch (error) {
    console.error("Error in cartsRequest:", error);
    return null;
  }
};