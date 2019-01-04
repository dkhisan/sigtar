<template>
    <nav class="navbar navbar-expand justify-content-between fixed-top navbar-dark bg-primary shadow">
        <span class="navbar-brand">SIGTAR</span>
        <ul class="navbar-nav" v-if="user.logged">
            <li class="nav-item">
                <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'tasks.index'}" class="nav-link">Tarefas</router-link>
            </li>
        </ul>
        <div class="dropdown dropleft" v-if="user.logged">
            <a class="nav-link" href="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="fas fa-cog navbar-brand"></span>
            </a>
            <div class="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">Settings</a>
                <a class="dropdown-item" @click.prevent="logout">Desconectar</a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    logged: false
                }
            }
        },
        mounted() {
            this.user.logged = _auth.isAuthenticated()
        },
        computed: {
            isLogged() {
                return _auth.isAuthenticated()
            }
        },
        watch: {
            isLogged() {
                console.log('logged change')
            }
        },
        methods: {
            logout() {
                _api.call('post', '/api/users/logout')
                    .then(res => {
                        _auth.logout()

                        this.user.logged = _auth.isAuthenticated()
                        this.$router.replace('/login')
                    })
            }
        }
    }
</script>