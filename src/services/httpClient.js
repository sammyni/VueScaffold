/*jshint esversion: 9*/

import axios from "axios";
import notify from "../utility/notify";

const getAuthToken = () => localStorage.getItem("auth_token");

const authTokenInterceptor = request => {
  request.headers.Authorization = getAuthToken();
  return request;
};

const onRequestMonitor = request => {
  console.log("Requesting");
  return request;
};

const onResponseReceivedMonitor = response => {
  console.log("Respponse received");
  return response;
};

const errorInterceptor = error => {
  switch (error.response.status) {
    case 400:
      console.error(error.response.status, error.message);
      // notify.warn(error.message, error.statusText);

      break;

    case 401:
      console.error(error.response.status, error.message);
      notify.warn("Please login again", "session Expired");
      break;
    default:
      console.error(error.response.status, error.message);
      notify.error("Something went wrong", "Server Error");
  }

  return Promise.reject(error);
};

const responseInterceptor = response => {
  switch (response.status) {
    case 200:
      console.log("Response Valid");
      break;
    default:
      console.log("Response Status", response.status);
      break;
  }
};

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "content-Type": "application/json"
  }
});

httpClient.interceptors.request.use(onRequestMonitor, authTokenInterceptor);
httpClient.interceptors.response.use(
  onResponseReceivedMonitor,
  responseInterceptor,
  errorInterceptor
);

export default httpClient;
