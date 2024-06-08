import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

export const useRegistrationStore = defineStore("registrationStore", () => {
    const router = useRouter()
    const route = useRoute()

    const username = ref('')
    const email = ref('')
    const password = ref('')

    const register = async() => {
        try {
            const { data } = await axios.post("https://4ef7a004d1071db2.mokky.dev/register", {
                name: username.value,
                email: email.value,
                password: password.value
            },
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            console.log(data)
            router.push('/')
        } catch (err){
            console.log(err)
        }
    }

    const auth = async() => {
        try {
            const { data } = await axios.post("https://4ef7a004d1071db2.mokky.dev/auth", {
                email: email.value,
                password: password.value
            }, 
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            const token = data.token
            localStorage.setItem('authToken', token)
            console.log('Token saved: ', token)

            const redirectTo = route.query.redirect
            console.log('Redirecting to:', redirectTo)
            router.push(redirectTo);
        } catch (err) {
            console.log(err)
        }
    }
    
    const logOut = async() => {
        localStorage.removeItem('authToken')
        console.log(localStorage.getItem('authToken'))
    }

    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                localStorage.removeItem('authToken');
                delete axios.defaults.headers.common['Authorization'];
                router.push({
                    name: 'Login',
                    query: { 
                        redirect: router.currentRoute.value.fullPath
                    },
                });
            }
            return Promise.reject(error);
        }
    );

    return {
        username,
        email,
        password,
        register,
        auth,
        logOut
    }
})