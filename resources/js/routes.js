import WelcomePage from './components/WelcomePage.vue'
import Create from './components/Create.vue'
import Edit from './components/Edit.vue'

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
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: Edit,
        }
    ]
}