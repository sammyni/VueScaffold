/*jshint esversion: 9*/

import httpClient from "../httpClient";
// import notify from "../../utility/notify";

const END_POINT = "/auth";

const checkAuth = async () => {
  try {
    const response = await httpClient.get(`${END_POINT}/check`);

    if (response.status === 401) {
      const refreshResponse = await httpClient.get(`${END_POINT}/refresh`);

      if (refreshResponse.status === 2000) {
        localStorage.setItem("auth_token", refreshResponse.data.token);
        return true;
      }

      return false;
    }

    return response.status === 200;
  } catch (error) {
    return false;
  }
};

export { checkAuth };
