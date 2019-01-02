<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card shadow mb-3">
                    <div class="card-header">
                        CRIANDO UMA NOVA TAREFA
                    </div>
                    <form @submit.prevent="submit">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="alert alert-success" v-if="response.success">{{ response.message }}</div>
                                    <div class="alert alert-danger" v-for="(error, idx) in errors" :key="idx">
                                        <span v-for="(err, idx) in error" :key="idx">{{ err }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Nome</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <span class="fas fa-file-alt"></span>
                                                </div>
                                            </div>
                                            <input type="text" class="form-control" name="name" id="name" required
                                                   v-bind:class="{ 'is-invalid': errors.name }" v-model="task.name">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="description">Descrição</label>
                                        <textarea class="form-control" name="description" id="description" rows="4" required
                                                  v-bind:class="{ 'is-invalid': errors.description }" v-model="task.description"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="deadline">Data limite</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <span class="fas fa-calendar-alt"></span>
                                                </div>
                                            </div>
                                            <input type="datetime-local" class="form-control" name="deadline" id="deadline" required
                                                   v-bind:class="{ 'is-invalid': errors.deadline }" v-model="task.deadline">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="priority">Prioridade</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">
                                                    <span class="fas fa-exclamation-triangle"></span>
                                                </div>
                                            </div>
                                            <select name="priority" id="priority" class="form-control" required
                                                    v-bind:class="{ 'is-invalid': errors.priority }" v-model="task.priority">
                                                <option value="low">Baixa</option>
                                                <option value="medium">Média</option>
                                                <option value="high">Alta</option>
                                                <option value="very_high">Muito Alta</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row justify-content-center">
                                <button type="submit" class="btn btn-primary" style="min-width: 100px">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                response: {
                    success: false,
                    message: ''
                },
                errors: {},
                task: {}
            }
        },

        methods: {
            submit() {
                /*
                 * fix datetime to sql format
                 */
                let deadlinefixed = this.task.deadline.replace('T', ' ').concat(':00')
                this.task.deadline = deadlinefixed

                let user = JSON.parse(window.localStorage.getItem('user'))

                this.task.user_id = user.id

                this.response.success = false
                this.errors = {}

                axios.post('/api/tasks/create', this.task)
                    .then(res => {
                        if (res.status === 201) {
                            this.response.success = true
                            this.response.message = res.statusText
                        }
                        this.task = {}
                    })
                    .catch(err => {
                        if (err.response) {
                            this.errors = err.response.data.errors
                        }
                        else if (err.request) {
                            this.errors = err.request.data.errors
                        }
                    })
            }
        }
    }
</script>