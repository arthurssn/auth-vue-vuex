<template>
    <div id="app">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/Shared/Navbar.vue';
export default {
    components: {
        'nav-bar': Navbar
    }
}
</script>
