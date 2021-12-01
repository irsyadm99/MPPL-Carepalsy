import axios from "axios";

const API_USER_BASEURL = "https://cerepalsy-be.herokuapp.com/v1/user/";

const getUserDashboard = () => {
  return axios.get(API_USER_BASEURL);
};

const getUserById = (userId) => {
  return axios.get(API_USER_BASEURL + userId);
};

export default {
  getUserDashboard,
  getUserById,
};
