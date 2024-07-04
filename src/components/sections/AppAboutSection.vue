<template>
    <section id="about" class="about-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-auto">
                    <h2 class="section-title">{{ aboutContent.title}}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card card-custom">
                        <div class="row g-0">
                            <div class="col-lg-3 text-center">
                                <img src="../../../public/foto.jpg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-lg-9 py-4 py-lg-0 px-0 px-lg-4">
                                <div class="card-body">
                                    <h3 class="card-title">{{ aboutContent.card.name }}</h3>
                                    <h5 class="card-title mb-4">{{ aboutContent.card.profession }}</h5>
                                    <div class="card-text mb-4">
                                        <p style="text-indent: 20px;">
                                            {{ aboutContent.card.p1 }}
                                        </p>

                                        <p style="text-indent: 20px;">
                                            {{ aboutContent.card.p2 }}
                                        </p>

                                        <p style="text-indent: 20px;">
                                            {{ aboutContent.card.p3 }}
                                        </p>
                                    </div>
                                    <div class="btn-bar d-flex gap-3 align-items-center">
                                        <a class="button button-trasparent download-button me-auto"
                                            href="curriculum.pdf" download="curriculum.pdf">
                                            {{ aboutContent.card.btnDownloadCv }}
                                        </a>
                                        <a class="icon-link" href="https://github.com/AnatoliyZakhryapin">
                                            <font-awesome-icon :icon="['fab', 'github']" />
                                        </a>
                                        <a class="icon-link" href="https://www.linkedin.com/in/anatoliy-zakhryapin/">
                                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                                        </a>
                                        <a class="icon-link" href="mailto:anatoliy.zakhryapin@gmail.com">
                                            <font-awesome-icon :icon="['fas', 'envelope']" />
                                        </a>
                                        <a class="icon-link" href="https://telegram.me/AnatoliyZakhryapin">
                                            <font-awesome-icon :icon="['fab', 'telegram']" />
                                        </a>
                                        <a class="icon-link" href="https://m.me/anatoliy.zakhryapin">
                                            <font-awesome-icon :icon="['fab', 'facebook']" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import WorkInProgress from '../sections/AppWorkInProgress.vue'
import { store } from '../../store.js';

export default {
    computed: {
        aboutContent() {
            return store.sectionsTextContent[store.currentLanguage].about;
        }
    },
    components: {
        WorkInProgress,
    },
}
</script>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;

section {

    & .card-custom {
        background-color: transparent;
        color: $color_06;
        border: none;

        & img {
            width: 50%;
        }

        & h3.card-title {
            font-weight: bold;
        }

        & h5.card-title {
            color: $color_22;
            font-weight: 700;
        }

        .dark & h5.card-title {
            color: $color_21;
        }
    }
}
</style>