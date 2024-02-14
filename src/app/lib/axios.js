import axios from "axios";
import Cookies from "js-cookie"; // You need to install js-cookie

const BASE_URL = "https://grove-server.vercel.app/api";

// Create an axios instance
const instance = axios.create({
    baseURL: `${BASE_URL}`,
});

instance.interceptors.request.use(async (config) => {
    try {
        // Before each request, get the CSRF cookie
        await axios.get(`${BASE_URL}/sanctum/csrf-cookie`);

        // Get the CSRF token from the cookie
        const csrfToken = Cookies.get("XSRF-TOKEN");

        if (csrfToken) {
            // If the CSRF token is available, set it in the headers
            config.headers["X-CSRF-TOKEN"] = csrfToken;
        }

        return config;
    } catch (error) {
        return Promise.reject(error);
    }
});

// instance.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

export default instance;
