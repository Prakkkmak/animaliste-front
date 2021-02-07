import axios from "axios";
import router from "@/router";
import store from "@/store";
import toaster from "@/utils/toaster";

const FORBIDDEN_CODE = 403;

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000, // indicates, 1000ms ie. 1 second
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = store.state.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === FORBIDDEN_CODE) {
      if (
        router.currentRoute.value.name === "Login" ||
        router.currentRoute.value.name === "Register"
      ) {
        return Promise.reject(error);
      }
      await router.push({ name: "Login" });
      toaster.warning("toast.warning.connect");
      return Promise.resolve(error);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
