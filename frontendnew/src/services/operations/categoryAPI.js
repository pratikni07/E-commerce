import { setLoading } from "@/slices/authSlice";
import { apiConnector } from "../apiconnector";
import { category } from "../apis";

const {
  ADD_CATEGORY,
  ADD_SUB_CATEGORY,
  GET_ALL_CATEGORIES,
  GET_ALL_SUB_CATEGORIES,
  GET_ALL_SUB_CATEGORIES_BY_CATEGORYID,
} = category;

export function addCategory(categoryData, imagePreview, navigate) {
  return async () => {
    try {
      const response = await apiConnector("POST", ADD_CATEGORY, {
        categoryData,
        image: imagePreview,
      });
      // console.log("ADD CATEGORY API RESPONSE:", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      navigate("/seller/category");
    } catch (error) {
      console.log("ADD CATEGORY API ERROR:", error);
    }
  };
}

export async function addSubCategory(subCategoryData, imagePreview) {
  try {
    const response = await apiConnector("POST", ADD_SUB_CATEGORY, {
      subCategoryData,
      image: imagePreview,
    });
    // console.log("ADD CATEGORY API RESPONSE:", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("ADD CATEGORY API ERROR:", error);
  }
}

export async function getAllCategories() {
  try {
    const response = await apiConnector("GET", GET_ALL_CATEGORIES);
    // console.log("GET ALL CATEGORIES API RESPONSE:", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.categories; // Assuming categories are nested within the response data
  } catch (error) {
    console.log("GET ALL CATEGORIES API ERROR:", error);
    throw error; // Re-throwing the error for further handling
  }
}

export async function getAllSubCategories() {
  try {
    const response = await apiConnector("GET", GET_ALL_SUB_CATEGORIES);
    // console.log("GET ALL SUB CATEGORIES API RESPONSE:", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.categories; // Assuming categories are nested within the response data
  } catch (error) {
    console.log("GET ALL CATEGORIES API ERROR:", error);
    throw error; // Re-throwing the error for further handling
  }
}

export async function getAllSubCategoriesByCategoryId({ categoryId }) {
  try {
    const endpoint = `${GET_ALL_SUB_CATEGORIES_BY_CATEGORYID}/${categoryId}`;
    const response = await apiConnector("GET", endpoint);
    // console.log("GET SUB CATEGORIES BY CATEGORYID API RESPONSE:", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.subcategories; // Assuming subcategories are nested within the response data
  } catch (error) {
    console.log("GET ALL CATEGORIES API ERROR:", error);
    throw error; // Re-throwing the error for further handling
  }
}
