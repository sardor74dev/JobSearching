import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export const useRegistrationStore = defineStore("registrationStore", () => {
    const router = useRouter()
    const username = ref('')
    const email = ref('')
    const password = ref('')

    const register = async(userData) => {
        try {
            await axios.post("https://4ef7a004d1071db2.mokky.dev/register", userData)
            router.push('/vacancies')
        } catch (err) {
            console.log(err)
        }
    }

    const auth = async(signedUser) => {
        try {
            await axios.post("https://4ef7a004d1071db2.mokky.dev/auth", signedUser)
            console.log('Signed In!')
        } catch (err) {
            console.log(err)
        }
    }

    return {
        username,
        email,
        password,
        register,
        auth
    }
})