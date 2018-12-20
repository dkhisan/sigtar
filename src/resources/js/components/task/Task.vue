<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-8 mb-3">
                <div class="card shadow" v-if="response.success">
                    <div class="card-header">
                        {{ task_.name }}
                        <span class="badge badge-done float-right"
                            v-if="task_.finished">FINISHED</span>
                        <span class="badge badge-warning float-right"
                            v-else>NOT FINISHED</span>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <p class="h6">Description</p>
                                <div class="section-comment">
                                    <p class="text-justify">{{ task_.description }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p>Deadline<span class="font-weight-bold float-right">{{ task_.deadline }}</span></p>
                            </div>
                            <div class="col-6">
                                <p>Priority<span class="font-weight-bold float-right">{{ task_.priority }}</span></p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <p>Created at<span class="font-weight-bold float-right">{{ task_.created_at }}</span></p>
                            </div>
                            <div class="col-6">
                                <p>Updated at<span class="font-weight-bold float-right">{{ task_.created_at }}</span></p>
                            </div>
                        </div>
                        <hr>
                        <div class="row justify-content-center task-action">
                            <button type="button" class="btn btn-outline-primary" @click="showModal">Edit</button>
                            <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#remove-task">Remove</button>
                        </div>
                    </div>
                </div>
                <div class="card shadow" v-else>
                    <div class="card-body">{{ response.error }}</div>
                </div>
            </div>
        </div>
        <div v-if="isModalActive">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div class="modal-content">
                                <form @submit.prevent="submit">
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-8">
                                                <div class="alert alert-success" v-if="response.message">{{ response.message }}</div>
                                                <div class="alert alert-danger" v-for="error in errors">
                                                    <span v-for="err in error">{{ err }}</span>
                                                </div>
                                                <div class="form-group">
                                                    <label for="name">Name</label>
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
                                            <div class="col-4">
                                                <div class="form-group">
                                                    <label for="f-yes">Finished</label>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="finished" id="f-yes" value="1">
                                                        <label class="form-check-label" for="f-yes">Yes</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="finished" id="f-no" value="0">
                                                        <label class="form-check-label" for="f-no">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="description">Description</label>
                                                    <textarea class="form-control" name="description" id="description" rows="4" required
                                                              v-bind:class="{ 'is-invalid': errors.description }" v-model="task_.description"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="deadline">Deadline</label>
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
                                                    <label for="priority">Priority</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <span class="fas fa-exclamation-triangle"></span>
                                                            </div>
                                                        </div>
                                                        <select name="priority" id="priority" class="form-control" required
                                                                v-bind:class="{ 'is-invalid': errors.priority }" v-model="task_.priority">
                                                            <option value="low">Low</option>
                                                            <option value="medium">Medium</option>
                                                            <option value="high">High</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-primary w-50" @click="closeModal">Save</button>
                                        <button type="button" class="btn btn-secondary w-50" @click="closeModal">Close</button>
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
        name: 'Task',
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
                isModalActive: false
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

                axios.get(`/api/tasks/${task}`)
                    .then(res => {
                        if (res.status === 200) {
                            this.task_ = res.data
                            this.response.success = true
                        }
                    })
                    .catch(err => {
                        if (err.response) {
                            this.response.status = err.response.status
                            this.response.error = err.response.data.error
                        }
                        else if (err.request) {
                            this.request.status = err.request.status
                            this.response.error = err.request.data.error
                        }
                        else {
                            console.error(err.message)
                        }
                    })
            },
            showModal() {
                this.isModalActive = true
            },
            closeModal() {
                this.isModalActive = false
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