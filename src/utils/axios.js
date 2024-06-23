import axios from "axios";

const authAxios = axios.create({
  baseURL: "https://spring-deploy-9mhk.onrender.com/api",
});

export default authAxios;
