import router from './http/router'
import Auth from './http/auth'
import API from './http/api'
import store from './store/index'

require('./bootstrap');
require('es6-promise/auto');

window.Vue = require('vue');
window._api = API;
window._auth = new Auth();

Vue.component('navbar', require('./components/main/Navbar').default);
Vue.component('app', require('./components/main/App').default);

const app = new Vue({
    el: '#app',
    router,
    store,
    beforeCreate: function() {
        this.$store.commit('INITIALIZE')
    }
});
