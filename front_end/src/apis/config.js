import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // You can modify the config here, such as adding headers
    // config.headers["Accept"] = "application/json";
    // config.headers["Authorization"] =
    //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTcwODNlNTM0M2Y4MDQ3MzRlNTY0NTMwNGM4YzZlZiIsInN1YiI6IjY1MWYyZWY5ZjA0ZDAxMDEzOTRiMmI3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6CQ_AsUY_4kW60VLUWA3igU6wKdOfZiQsFQmzzBYPF0";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log(response);
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
