import axios from 'axios';

const instance = axios.create({
    baseURL: "https://support-page-joatspace-2e8ec.firebaseio.com/"
})

export default instance;