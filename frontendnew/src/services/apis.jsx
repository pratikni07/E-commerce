const BASE_URL = "http://localhost:4000/api/v1";

export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/register",
    LOGIN_API: BASE_URL + "/auth/login",
}

export const category ={
    ADD_CATEGORY  : BASE_URL + "/category/addcategory",
    GET_ALL_SUB_CATEGORIES : BASE_URL + "/category/getallsubcategories", 
    ADD_SUB_CATEGORY  : BASE_URL + "/category/addsubcategory",
    GET_ALL_CATEGORIES : BASE_URL + "/category/getallcategories"
}

export const product = {
    ADD_PRODUCT : BASE_URL + "/product/addProduct",
    GET_ALL_PRODUCT : BASE_URL + "/product/getProduct"
}
export const design = {
    ADD_HERO_SLIDER : BASE_URL + "/design/addhomeslider",
    GET_HERO_SLIDER : BASE_URL + "/design/gethomeslider",
}