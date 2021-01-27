import axios from 'axios';
import router from '@/router';
import store from '@/store';

const UNOTHORIZED_CODE = 403;

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000, // indicates, 1000ms ie. 1 second
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  function (config) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = store.state.token;
    console.log(JSON.stringify(config.headers));
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  function (response) {
    console.log('INTERCEPTOR OK');
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    console.log('INTERCEPTOR KO');
    if (error.status === UNOTHORIZED_CODE) {
      await router.push({ path: 'login' });
      return Promise.accept();
    }

    return Promise.reject(error);
  }
);

export default httpClient;
