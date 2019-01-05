<template>
    <div class="container-fluid">
        <div class="row">
            <div class="container-fluid mb-3">
                <div class="col-md-12">
                    <div class="row justify-content-center">
                        <div class="input-group input-group-sm col-sm-5 mr-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="search-prepend">
                                    <span class="fas fa-search"></span>
                                </span>
                            </div>
                            <input type="text" class="form-control shadow" aria-describedby="search-prepend">
                        </div>
                        <router-link :to="{ name: 'tasks.create' }" class="btn btn-primary btn-sm mr-2 shadow">Nova tarefa</router-link>
                        <div class="btn-toolbar">
                            <div class="btn-group shadow">
                                <button type="button" class="btn btn-primary btn-sm" @click.prevent="fetchTasks(pagination.prev_page)" :disabled="!pagination.prev_page">
                                    <span class="fas fa-angle-left"></span>
                                </button>
                                <button type="button" class="btn btn-primary btn-sm" disabled>{{ pagination.current_page }} de {{ pagination.last_page }}</button>
                                <button type="button" class="btn btn-primary btn-sm" @click.prevent="fetchTasks(pagination.next_page)" :disabled="!pagination.next_page">
                                    <span class="fas fa-angle-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="col-lg-12">
                <div class="row justify-content-center" v-if="noTasks">
                    <div class="col-lg-6 mb-3">
                        <div class="card shadow">
                            <div class="card-body">
                                <p class="card-text">Sem resultados.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 mb-3" v-for="task in tasks" v-bind:key="task.id">
                        <div class="card shadow">
                            <div class="card-body">
                                <h5 class="card-title">{{ task.name }}</h5>
                                <p class="card-text">
                                    Cadastrada em<span class="font-weight-bold float-right">{{ task.created_at }}</span><br />
                                    Concluída<span class="font-weight-bold float-right" v-if="task.finished">sim</span>
                                    <span class="font-weight-bold float-right" v-else>não</span>
                                </p>
                            </div>
                            <div class="card-footer">
                                <router-link :to="{ name: 'task.show', params: { id: task.id.toString(), task }}" class="btn btn-outline-primary btn-block shadow-sm">Detalhes</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                noTasks: false,
                tasks: [],
                task: {
                    id: '',
                    user_id: '',
                    name: '',
                    description: '',
                    deadline: '',
                    priority: '',
                    finished: '',
                    created_at: '',
                    updated_at: ''
                },
                pagination: {}
            }
        },

        created() {
            this.fetchTasks()
        },

        methods: {
            fetchTasks(page) {
                let vm = this
                page = page || '/api/tasks'
                _api.call('get', page)
                    .then(res => {
                        this.tasks = res.data.data
                        let meta = {
                            current_page: res.data.current_page,
                            last_page: res.data.last_page
                        }
                        let links = {
                            next_page: res.data.next_page_url,
                            prev_page: res.data.prev_page_url
                        }
                        this.noTasks = res.data.total === 0
                        vm.makePagination(meta, links)
                    })
                    .catch(err => console.log(err))
            },
            makePagination(meta, links) {
                let next
                let prev
                if (links.next_page !== null || undefined) {
                    let page = links.next_page.substring(links.next_page.indexOf('=') + 1, links.next_page.length)
                    next = `/api/tasks?page=${page}`
                }

                if (links.prev_page !== null || undefined) {
                    let page = links.prev_page.substring(links.prev_page.indexOf('=') + 1, links.prev_page.length)
                    prev = `/api/tasks?page=${page}`
                }

                let pagination = {
                    current_page: meta.current_page,
                    last_page: meta.last_page,
                    next_page: next || null,
                    prev_page: prev || null
                }

                this.pagination = pagination
            }
        }
    }
</script>
