<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppWorkInProgress from './components/sections/AppWorkInProgress.vue';

export default {
    components: {
      AppHeader,
      AppMain,
      AppWorkInProgress
    }
  }
</script>

<template>
  <!-- <AppHeader/>
  <AppMain/>
  -->
  <AppWorkInProgress/>
</template>

<style lang="scss">
  @use './style/general.scss' as *;
</style>
