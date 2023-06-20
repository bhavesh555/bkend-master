import axios from "axios";

//const url = "https://backend-ace.onrender.com/posts/event";
const url = "http://localhost:5003/posts/alumni";
const apifetchPosts = () => axios.get(url);

const apicreatePost = (newPost) => axios.post(url, newPost);

const apiupdatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

const apideletePost = (id) => axios.delete(`${url}/${id}`);

const apilikePost = (id) => axios.patch(`${url}/${id}/likePost`);

export {
  apifetchPosts,
  apicreatePost,
  apiupdatePost,
  apideletePost,
  apilikePost,
};
