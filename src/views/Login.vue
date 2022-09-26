<template>
    <div class="container">
        <h2>Login</h2>
        <p class="alert alert-danger" v-if="msgErro">{{msgErro}}</p>
        <form @submit.prevent="submit()">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input id="email" type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="password">Senha</label>
                <input id="password" type="password" class="form-control" v-model="usuario.senha">
            </div>
            <div class="row">
                <div class="col-2">
                    <loading-button :sending="sending" class_btn="primary">
                        Login
                    </loading-button>
                </div>
                <div class="col-4">
                    <router-link :to="{name: 'novo.usuario'}">Ainda não é registrado? Cadastre-se</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import BotaoCarregando from '../components/Shared/BotaoCarregando.vue';
export default {
    data() {
        return {
            usuario: {
                email: '',
                senha: '',
            },
            msgErro: null,
            sending: false,
        }
    },
    components: {
        'loading-button': BotaoCarregando
    },
    methods: {
        submit() {
            this.sending = true;
            this.$store.dispatch('efetuarLogin', this.usuario)
                .then(res => {
                    // this.$router.push({ name: 'gerentes' })
                    this.sending = false;
                }).catch(err => {
                    console.log(err)
                    if (err.request.status == 401) {
                        this.msgErro = 'Login ou senha inválido(s)'
                    } else {
                        this.msgErro = ' Ops :( ! Algo deu errado. (' + err.message + ')'
                    }
                    this.sending = false;
                })
        },
    },
}
</script>