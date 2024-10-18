import { apiConnector } from "../apiconnector";
import { product } from "../apis";

const {
  ADD_PRODUCT,
  GET_ALL_PRODUCT,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_CATEGORY_SUBCATEGORY,
  GET_PRODUCT_BY_SUBCATEGORY,
} = product;

export function addProduct(productData, navigate) {
  return async () => {
    try {
      // console.log(productData)
      const response = await apiConnector("POST", ADD_PRODUCT, {
        productData,
      });
      // console.log("ADD PRODUCT API RESPONSE:", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      navigate("/seller/showproducts");
    } catch (error) {
      console.log("ADD PRODUCT API ERROR:", error);
    }
  };
}

export async function getAllProducts() {
  try {
    const response = await apiConnector("GET", GET_ALL_PRODUCT);
    return response.data.data;
  } catch (error) {
    console.log("GET ALL PRODUCT API ERROR:", error);
  }
}

export async function getProductById(id) {
  try {
    const response = await apiConnector("GET", GET_PRODUCT_BY_ID + "/" + id);
    // console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.log("GET PRODUCT BY ID API ERROR:", error);
  }
}

export async function getProductsByCategoryAndSubCategory(cat, subcat) {
  try {
    const response = await apiConnector(
      "GET",
      GET_PRODUCT_BY_CATEGORY_SUBCATEGORY +
        `?category=${cat}&subcategory=${subcat}`
    );
    return response.data.data;
  } catch (error) {
    console.log("GET PRODUCT BY CATEGORY AND SUBCATEGORY API ERROR:", error);
  }
}

export async function getProductsBySubCategory(subcat) {
  try {
    const response = await apiConnector(
      "GET",
      GET_PRODUCT_BY_SUBCATEGORY + `${subcat}`
    );

    return response.data.data;
  } catch (error) {
    console.log("GET PRODUCT BY CATEGORY AND SUBCATEGORY API ERROR:", error);
  }
}

// export async function getProductsByCategoryAndSubCategory(cat, subcat) {
//   try {
//     const response = await apiConnector(
//       "GET",
//       GET_PRODUCT_BY_CATEGORY_SUBCATEGORY +
//         `?category=${cat}&subcategory=${subcat}`
//     );
//     console.log(response);
//     return response.data.data;
//   } catch (error) {
//     console.log("GET PRODUCT BY CATEGORY AND SUBCATEGORY API ERROR:", error);
//   }
// }
