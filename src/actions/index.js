import axios from "axios";

const API_KEY = "?key=alaa123";
const ROOT_URL = "http://reduxblog.herokuapp.com/api";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const DELET_POST="DELET_POST";
export const CREATE_POST="CREATE_POST";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload:request
  }
}

export function fetchPost(POST_ID) {
    const request = axios.get(`${ROOT_URL}/posts/${POST_ID}/${API_KEY}`);
  
    return {
      type: FETCH_POST,
      payload:request
    }
  }

  export function deletePost(POST_ID) {
    const request = axios.delete(`${ROOT_URL}/posts/${POST_ID}/${API_KEY}`);
  
    return {
      type: DELET_POST,
      payload:request
    }
  }
  
  export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`,props);
  
    return {
      type: CREATE_POST,
      payload:request
    }
  }