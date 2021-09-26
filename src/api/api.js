import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '20d2d5b3-2e05-4d00-acf0-22a25d247728'
    }
})

export const API = {

    auth() {
        return instance.get('auth/me')
            .then(response => response.data)
    },

    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
}

