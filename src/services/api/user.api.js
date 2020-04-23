/*jshint esversion: 9*/

import httpClient from "../httpClient";

const END_POINT = "/user";

const getUser = user_id => httpClient.get(END_POINT, { user_id });
const createUser = data => httpClient.post(END_POINT, { ...data });

export { getUser, createUser };
