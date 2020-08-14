//npm 下载的包
import Vue from 'vue'
import App from './App.vue'
import './test.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//声明组件
import Home from './components/home/Home.vue'
import Course from './components/Course/Course.vue'

//创建路由对象
const router = new VueRouter({
    //配置路由信息
    routes: [
        {path: '/', redirect: "/home"},
        {path: '/home', name: 'Home', component: Home},
        {path: '/course', name:'Course', component: Course},
    ]
});


new Vue({
    el: "#app",
    router,
    data() {
        return {}
    },
    render: c => c(App)
    // template: `<App/>`,
    // components: {App}

});