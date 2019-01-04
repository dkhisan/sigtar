class Auth {
    constructor() {
        this.token  =            window.localStorage.getItem('token')  || null
        this.user_  = JSON.parse(window.localStorage.getItem('user'))  || null
        this.logged =            window.localStorage.getItem('logged') || false

        if (this.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        }
    }

    login(store) {
        window.localStorage.setItem('token', store.token)
        window.localStorage.setItem('user', JSON.stringify(store.user))
        window.localStorage.setItem('logged', true)

        axios.defaults.headers.common['Authorization'] = `Bearer ${store.token}`

        this.token  = store.token
        this.user_   = store.user
        this.logged = true
    }

    logout() {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('logged')

        axios.defaults.headers.common['Authorization'] = null

        this.token  = null
        this.user_   = null
        this.logged = false
    }

    /*
     * verify if user is authenticated with a query
     */
    verify() {
        _api.call('get', '/api/users/get')
            .then(res => {
                this.user_ = res.data.user
            })
    }

    /*
     * verify if user is properly authenticated with a token
     */
    isAuthenticated() {
        return this.logged && !!this.token
    }

    get userId() {
        return this.user_.id
    }

    get user() {
        return this.user_
    }
}

export default Auth