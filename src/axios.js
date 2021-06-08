import axios from "axios";
const functions = require("firebase-functions");

const instance = axios.create({
  baseURL: functions.config().backend.key,
});

export default instance;
