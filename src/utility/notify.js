/*jshint esversion: 9*/
import Vue from "Vue";

const notification = {};
const notificationDefaultConfig = {
  position: "top right",
  group: "alert"
};

notification.success = (text, title = "", config = {}) => {
  Vue.notify({
    type: "success",
    title,
    text,
    ...notificationDefaultConfig,
    ...config
  });
};

notification.warn = (text, title = "", config = {}) => {
  Vue.notify({
    type: "warn",
    title,
    text,
    ...notificationDefaultConfig,
    ...config
  });
};

notification.error = (text, title = "", config = {}) => {
  Vue.notify({
    type: "error",
    title,
    text,
    ...notificationDefaultConfig,
    ...config
  });
};

export default notification;
