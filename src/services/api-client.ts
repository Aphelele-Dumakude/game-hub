import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c1351a8da58a4e5a9e2f5672ecb82f17'
    }
})