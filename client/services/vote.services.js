import axios from "axios";
import authHeader from "./auth-header";

const VOTE_BASEURL = "http://localhost:8080/v1/post/upvote/";

const upvote = (postId) => {
  return axios.get(VOTE_BASEURL + postId, { headers: authHeader() });
};

const downvote = (postId) => {
  return axios.get(VOTE_BASEURL + postId, { headers: authHeader() });
};

export default {
  upvote,
  downvote,
};
