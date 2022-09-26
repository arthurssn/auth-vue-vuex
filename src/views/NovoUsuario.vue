<template>
    <div class="container">
        <h2>Novo Usuário</h2>
        <form @submit.prevent="submit()">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input id="nome" type="text" class="form-control" v-model="usuario.nome">
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input id="email" type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input id="senha" type="password" class="form-control" v-model="usuario.senha">
            </div>
            <button class="btn btn-primary" type="submit">Salvar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuario: {
                nome: '',
                email: '',
                senha: '',
            }
        }
    },
    methods: {
        submit() {
            this.$http.post('/auth/register', this.usuario)
                .then(response => {
                    this.$store.dispatch('efetuarLogin', this.usuario)
                    console.log(response);
                }).catch(err => {
                    console.log(err)
                })
        }
    },
}
</script>