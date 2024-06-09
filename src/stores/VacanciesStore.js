import axios from "axios";
import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";

export const useVacanciesStore = defineStore("VacanciesStore", () => {
    const vacancies = ref([])
    const searchedVacancies = ref([])

    const selectedJobTypes = reactive([]) 
    const selectedSchedules = reactive([])
    const selectedExperience = ref(null)

    const fetchVacancies = async() => {
        try {
            const { data } = await axios.get("https://4ef7a004d1071db2.mokky.dev/vacancies")
            vacancies.value = data
        } catch (err) {
            console.log(err)
        }
    }

    const postVacancies = async(title, company, location, jobType, schedule, experience, payment) => {
        const job = {
            title: title,
            company: company,
            location: location,
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


    const searchQuery = ref('')

    const searchByTitle = (event) => {
        searchQuery.value = event.target.value
    }

    const getSearchedVacancies = async() => {
        try {
            const { data } = await axios.get(`https://4ef7a004d1071db2.mokky.dev/vacancies?title=*${searchQuery.value}*`)
            vacancies.value = data
            console.log(data)
        } catch (err){
            console.log(err)
        }
    }

    const searchByProps = async() => {
        try {
            const query = buildQuery()
            const { data } = await axios.get(`https://4ef7a004d1071db2.mokky.dev/vacancies${query}`)
            vacancies.value = data
            console.log(data)
        } catch (err){
            console.log(err)
        }
    }

    const buildQuery = () => {
        const params = new URLSearchParams();
  
        selectedJobTypes.forEach(jobType => {
          params.append('jobType', jobType);
        });
  
        selectedSchedules.forEach(schedule => {
          params.append('schedule', schedule);
        });
  
        if (selectedExperience.value) {
          params.append('experience', selectedExperience.value);
        }
  
        return `?${params.toString()}`;
      }



    const productsInLC = localStorage.getItem("vacancies")
    if (productsInLC) {
        vacancies.value = JSON.parse(productsInLC)._value
    }

    watch(searchQuery, async() => {
        try {
            if(!searchQuery.value){
                searchedVacancies.value.length = 0
                console.log(searchedVacancies.value)
            } else {
                const linkValue = `https://4ef7a004d1071db2.mokky.dev/vacancies?title=*${searchQuery.value}*`
                console.log(linkValue)
                const searchedData = await axios.get(linkValue)
                searchedVacancies.value = searchedData.data
            }

            console.log(searchedVacancies.value)
        } catch (err){
            console.log(err)
        }
    })

    watch(() => vacancies, (state) => {
          localStorage.setItem("vacancies", JSON.stringify(state))
        }, { deep: true }
      )

    return {
        vacancies,
        fetchVacancies,
        postVacancies,
        searchQuery,
        searchByTitle,
        getSearchedVacancies,
        searchedVacancies,
        searchByProps,
        selectedJobTypes,
        selectedSchedules,
        selectedExperience
    }
})