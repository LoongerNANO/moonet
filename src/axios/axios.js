/**
 *   axios封装
 * 
 */
import axios from 'axios'
import Cookies from 'js-cookie';

// axios 配置 
axios.defaults.timeout = 50000;

// 请求拦截器
axios.interceptors.request.use(config => {
    // 拦截 - Todo
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据 - Todo
    //对错误代码做处理
    return response;
}, error => {
    // for debug
    console.log('err' + error)
    return Promise.reject(error);
});


export default {
    get(url, params) { //get请求
        return new Promise((resolve, reject) => {
            axios.get(url, params).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        })
    },
    post(url, params) {//post请求
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    patch(url, params) {//patch请求
        return new Promise((resolve, reject) => {
            axios.patch(url, params).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    put(url, params) {//put请求
        return new Promise((resolve, reject) => {
            axios.put(url, params).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    delete(url, params) {//delete请求
        return new Promise((resolve, reject) => {
            axios.delete(url, params).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    head(url, params) {//head请求
        return new Promise((resolve, reject) => {
            axios.head(url, params).then(response => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            })
        })
    }
};

