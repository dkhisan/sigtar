import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {
            id: 0,
            name: '',
            username: '',
            email: '',
            remember_token: '',
            created_at: '',
            updated_at: ''
        },
        session: {
            token: '',
            loggedIn: false
        }
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        },
        SET_SESSION: (state, session) => {
            state.session = session
        },
        LOG_OUT: (state) => {
            state.session.token     = '',
            state.session.loggedIn  = false

            state.user.id       = 0;
            state.user.name     = '',
            state.user.username = '',
            state.user.email    = ''
            state.user.remember_token = '',
            state.user.created_at     = '',
            state.user.updated_at     = ''
        },
        INITIALIZE: (state) => {
            if (_auth.isAuthenticated()) {
                const user    = JSON.parse(window.localStorage.getItem('user'))
                const session = {
                    token:    window.localStorage.getItem('token'),
                    loggedIn: true
                }

                state.session = session
                state.user    = user
            }
        }
    },
    getters: {
        user:    store => store.user,
        session: store => store.session
    },
    actions: {
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('LOG_OUT')
                    resolve()
                }, 1000);
            })
        },
        newSession({ commit }, session) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('SET_SESSION', session.session)
                    commit('SET_USER', session.user)
                    resolve()
                }, 1000)
            })
        },
        newUser({ commit }, user) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('SET_USER', user)
                    resolve()
                }, 1000)
            })
        }
    }
})

export default store