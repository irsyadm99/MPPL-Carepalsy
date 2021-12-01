import axios from "axios";
import authHeader from "./auth-header";

const API_POST_BASEURL = "https://cerepalsy-be.herokuapp.com/v1/post";
const API_READ_URL =
  "https://cerepalsy-be.herokuapp.com/v1/post?populateUser=true";
const API_POSTWITHCOMMENT_URL =
  "https://cerepalsy-be.herokuapp.com/v1/post/withComment";
const COMMENT_API_BASEURL = "https://cerepalsy-be.herokuapp.com/v1/comment";
const FAQ_API_BASEURL = "https://cerepalsy-be.herokuapp.com/v1/faq";

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
  return axios.get(API_POSTWITHCOMMENT_URL);
};

const getPostVote = () => {
  return axios.get(API_POSTWITHCOMMENT_URL, { headers: authHeader() });
};

const getFaq = () => {
  return axios.get(FAQ_API_BASEURL);
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

const createFaq = (question, answer) => {
  return axios.post(
    FAQ_API_BASEURL,
    {
      question,
      answer,
    },
    {
      headers: authHeader(),
    }
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

const editFaq = (question, answer, faqId) => {
  return axios.put(
    FAQ_API_BASEURL + `/${faqId}`,
    {
      question,
      answer,
    },
    {
      headers: authHeader(),
    }
  );
};

const editComment = (text, commentId) => {
  return axios.put(
    COMMENT_API_BASEURL + `/${commentId}`,
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

const deleteComment = (commentId) => {
  return axios.delete(COMMENT_API_BASEURL + `/${commentId}`, {
    headers: authHeader(),
  });
};

const deleteFaq = (faqId) => {
  return axios.delete(FAQ_API_BASEURL + `/${faqId}`, {
    headers: authHeader(),
  });
};

const getPostById = (postId) => {
  return axios.get(API_POST_BASEURL + `/${postId}?populateUser=true`);
};

const getFaqByid = (faqId) => {
  return axios.get(FAQ_API_BASEURL + `/${faqId}`);
};

const getCommentById = (commentId) => {
  return axios.get(COMMENT_API_BASEURL + `/${commentId}?populateUser=true`);
};

const getPostDashboard = () => {
  return axios.get(API_POST_BASEURL);
};

const getCommentDashboard = () => {
  return axios.get(
    COMMENT_API_BASEURL + "?populateUser=true&populatePost=true"
  );
};

const getSelfPost = () => {
  return axios.get(API_POST_BASEURL + "/self", {
    headers: authHeader(),
  });
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
  getCommentById,
  editComment,
  getPostVote,
  createFaq,
  getFaq,
  deleteComment,
  deleteFaq,
  editFaq,
  getSelfPost,
  getFaqByid,
};
