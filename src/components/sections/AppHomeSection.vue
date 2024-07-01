<template>
    <section id="home" class="home-section parallax">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-auto">
                    <TypingEffect 
                        :textPart1=typeText.textPart1
                        :textPart2=typeText.textPart2
                        :textPart3=typeText.textPart3 
                    />
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import TypingEffect from '../AppTypingEffect.vue';
import { store } from '../../store';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        TypingEffect
    },
    computed: {
        typeText() {
            return store.sectionsTextContent[store.currentLanguage].home.typeText;
        }
    },
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