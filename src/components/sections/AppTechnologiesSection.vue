<template>
    <section id="technologies" class="technologies-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-auto">
                    <a class="link" href="https://my-minesweeper-js.netlify.app/"> Try Game</a>
                    <WorkInProgress/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import WorkInProgress from '../sections/AppWorkInProgress.vue'

export default {
    components: {
        WorkInProgress,
    }
}
</script>

<style lang="scss" scoped>


</style>