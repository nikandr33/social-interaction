import axios from 'axios';

export const setAuthorizationToken = (token) => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = `LendleaseAuth ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}