import axios from 'axios';
import config from './config';

const instance = axios.create({

    baseURL: 'http://localhost:5280',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Language': localStorage.getItem('language') || 'en'
    }
});

export default instance;
