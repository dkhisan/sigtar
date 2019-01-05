class Auth {
    constructor() {
        this.token  =            window.localStorage.getItem('token')  || null
        this.user_  = JSON.parse(window.localStorage.getItem('user'))  || null
        this.logged =            window.localStorage.getItem('logged') || false

        if (this.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        }
    }

    login(auth) {
        window.localStorage.setItem('token', auth.token)
        window.localStorage.setItem('user' , JSON.stringify(auth.user))
        window.localStorage.setItem('logged', true)

        axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`

        this.token  = auth.token
        this.user_  = auth.user
        this.logged = true
    }

    logout() {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('logged')

        axios.defaults.headers.common['Authorization'] = null

        this.token  = null
        this.user_  = null
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
}

export default Auth