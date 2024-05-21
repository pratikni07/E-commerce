import { apiConnector } from "../apiconnector";
import { product } from "../apis";

const {
    ADD_PRODUCT,
    GET_ALL_PRODUCT,
} = product;


export function addProduct(productData,navigate) {
    return async () => {
        try {
            console.log("product")
            const response = await apiConnector("POST", ADD_PRODUCT, {
                productData,
            });
            console.log("ADD PRODUCT API RESPONSE:", response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            navigate("/seller/product")
        } catch (error) {
            console.log("ADD PRODUCT API ERROR:", error);
        }
    };
}