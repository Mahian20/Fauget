'use strict';

const tokenKey = 'authToken';

const authService = {
    login(token) {
        localStorage.setItem(tokenKey, token);
    },

    logout() {
        localStorage.removeItem(tokenKey);
    },

    getToken() {
        return localStorage.getItem(tokenKey);
    },

    isLoggedIn() {
        return !!this.getToken();
    }
};

module.exports = authService;
