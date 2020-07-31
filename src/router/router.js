/*!
 * Javascript Library - router conf 
 * loonger_smart@hotmail.com - v1.0.0 (2019-08-07)
 * @1 - 不作为根组件的独立的子页面 | 
 * @2 - 作为根组件独立的子页面 |
 * @3 - 依赖根组件菜单显示的子页面 |
 * ~
 */


// export const otherRouter = {


// }

// export const appRouter = [
// ]

export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'MOONETS LOGIN'
    },
    component: () => import('@/views/login.vue')
};

export const mainRouter = {
    path: '/main',
    name: 'main',
    meta: {
        title: 'MOONETS MAIN'
    },
    component: () => import('@/views/main.vue')
};


export const routers = [
    loginRouter,
    mainRouter,
    // otherRouter,
    // ...appRouter
];