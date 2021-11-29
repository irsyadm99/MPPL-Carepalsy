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

const editPost = (text, postId) => {
  return axios.put(
    API_POST_BASEURL + `/${postId}`,
    {
      text,
    },
    {
      headers: authHeader(),
    }
  );
};

const deletePost = (postId) => {
  return axios.delete(API_POST_BASEURL + `/${postId}`, {
    headers: authHeader(),
  });
};

const getPostById = (postId) => {
  return axios.get(API_POST_BASEURL + `/${postId}?populateUser=true`);
};

const getPostDashboard = () => {
  return axios.get(API_READ_URL);
};

const getCommentDashboard = () => {
  return axios.get(
    COMMENT_API_BASEURL + "?populateUser=true&populatePost=true"
  );
};

export default {
  createPost,
  getPost,
  createComment,
  getPostDashboard,
  getCommentDashboard,
  getPostById,
  editPost,
  deletePost,
};
