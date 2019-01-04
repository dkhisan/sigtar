<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-8 mb-3">
                <div class="card shadow" v-if="response.success">
                    <div class="card-header">
                        {{ task_.name }}
                        <span class="badge badge-success float-right"
                            v-if="task_.finished == '1'">CONCLUíDA</span>
                        <span class="badge badge-secondary float-right"
                            v-else>NãO CONCLUíDA</span>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <p class="h6">Descrição</p>
                                <div class="section-comment">
                                    <p class="text-justify">{{ task_.description }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p>Data limite<span class="font-weight-bold float-right">{{ task_.deadline }}</span></p>
                            </div>
                            <div class="col-6">
                                <p>Prioridade<span class="font-weight-bold float-right">{{ task_.priority }}</span></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p>Cadastrada em<span class="font-weight-bold float-right">{{ task_.created_at }}</span></p>
                            </div>
                            <div class="col-6">
                                <p>Atualizada em<span class="font-weight-bold float-right">{{ task_.created_at }}</span></p>
                            </div>
                        </div>
                        <hr>
                        <div class="row justify-content-center task-action">
                            <button type="button" class="btn btn-outline-primary" @click="showUpdateModal">Editar</button>
                            <button type="button" class="btn btn-outline-danger" @click="showDeleteModal">Apagar</button>
                        </div>
                    </div>
                </div>
                <div class="card shadow" v-else-if="response.message">
                    <div class="card-body">
                        <div class="alert alert-success">
                            {{ response.message }}
                        </div>
                    </div>
                </div>
                <div class="card shadow" v-else>
                    <div class="card-body">{{ response.error }}</div>
                </div>
            </div>
        </div>
        <div v-if="isDeleteModalActive">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <form @submit.prevent="destroy">
                                    <div class="modal-body">
                                        <p>Tem certeza que quer fazer isso? (Isso não pode ser desfeito)</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-danger w-50" type="submit">Sim</button>
                                        <button class="btn btn-secondary w-50" type="button" @click="closeDeleteModal">Não</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div v-if="isUpdateModalActive">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <form @submit.prevent="submit">
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-12" v-if="response.message">
                                                <div class="alert alert-success">{{ response.message }}</div>
                                            </div>
                                            <div class="col-12" v-if="errors">
                                                <div class="alert alert-danger" v-for="(error, idx) in errors" :key="idx">
                                                    <span v-for="(err, idx) in error" :key="idx">{{ err }}</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-8 col-lg-9">
                                                <div class="form-group">
                                                    <label for="name">Nome</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <span class="fas fa-file-alt"></span>
                                                            </div>
                                                        </div>
                                                        <input type="text" class="form-control" name="name" id="name" required
                                                               v-bind:class="{ 'is-invalid': errors.name }" v-model="task_.name">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-3">
                                                <div class="form-group">
                                                    <label for="f-yes">Concluída</label>
                                                    <div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="finished" id="f-yes" value="1" v-model="task_.finished">
                                                            <label class="form-check-label" for="f-yes">Sim</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="finished" id="f-no" value="0" v-model="task_.finished">
                                                            <label class="form-check-label" for="f-no">Não</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="description">Descrição</label>
                                                    <textarea class="form-control" name="description" id="description" rows="4" required
                                                              v-bind:class="{ 'is-invalid': errors.description }" v-model="task_.description"></textarea>
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
                                                               v-bind:class="{ 'is-invalid': errors.deadline }" v-model="task_.deadline">
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
                                                                v-bind:class="{ 'is-invalid': errors.priority }" v-model="task_.priority">
                                                            <option value="low">Baixa</option>
                                                            <option value="medium">Média</option>
                                                            <option value="high">Alta</option>
                                                            <option value="very_high">Muito Alta</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-primary w-50">Gravar</button>
                                        <button type="button" class="btn btn-secondary w-50" @click="closeUpdateModal">Fechar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: String,
            task: Object
        },

        data() {
            return {
                response: {
                    status: 0,
                    error: '',
                    success: false
                },
                errors: {},
                task_: {},
                isUpdateModalActive: false,
                isDeleteModalActive: false
            }
        },

        created() {
            if (!this.task) {
                this.fetchTask(this.id)
            }
            else {
                this.task_ = this.task
                this.response.success = true
            }
        },

        methods: {
            fetchTask(task) {
                this.response.success = false
                this.response.error = ''

                _api.call('get', `/api/tasks/${task}`)
                    .then(res => {
                        if (res.status === 200) {
                            if (res.data.status !== 404) {
                                this.task_ = res.data
                                this.response.success = true
                            }
                            else {
                                this.response.error = res.data.message
                            }
                        }
                    })
                    .catch(err => {
                        if (err.response) {
                            this.response.status = err.response.data.status
                            this.response.error = err.response.data.error
                        }
                        else if (err.request) {
                            this.request.status = err.request.data.status
                            this.response.error = err.request.data.error
                        }
                    })
            },
            showUpdateModal() {
                this.isUpdateModalActive = true
            },
            closeUpdateModal() {
                this.isUpdateModalActive = false
            },
            showDeleteModal() {
                this.isDeleteModalActive = true
            },
            closeDeleteModal() {
                this.isDeleteModalActive = false
            },
            destroy() {
                this.response.success = false
                this.errors = {}

                _api.call('delete', `/api/tasks/${this.task_.id}/remove`)
                    .then(res => {
                        if (res.status === 200) {
                            if (res.data.status === 422) {
                                this.response.error = res.data.message
                            }
                        }
                        else if (res.status === 204) {
                            this.response.success = true
                            this.response.message = res.data.message
                        }
                    })
                    .catch(err => {
                        if (err.response) {
                            this.errors = err.response.data.errors
                        }
                        else if (err.request) {
                            this.errors = err.request.data.errors
                        }
                    })
                .then(() => {
                    this.isDeleteModalActive = false
                })
            },
            submit() {
                /*
                 * fix datetime to sql format
                 */
                let deadlinefixed = this.task_.deadline.replace('T', ' ').concat(':00')
                this.task_.deadline = deadlinefixed

                /*
                 * format date for use in 'updated_at' column
                 */
                let date  = new Date()
                let datef = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

                let user = _auth.user
                this.task_.user_id = user.id
                this.task_.updated_at = datef

                this.response.success = false
                this.errors = {}

                _api.call('patch', `/api/tasks/${this.task_.id}/edit`, this.task_)
                    .then(res => {
                        if (res.status === 200) {
                            if (res.data.status !== 422) {
                                this.response.success = true
                                this.response.message = res.data.message
                            }
                            else {
                                this.response.error = res.data.message
                            }
                        }
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

<style scoped>
    .task-action > button {
        margin-left: 4px;
        margin-right: 4px;
        min-width: 120px;
    }
    .section-comment {
        background-color: #eee;
        border-radius: 8px;
        padding: 18px;
        margin-bottom: 8px;
    }
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
</style>