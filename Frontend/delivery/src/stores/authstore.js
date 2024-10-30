import { defineStore } from "pinia";
import {ref} from 'vue'
export const useAuthStore = defineStore('authstore', {
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),
    actions: {
        registerUser(email, password, role, fName, lName) {
            const userData = { email, password, role, fName, lName };
            localStorage.setItem('user', JSON.stringify(userData));
            this.user = userData;
            this.isAuthenticated = true;
        },
        loginUser(email, password) {
            const loading = ref(true)
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                this.user = storedUser;
                this.isAuthenticated = true;
                return true;
            } else {
                return false;
            }
        },
        initializeAuth() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                this.user = storedUser;
                this.isAuthenticated = true;
            }
        },
        logoutUser() {
            localStorage.removeItem('user');
            this.user = null;
            this.isAuthenticated = false;
        }
    }
});
