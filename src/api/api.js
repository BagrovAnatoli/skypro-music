import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://painassasin.online'
  });

export const userAPI = {
    signup(username, email, password) {
        return instance.post(`/user/signup/`, { username, email, password });
    },
    login(email, password) {
        return instance.post(`/user/login/`, { email, password });
    },
    logout() {
        return instance.delete(`/user/login/`);
    },
    getToken(email, password) {
        return instance.post(`/user/token/`, { email, password });
    },
    tokenRefresh(refresh) {
        return instance.post(`/user/token/refresh/`, { refresh });
    },
};

// {
//     "username": "KtotolyaTest",
//     "email": "test@test.com",
//     "password": "TestKtotolya"
//   }