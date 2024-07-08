import axios from "axios";

const authAxios = axios.create({
  baseURL: "localhost:8080/api",
});

export default authAxios;
