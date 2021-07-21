import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Footer from './layouts/Footer';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: '',
                description: '',
            },
            children: [],
        },
        {
            path: '/catalog',
            name: 'itemslist',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/ItemsList.vue')
            },
            meta: {
                title: '',
                description: '',
            },
            children: [],
        },
    ]
});

export default router;