import router from './http/router'
import Auth from './http/auth'
import API from './http/api'

require('./bootstrap');

window.Vue = require('vue');
window.api = new API();
window.auth = new Auth();

Vue.component('navbar', require('./components/main/Navbar').default);

const app = new Vue({
    el: '#app',
    router
});
