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
  <a class="link" href="https://my-minesweeper-js.netlify.app/"> Try Game</a>
  <AppWorkInProgress/>
</template>

<style lang="scss">
  @use './style/general.scss' as *;

  .link {
    position: fixed;
    z-index: 99;
    color: rgb(75, 75, 75);
    top: 10%;
    left: 80%;

    padding: 12px 20px;
    background: none;

    border: 2px solid rgb(75, 75, 75);
    border-radius: 99px;


    cursor: pointer;
    transition: transform 0.2s ease;
    font-size: 26px;
    font-weight: 700;

    -webkit-box-shadow: 0px 0px 15px 8px rgb(75, 75, 75);
    -moz-box-shadow: 0px 0px 15px 8px rgb(75, 75, 75);
    box-shadow: 0px 0px 15px 8px rgb(75, 75, 75);

    &:hover {
      transform: scale(1.2);
    }

    animation: blink 1s infinite;
  }

@keyframes blink {
    0% {}

    50% {
        color: rgb(58, 216, 58);
        box-shadow: 0px 0px 15px 8px rgb(58, 216, 58);
    }

    100% {}
}
</style>
