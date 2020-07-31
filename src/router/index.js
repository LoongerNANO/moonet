import Vue from 'vue';
import ViewUI from "view-design";
import Util from '../util/util';
import VueRouter from 'vue-router';
import { routers, appRouter, otherRouter } from './router';

Vue.use(VueRouter);
// 注册路由
export const router = new VueRouter({routes:routers});

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    Util.title(to.meta.title);
    if (to.path === '/') {
        next({ path: '/login'});
    } 
    next();
    // Util.toDefaultPage([...appRouter], to.name, router, next);
});

router.afterEach((to) => {
    ViewUI.LoadingBar.finish();
    window.scrollTo(0, 0);
});