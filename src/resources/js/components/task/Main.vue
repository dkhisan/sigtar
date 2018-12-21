<template>
    <router-view></router-view>
</template>

<script>
import tasks from './Tasks'

export default {
    name: 'Main',
    components: {
        tasks
    }
}
</script>

