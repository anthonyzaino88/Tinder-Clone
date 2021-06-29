import axios from 'axios';

const instance = axios.create({
  baseURL: "https://tin-backend-clone.herokuapp.com",

});

export default instance;
