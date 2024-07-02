<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppWorkInProgress from './components/sections/AppWorkInProgress.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppWorkInProgress
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
