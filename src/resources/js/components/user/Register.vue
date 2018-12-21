<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-sm-6 col-lg-4">
                <div class="card shadow">
                    <form @submit.prevent="validate">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="alert alert-success" v-if="response.success">{{ response.message }}</div>
                                    <div class="alert alert-danger" v-for="(error, idx) in errors" :key="idx">
                                        <span v-for="(err, idx) in error" :key="idx">{{ err }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Nome completo</label>
                                        <input type="text" class="form-control" name="name" id="name" required v-bind:class="{ 'is-invalid': errors.name }" v-model="user.name">
                                    </div>
                                    <div class="form-group">
                                        <label for="username">Usuário</label>
                                        <input type="text" class="form-control" name="username" id="username" required v-bind:class="{ 'is-invalid': errors.username }" v-model="user.username">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Senha</label>
                                        <input type="password" maxlength="20" class="form-control" name="password" id="password" required v-bind:class="{ 'is-invalid': errors.password }" v-model="user.password">
                                    </div>
                                    <div class="form-group">
                                        <label for="r-password">Repetir senha</label>
                                        <input type="password" maxlength="20" class="form-control" name="r-password" id="r-password" required v-bind:class="{ 'is-invalid': errors.password }" v-model="password">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary btn-block">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserCreate',
    data() {
        return {
            nameLength: Number = 255,
            length: Number = 20,
            user: {},
            errors: {},
            response: {},
            password: ''
        }
    },

    methods: {
        validate() {
            this.errors = {}

            if (this.user) {
                if (this.user.name.length > this.nameLength) {
                    this.errors.name = [`O nome não pode ter mais que ${this.nameLength} caractéres`]
                }
                if (this.user.username.length > this.length) {
                    this.errors.username = [`O nome de usuário não pode ter mais que ${this.nameLength} caractéres`]
                }
                if (this.user.password !== this.password) {
                    this.errors.password = ['As senhas não coincidem']
                }
                if (this.user.password.length > this.length) {
                    this.errors.password = [`A senha deve ter no máximo ${this.length} caractéres`]
                }
            }

            if (_.isEmpty(this.errors)) {
                this.submit()
            }
        },
        submit() {
            this.response.success = false

            axios.post('/api/users/create', this.user)
                .then(res => {
                    if (res.status === 201) {
                        this.response.success = true
                        this.response.message = res.statusText
                    }
                    this.user = {}
                })
                .catch(err => {
                    if (err.response) {
                        this.errors = err.response.data.errors
                    }
                    else if (err.request) {
                        this.errors = err.request.data.errors
                    }
                    else {
                        console.log(err.message)
                    }
                })
        }
    }
}
</script>

