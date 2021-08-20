import WelcomePage from './components/WelcomePage.vue'
import Create from './components/Create.vue'

export default {
    mode: 'history',
    base: '/',
    fallback: true,
    routes: [
        {
            path: '/',
            component: WelcomePage,
        },
        {
            path: '/create',
            component: Create,
        }
    ]
}