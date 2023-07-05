import { createRouter, createWebHistory} from "vue-router";

import MainSite from '../components/MainSite.vue'
import tasckList from '../components/tasck-list.vue'

const routes = [
    {
        path: '/',
        name: "home",
        component: MainSite,
        alias: '/*'
    },
    {
        path: '/tasck-list',
        name: "tasck-list",
        component: tasckList,
        children: [
           /* {
                path: 'doct24',
                name: "WorkDoct24",
                component: WorkDoct24,
            },*/
    ],
    },
    {
        path: "/*",
        name: "404",
        alias: '/'
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;