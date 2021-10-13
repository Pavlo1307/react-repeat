import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

const getUsers = () => axiosInstance.get('/users');
const getUser = (id) => axiosInstance(id);
const getPosts = () => axiosInstance.get('/posts')

export { getUsers, getUser, getPosts }
