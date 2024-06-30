<template>
    <section id="home" class="home-section parallax">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-auto">
                    <h1>Home section</h1>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

export default {

}
</script>

<style lang="scss" scoped>

.dark .parallax {
    -webkit-filter: brightness(110%) contrast(110%) grayscale(100%);
    filter: brightness(110%) contrast(110%) grayscale(100%);
}

.parallax {
    background-image: url('../../../public/bg-1.jpg');

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>