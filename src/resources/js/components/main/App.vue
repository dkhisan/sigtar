<template>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<style>
    body {
        font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight:400;

        /* fix for navbar */
        padding-top: 5rem;

        background-color: #f2f2f2;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .2s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>

<script>
export default {}
</script>
