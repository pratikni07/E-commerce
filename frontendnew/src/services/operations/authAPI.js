import { setLoading, setToken } from "@/slices/authSlice";
import { endpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import { setUser } from "@/slices/profileSlice";
const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
  } = endpoints;

export function sendOtp(email, navigate) {
    return async (dispatch) => {

      dispatch(setLoading(true));
      try {
        const response = await apiConnector("POST", SENDOTP_API, {
          email,
          checkUserPresent: true,
        });
        // dispatch(setProgress(100));
        console.log("SENDOTP API RESPONSE............", response);
        console.log(response.data.success);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.log("SENDOTP API ERROR............", error);
        // toast.error(error?.response?.data?.message);
        // dispatch(setProgress(100));
      }
      dispatch(setLoading(false));
      // toast.dismiss(toastId)
    };
}


export function signUp(role, firstName, lastName, email, phoneNumber, password, confirmPassword, otp,navigate) {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", SIGNUP_API, {
                role,
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                confirmPassword,
                otp,
            });
            console.log("SIGNUP API RESPONSE............", response);
            console.log(response.data.success);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
        } catch (error) {
            console.log("SIGNUP API ERROR............", error);
        }
        dispatch(setLoading(false));
    };
}

export function login(email,password,navigate){
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            });
            // console.log(response)
            console.log("LOGIN API RESPONSE............", response);
            console.log(response.data.success);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            dispatch(setToken(response.data.token));
            dispatch(setUser({ ...response.data.user }));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            console.log("login")
            navigate("/");
        } catch (error) {
            console.log("LOGIN API ERROR............", error);
        }
        dispatch(setLoading(false));
    };
}
