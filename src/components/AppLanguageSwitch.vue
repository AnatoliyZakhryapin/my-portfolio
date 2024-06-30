<template>
    <div class="language-switch dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        <img :src="currentFlagSrc" alt="Current language flag" class="flag-icon">
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <a class="dropdown-item" href="#" @click.prevent="changeLanguage('en')">
            <img :src="flags.en" alt="English flag" class="flag-icon"> 
            {{ languageLinks.en }}
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#" @click.prevent="changeLanguage('it')">
            <img :src="flags.it" alt="Italian flag" class="flag-icon"> 
            {{ languageLinks.it }}
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { store } from '../store.js';
  import enFlag from '../assets/flags/en.png';
  import itFlag from '../assets/flags/it.png';
  
  export default {
    data() {
      return {
        store,
        flags: {
          en: enFlag,
          it: itFlag,
        },
      };
    },
    computed: {
      currentFlagSrc() {
        return this.flags[store.currentLanguage];
      },
      languageLinks() {
        return store.languageLinks[store.currentLanguage];
      }
    },
    methods: {
      changeLanguage(language) {
        store.currentLanguage = language;
      },
    },
  };
  </script>

<style lang="scss" scoped>
.language-switch {
  display: inline-block;
}

.dropdown-toggle {
    background-color: transparent;
    border: none;
}

.flag-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
</style>