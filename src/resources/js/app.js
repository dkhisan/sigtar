import router from './http/router'
import Auth from './http/auth'
import API from './http/api'

require('./bootstrap');

window.Vue = require('vue');
window._api = API;
window._auth = new Auth();

Vue.component('navbar', require('./components/main/Navbar').default);

const app = new Vue({
    el: '#app',
    router
});
