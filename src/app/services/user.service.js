import axios from "axios";

const API_URL = "http://localhost:3000/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user/user");
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "user/mod");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "user/admin");
};

const getProfile = () => {
  return axios.get(API_URL + "user/profile")
}

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getProfile
}

export default UserService;
