import { apiConnector } from "../apiconnector";
import { product } from "../apis";

const {
    ADD_PRODUCT,
    GET_ALL_PRODUCT,
} = product;


export function addProduct(productData,navigate) {
    return async () => {
        try {
            console.log(productData)
            const response = await apiConnector("POST", ADD_PRODUCT, {
                productData,
            });
            console.log("ADD PRODUCT API RESPONSE:", response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            navigate("/seller/showproducts")
        } catch (error) {
            console.log("ADD PRODUCT API ERROR:", error);
        }
    };
}

export async function getAllProducts() {
    try {
        const response = await apiConnector("GET", GET_ALL_PRODUCT);
        return response;
    } catch (error) {
        console.log("GET ALL PRODUCT API ERROR:", error);
    }
}