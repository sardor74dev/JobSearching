import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fasFaHeart, farFaHeart, faUser)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home.vue'),
        meta: { 
            title: 'Главная - Палитра ваканисий'
        }
    },
    {
        path: '/vacancies',
        name: 'Vacancies',
        component: () => import('./pages/Vacancies.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/vacancy-details/:id',
        name: 'Vacancy Details',
        component: () => import('./pages/VacancyDetails.vue'),
        meta: {
            title: 'Вакансия - Палитра вакансий'
        }
    },
    {
        path: '/job-posting',
        name: 'Job Posting',
        component: () => import('./pages/JobPosting.vue'),
        meta: {
            title: 'Создание Вакансии - Палитра вакансий'
        }
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import('./pages/SignUp.vue'),
        meta: {
            title: 'Регистрация - Палитра вакансий'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/SignIn.vue'),
        meta: {
            title: 'Вход - Палитра вакансий'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('authToken')
    if(to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated){
        next({ 
            name: 'Login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    } 
})

router.beforeEach((to, from, next) => {
    if(to.meta.title){
        document.title = to.meta.title
    } else {
        document.title = 'Палитра вакансий'
    }
    next()
})

const pinia = createPinia()

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.mount('#app')
