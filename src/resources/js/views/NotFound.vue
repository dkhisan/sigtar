<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="card-title">404 NOT FOUND</h5>
                        <p class="card-text text-justify">
                            A página <code>{{ this.$route.path }}</code> não foi encontrada, verifique e tente novamente :(
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>