import { createRouter, createWebHistory} from "vue-router";

import MainSite from '../components/MainSite.vue'
import tasckList from '../components/tasck-list.vue'

const routes = [
    {
        path: '/tasck-manager/',
        name: "home",
        component: MainSite,
    },
    {
        path: '/tasck-manager/tasck-list',
        name: "tasck-list",
        component: tasckList,
    },
    {
        path: "/tasck-manager/*",
        name: "404",
        alias: '/'
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;