<template>
    <nav class="navbar navbar-expand justify-content-between fixed-top navbar-dark bg-primary shadow">
        <span class="navbar-brand">SIGTAR</span>
        <ul class="navbar-nav" v-if="user.authenticated">
            <li class="nav-item">
                <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'tasks.index'}" class="nav-link">Tarefas</router-link>
            </li>
        </ul>
        <div class="dropdown dropleft" v-if="user.authenticated">
            <a class="nav-link" href="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="fas fa-cog navbar-brand"></span>
            </a>
            <div class="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">Settings</a>
                <a class="dropdown-item" @click.prevent="logout">Logout</a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    authenticated: false
                }
            }
        },
        created: function () {
            this.user.authenticated = auth.isAuthenticated()
        },
        methods: {
            logout() {
                auth.logout()
                this.user.authenticated = auth.isAuthenticated()
                this.$router.push('/login')
            }
        }
    }
</script>