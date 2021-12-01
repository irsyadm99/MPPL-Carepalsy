import axios from "axios";
import authHeader from "./auth-header";

const VOTE_BASEURL = "https://cerepalsy-be.herokuapp.com/v1/post/upvote/";
const API_POST_BASEURL = "https://cerepalsy-be.herokuapp.com/v1/post";

const upvote = (postId) => {
  return axios.get(API_POST_BASEURL + "/upvote/" + postId, {
    headers: authHeader(),
  });
};

const downvote = (postId) => {
  return axios.get(API_POST_BASEURL + "/downvote/" + postId, {
    headers: authHeader(),
  });
};

const noVote = (postId) => {
  return axios.get(API_POST_BASEURL + "/novote/" + postId, {
    headers: authHeader(),
  });
};

export default {
  upvote,
  downvote,
  noVote,
};
