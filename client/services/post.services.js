import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/v1/post";

const createPost = (text) => {
  return axios.post(
    API_URL,
    {
      text,
    },
    { headers: authHeader() }
  );
};

export default {
  createPost,
};
