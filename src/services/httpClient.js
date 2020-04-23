/*jshint esversion: 6*/

import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "content-Type": "application/json"
  }
});

const getAuthToken = () => localStorage.getItem("auth_token");

httpClient.interceptors.request.use(config => {
  config.headers.Authorization = getAuthToken();
  return config;
});

export default httpClient;
