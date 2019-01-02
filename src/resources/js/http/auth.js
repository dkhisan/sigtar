class Auth {
    constructor() {
        this.token =            window.localStorage.getItem('token') || null
        this.user  = JSON.parse(window.localStorage.getItem('user')) || null

        if (this.token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        }
    }

    login(token, user) {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('user', JSON.stringify(user))

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

        this.token =            token
        this.user  = JSON.parse(user)
    }

    logout() {
        api.call('post', '/api/users/logout')

        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')

        this.token = null
        this.user  = null

        axios.defaults.headers.common['Authorization'] = null
    }

    verify() {
        api.call('get', '/api/users/get')
            .then(res => {
                this.user = res.data.user
            })
    }

    isAuthenticated() {
        return !! this.token
    }
}

export default Auth