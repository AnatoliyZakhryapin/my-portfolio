<template>
    <main :class="store.isDarkThemeColor ? 'dark' : 'white'">
        <AppHomeSection />
        <AppAboutSection />
        <AppPortfolioSection />
        <AppTechnologiesSection />
        <AppContactSection />
    </main>
</template>

<script>

import AppAboutSection from './sections/AppAboutSection.vue';
import AppContactSection from './sections/AppContactSection.vue';
import AppHomeSection from './sections/AppHomeSection.vue';
import AppPortfolioSection from './sections/AppPortfolioSection.vue';
import AppTechnologiesSection from './sections/AppTechnologiesSection.vue';
import {store} from '../store.js';

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppHomeSection,
        AppAboutSection,
        AppPortfolioSection,
        AppTechnologiesSection,
        AppContactSection
    }
}
</script>

<style lang="scss" scoped></style>