import { apiConnector } from "../apiconnector";
import { wishlist } from "../apis";

const { ADD_PRODUCT_TO_WISHLIST, CHECK_PRODUCT_IN_WIHSLIST, GET_ALL_WISHLIST } =
  wishlist;

export async function checkInWishlist(id, userId) {
  try {
    const productId = id;
    const response = await apiConnector("GET", CHECK_PRODUCT_IN_WIHSLIST, {
      productId,
      userId,
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.error("Error checking wishlist product:", error);
    throw error; // Re-throw the error to handle it in the caller function
  }
}

export async function addToWishlist(id, userId) {
  try {
    const productId = id;
    const response = await apiConnector("POST", ADD_PRODUCT_TO_WISHLIST, {
      productId,
      userId,
    });
    return response;
  } catch (error) {
    console.error("Error checking wishlist product:", error);
    throw error; // Re-throw the error to handle it in the caller function
  }
}

export async function getWishlist(userId) {
  try {
    const response = await apiConnector("POST", GET_ALL_WISHLIST, { userId });
    return response;
  } catch (error) {
    console.error("Error checking wishlist product:", error);
    throw error; // Re-throw the error to handle it in the caller function
  }
}
