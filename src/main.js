import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({mode: 'history', routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
