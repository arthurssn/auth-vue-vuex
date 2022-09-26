<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-bytebank">
            <router-link class="navbar-brand" :to="{name: 'home'}">ByteBank</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <is-logged @logout="logout()" v-if="userIsLogged" />
                <is-not-logged v-else />
            </div>
        </nav>
    </div>
</template>

<script>
import NavbarIsLogged from './NavbarIsLogged.vue';
import NavbarIsNotLogged from './NavbarIsNotLogged.vue';
export default {
    components: {
        'is-logged': NavbarIsLogged,
        'is-not-logged': NavbarIsNotLogged
    },
    computed: {
        userIsLogged() {
            return Boolean(this.$store.state.token)
        }
    }
}
</script>
<style>
.navbar {
    background: #27ae60;
}

.navbar-bytebank a {
    color: #fff;
}

.navbar-bytebank a:hover {
    color: #000;
}
</style>
    