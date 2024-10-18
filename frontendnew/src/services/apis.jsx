const BASE_URL = "http://localhost:4000/api/v1";

export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/register",
  LOGIN_API: BASE_URL + "/auth/login",
  ADD_ADDRESS_API: BASE_URL + "/auth/addAddress",
  GET_ALL_ADDRESS_API: BASE_URL + "/auth/getAllAddress",

  GET_ALL_USERS_API: BASE_URL + "/auth/getAllUsers",
  GET_USER_DETAILS_API: BASE_URL + "/auth/users/",
};

export const search = {
  SEARCH_PRODUCT: BASE_URL + "/search/searchproduct",
};

export const category = {
  ADD_CATEGORY: BASE_URL + "/category/addcategory",
  GET_ALL_SUB_CATEGORIES: BASE_URL + "/category/getallsubcategories",
  GET_ALL_SUB_CATEGORIES_BY_CATEGORYID:
    BASE_URL + "/category/getSubcategoriesByCategoryId",
  ADD_SUB_CATEGORY: BASE_URL + "/category/addsubcategory",
  GET_ALL_CATEGORIES: BASE_URL + "/category/getallcategories",
};

export const product = {
  ADD_PRODUCT: BASE_URL + "/product/addProduct",
  GET_ALL_PRODUCT: BASE_URL + "/product/getProduct",
  GET_PRODUCT_BY_ID: BASE_URL + "/product/getProductById",
  GET_PRODUCT_BY_CATEGORY_SUBCATEGORY:
    BASE_URL + "/product/getProductByCategoryandSubcategory",
  GET_PRODUCT_BY_SUBCATEGORY: BASE_URL + "/product/getProductBySubcategory/",
};
export const design = {
  ADD_HERO_SLIDER: BASE_URL + "/design/addhomeslider",
  GET_HERO_SLIDER: BASE_URL + "/design/gethomeslider",
  ADD_HOME_MODAL: BASE_URL + "/design/addhomemodal",
  GET_HOME_MODAL: BASE_URL + "/design/gethomemodal",
  ADD_SALE: BASE_URL + "/offers/addSale",
  GET_ALL_SALES: BASE_URL + "/offers/getAllSales",
};
export const wishlist = {
  ADD_PRODUCT_TO_WISHLIST: BASE_URL + "/wishlist/addToWishlist",
  CHECK_PRODUCT_IN_WIHSLIST: BASE_URL + "/wishlist/checkToWishlist",
  GET_ALL_WISHLIST: BASE_URL + "/wishlist/getAllWishlist",
};
