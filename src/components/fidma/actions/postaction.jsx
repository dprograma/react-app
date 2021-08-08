import axios from "axios";
import { CREATE_POSTS } from "./types";

export const createPosts = () => {
  return (dispatch) => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(({ data }) => {
      dispatch(setPosts(data));
    });
  };
}

function setPosts(data) {
  return {
    type: CREATE_POSTS,
    payload: data
  };
}
