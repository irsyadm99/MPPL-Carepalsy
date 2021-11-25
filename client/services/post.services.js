import axios from "axios";
import authHeader from "./auth-header";

const API_POST_BASEURL = "http://localhost:8080/v1/post";
const API_READ_URL = "http://localhost:8080/v1/post?populateUser=true";
const API_POSTWITHCOMMENT_URL = "http://localhost:8080/v1/post/withComment";
const COMMENT_API_BASEURL = "http://localhost:8080/v1/comment";

const createPost = (text) => {
  return axios.post(
    API_POST_BASEURL,
    {
      text,
    },
    { headers: authHeader() }
  );
};

const getPost = () => {
  return axios.get(API_POST_BASEURL);
};

const createComment = (text, postId) => {
  return axios.post(
    COMMENT_API_BASEURL,
    {
      text,
      postId,
    },
    { headers: authHeader() }
  );
};

export default {
  createPost,
  getPost,
  createComment,
};
