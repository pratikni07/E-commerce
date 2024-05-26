import { apiConnector } from "../apiconnector";
import { design } from "../apis";

const { ADD_HERO_SLIDER , GET_HERO_SLIDER } = design;

export const addHeroSlider = async (homeSliderData, imagePreview) => {
    try {
        const response = await apiConnector("POST", ADD_HERO_SLIDER, { homeSliderData, image: imagePreview });
        return response;
    } catch (error) {
        throw error;
    }
};


export async function getHeroSlider(){
    try {
        const response = await apiConnector("GET", GET_HERO_SLIDER);

        console.log("GET HERI SLIDER API RESPONSE:", response);
        if (!response.data.success) {
            throw new Error(response.data);
        }
        return response.data.data; // Assuming categories are nested within the response data
    } catch (error) {
        console.log("GET HERO SLIDER API ERROR:", error);
        throw error; // Re-throwing the error for further handling
    }
}