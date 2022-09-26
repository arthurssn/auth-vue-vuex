import axios from 'axios';
import provider from '../store/index';
const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json',
    }
});

http.interceptors.request.use(function (config) {
    const token = provider.state.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, function (erro) {
    return Promise.reject(erro)
})

export default http;