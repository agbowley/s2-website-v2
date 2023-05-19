import Vue from 'vue';
import VueRouter from 'vue-router';
import Error from './components/error.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        component: Error,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
