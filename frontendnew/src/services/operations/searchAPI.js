import { apiConnector } from "../apiconnector";
import { search } from "../apis";

const { SEARCH_PRODUCT } = search;

export async function searchProduct(searchQuery) {
  try {
    console.log("Search Query:", searchQuery);
    const endpoint = `${SEARCH_PRODUCT}?query=${searchQuery}`;
    const response = await apiConnector("GET", endpoint);

    if (!response) {
      throw new Error(response.data.message);
    }
    return response.data; // Return the entire response data
  } catch (error) {
    console.log("SEARCH PRODUCT API ERROR:", error);
    throw error;
  }
}
