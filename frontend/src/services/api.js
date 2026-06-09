import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://mypustak-post-management-7s7g.onrender.com';

const api = axios.create({
  baseURL: API_URL,
});

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const createPost = async (postData) => {
  const response = await api.post('/posts', postData);
  return response.data;
};

export const deletePost = async (postId) => {
  await api.delete(`/posts/${postId}`);
};

export default api;
