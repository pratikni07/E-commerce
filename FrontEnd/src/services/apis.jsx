const BASE_URL = "http://localhost:4000/api/v1";

export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/register",
    LOGIN_API: BASE_URL + "/auth/login",
}

export const category ={
    ADD_CATEGORY  : BASE_URL + "/category/addcategory",
    ADD_SUB_CATEGORY  : BASE_URL + "/category/addsubcategory",
    GET_ALL_CATEGORIES : BASE_URL + "/category/getallcategories"
}
