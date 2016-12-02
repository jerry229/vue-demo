import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'            //App.vue组件
import router from './router'          //router.js


import './assets/less/main.less'       //调用main.less样式表

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

(function(win, doc){
    let docEle = doc.documentElement,
        w = docEle.clientWidth;
    w && (docEle.style.fontSize = 10 * (w/375) + 'px');
}(window, document))

const app = new Vue({                       //创建Vue实例并且挂载到#app标签上
      router: new VueRouter(router),           //创建路由实例
      render: h => h(App)
}).$mount('#app')
