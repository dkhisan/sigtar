<template>
    <nav class="navbar navbar-expand justify-content-between fixed-top navbar-dark bg-primary shadow">
        <span class="navbar-brand">SysTask</span>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'tasks'}" class="nav-link">Tasks</router-link>
            </li>
        </ul>
        <div class="dropdown dropleft">
            <a class="nav-link" href="javascript:;" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="fas fa-cog navbar-brand"></span>
            </a>
            <div class="dropdown-menu shadow" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="./settings.html">Settings</a>
                <a class="dropdown-item" href="./login.html">Log out</a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>