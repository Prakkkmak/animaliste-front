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
    console.log(error);
    if (error.response && error.response.status === FORBIDDEN_CODE) {
      await router.push({ path: "login" });
      toaster.warning("toast.warning.connect");
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
