import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useVacanciesStore = defineStore("VacanciesStore", () => {
    const vacancies = ref([])

    const fetchVacancies = async() => {
        try {
            const { data } = await axios.get("https://4ef7a004d1071db2.mokky.dev/vacancies")
            vacancies.value = data
        } catch (err) {
            console.log(err)
        }
    }

    const postVacancies = async(title, company, city, jobType, schedule, experience, payment) => {
        const job = {
            title: title,
            company: company,
            city: city,
            job_type: jobType,
            schedule: schedule,
            experience: experience,
            payment: payment,
        }
        try {
            await axios.post("https://4ef7a004d1071db2.mokky.dev/vacancies", job)
        } catch (err){
            console.log(err)
        }
    }

    return {
        vacancies,
        fetchVacancies,
        postVacancies
    }
})