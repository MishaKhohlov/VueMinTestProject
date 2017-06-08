import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import indexPage from './indexPage';
import {anotherPage, anotherPageInclude} from './anotherPage';

const routes = [
    {path: '/', component: indexPage},
    {
        path: '/bar/:id',
        component: anotherPage,
        children: [
            {
                path: 'profile',
                component: anotherPageInclude
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
