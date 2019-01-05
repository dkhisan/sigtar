<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-sm-6 col-lg-4">
                <div class="card shadow">
                    <form @submit.prevent="validate">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="alert alert-info" v-if="message_">
                                        <span>{{ message_ }}</span>
                                    </div>
                                    <div class="alert alert-danger" v-for="(error, idx) in errors" :key="idx">
                                        <span v-for="(err, idx) in error" :key="idx">{{ err }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="username">Usuário</label>
                                        <input type="text" class="form-control" name="username" id="username" required :class="{ 'is-invalid': errors.username }" v-model="user.username">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Senha</label>
                                        <input type="password" maxlength="20" class="form-control" name="password" id="password" required :class="{ 'is-invalid': errors.password }" v-model="user.password">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary btn-block">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: {
            message: String
        },
        data() {
            return {
                uname:  255,
                plength: 20,
                user: {
                    username: '',
                    password: ''
                },
                errors:   '',
                message_: ''
            }
        },
        created() {
            if (this.message) {
                this.message_ = this.message
            }
        },
        methods: {
            validate() {
                this.errors = {}

                if (this.user) {
                    if (this.user.username.length === 0 || '') {
                        this.errors.username = ['O nome de usuário deve ser preenchido!']
                    }
                    if (this.user.username.length > this.uname) {
                        this.errors.username = [`O nome de usuário não pode ter mais que ${this.uname} caractéres`]
                    }
                    if (this.user.password.length === 0 || '') {
                        this.errors.username = ['A senha deve ser preenchida!']
                    }
                    if (this.user.password.length > this.plength) {
                        this.errors.password = [`A senha deve ter no máximo ${this.plength} caractéres`]
                    }
                }

                if (_.isEmpty(this.errors)) {
                    this.login()
                }
            },
            login() {
                _api.call('post', '/api/login', this.user)
                    .then(res => {
                        _auth.login({ 'token': res.data.token, 'user': res.data.user })
                        this.newSession({
                            'session': { 'token': res.data.token, 'loggedIn': true },
                            'user'   : res.data.user
                        }).then(() => {
                            this.$router.replace(this.$route.query.redirect || '/')
                        })
                    })
                    .catch(err => {
                        if (err.response) {
                            this.errors = err.response.data.errors
                        }
                        else if (err.request) {
                            this.errors = err.request.data.errors
                        }
                    })
            },
            ...mapActions([
                'newSession'
            ])
        }
    }
</script>