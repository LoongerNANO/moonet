/*!
 * Javascript Library - common util
 * loonger_smart@hotmail.com - v1.0.0 (2019-08-07)
 * @工具类
 * ~
 */

let util = {};

/** 组件页面文档标题 **/
util.title = function (title) {
    title = title || 'Moonets';
    window.document.title = title;
};

/** 根据命名路由找到路由对象 **/
util.getRouterObjByName = function (routers, name) {
    if (!name || !routers || !routers.length) {
        return null;
    }
    // debugger;
    let routerObj = null;
    for (let item of routers) {
        if (item.name === name) {
            return item;
        }
        routerObj = util.getRouterObjByName(item.children, name);
        if (routerObj) {
            return routerObj;
        }
    }
    return null;
};

/** 设置当前路由路径状态 **/
util.setCurrentPath = function (vm, name) {
    let temp = [];
    temp.push({ name: "origin", tittle: "首页" });
    if (name !== "origin") {
        // 获取父级路由对象
        let father = vm.$store.state.app.routers.filter(item => {
            if (item.children.length <= 1) {
                return item.children[0].name === name;
            } else {
                let i = 0;
                let childArr = item.children;
                let len = childArr.length;
                while (i < len) {
                    if (childArr[i].name === name) {
                        return true;
                    }
                    i++;
                }
                return false;
            }
        })[0];

        if (father) {
            temp.push({ title: father.title, name: father.name });
            // 排除组件满足多个子组件的当前路由对象
            if (father.children.length > 1) {
                let children = util.getRouterObjByName(vm.$store.state.app.routers, name);
                temp.push({ title: children.title, name: children.name });
            }
        }
    }
    vm.$store.commit('setCurrentPath', temp);
}

/** 更新菜单数据绑定 **/
util.updateMenulist = function (vm) {
    vm.$store.dispatch('updateMenuAction');
}

/** 路由规则解析路由名称 **/
util.routerParse = function (vm) {
    return vm.$route.fullPath.split("/")[1];
}

/** 如果在地址栏输入的是一级菜单则默认打开其第一个二级菜单的页面 **/
util.toDefaultPage = function (routers, name, route, next) {
    let len = routers.length;
    let i = 0;
    let notHandle = true;
    while (i < len) {
        if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
            route.replace({
                name: routers[i].children[0].name
            });
            notHandle = false;
            next();
            break;
        }
        i++;
    }
    if (notHandle) {
        next();
    }
};

/** 是否是一级菜单 **/
util.isTopRouter = function (routers, name) {
    let isTopRouter = false;
    for (let item of routers) {
        if (item.name === name && item.children.length >= 1) {
            isTopRouter = true;
        }
    }
    return isTopRouter
}

/** 获取一级菜单第一个二级菜单 **/
util.getFirstChildren = function (routers, name) {
    for (let item of routers) {
        if (item.name === name && item.children.length >= 1) {
            return item.children[0];
        }
    }
}

util.showThisRoute = function (itAccess, currentAccess) {
    if (typeof itAccess === 'object' && Array.isArray(itAccess)) {
        return util.oneOf(currentAccess, itAccess);
    } else {
        return itAccess === currentAccess;
    }
};

export default util;