
require('./bootstrap');
require('bootstrap-material-design');
require('./plugin/material-dashboard.min.js');

import PerfectScrollbarPlugin from "vue2-perfect-scrollbar";
require('vue2-perfect-scrollbar/src/style.css');


window.Vue = require('vue');

import router from "./router/router.js";

Vue.use(PerfectScrollbarPlugin);



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



const app = new Vue({
    el: '#app',
    router,
});
