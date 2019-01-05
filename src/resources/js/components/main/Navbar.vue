<template>
    <nav class="navbar navbar-expand justify-content-between fixed-top navbar-dark bg-primary shadow">
        <span class="navbar-brand">SIGTAR</span>
        <ul class="navbar-nav" v-if="session.loggedIn">
            <li class="nav-item">
                <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'tasks.index'}" class="nav-link">Tarefas</router-link>
            </li>
        </ul>
        <div class="dropdown dropleft" v-if="session.loggedIn">
            <a class="nav-link" href="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="fas fa-cog navbar-brand"></span>
            </a>
            <div class="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">Settings</a>
                <a class="dropdown-item" @click.prevent="logMeOut">Desconectar</a>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'NavbarComponent',
        computed: {
            ...mapGetters([
                'session'
            ]),
        },
        methods: {
            logMeOut() {
                _api.call('post', '/api/logout')
                    .then(res => {
                        _auth.logout()
                        this.logout()
                            .then(() => {
                                this.$router.push({
                                    name: 'login',
                                    query: { redirect: this.$route.path || '/' },
                                    params: { message: res.data.message }
                                })
                            })
                    })
                    .catch(err => console.error(err))
            },
            ...mapActions([
                'logout'
            ])
        }
    }
</script>