import axios from 'axios';
import config from './config';

const instance = axios.create({

    baseURL: config.get('BASE_API_URL'),
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept-Language': localStorage.getItem('language') || 'en'
    }
});

export default instance;
