<template>
  <header class="page-header py-4" :class="store.isDarkThemeColor ? 'dark' : 'white', isScrolled ? 'scrolled' : ''">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-auto">
          <themeSwitch @toggleDarkMode="changeThemeColor" />
        </div>
        <div class="col-auto d-none d-md-block">
          <ul class="nav nav-custom">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'home' }" aria-current="page" href="#home"
                @click.prevent="scrollToSection('home')">
                <span class="d-md-block d-lg-none">
                  <font-awesome-icon :icon="['fas', 'house']" />
                </span>
                <span class="d-none d-lg-block">
                  {{ navLinks.home }}
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'about' }" href="#about"
                @click.prevent="scrollToSection('about')">
                <span class="d-md-block d-lg-none">
                  <font-awesome-icon :icon="['far', 'address-card']" />
                </span>
                <span class="d-none d-lg-block">
                  {{ navLinks.about }}
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'portfolio' }" href="#portfolio"
                @click.prevent="scrollToSection('portfolio')">
                <span class="d-md-block d-lg-none">
                  <font-awesome-icon :icon="['fas', 'briefcase']" />
                </span>
                <span class="d-none d-lg-block">
                  {{ navLinks.portfolio }}
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'technologies' }" href="#technologies"
                @click.prevent="scrollToSection('technologies')">
                <span class="d-md-block d-lg-none">
                  <font-awesome-icon :icon="['fas', 'code']" />
                </span>
                <span class="d-none d-lg-block">
                  {{ navLinks.technologies }}
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeSection === 'contact' }" href="#contact"
                @click.prevent="scrollToSection('contact')">
                <span class="d-md-block d-lg-none">
                  <font-awesome-icon :icon="['far', 'address-book']" />
                </span>
                <span class="d-none d-lg-block">
                  {{ navLinks.contact }}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Offcanvas -->
        <div class="col-auto d-md-none">
          <button id="offcanvasMenu" class="btn" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>

          <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title px-4" id="offcanvasRightLabel">Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="nav nav-custom flex-column gap-4 py-3">
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: activeSection === 'home' }" aria-current="page" href="#home"
                    @click.prevent="scrollToSection('home')">
                    <span>
                      <font-awesome-icon :icon="['fas', 'house']" />
                    </span>
                    <span>
                      {{ navLinks.home }}
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: activeSection === 'about' }" href="#about"
                    @click.prevent="scrollToSection('about')">
                    <span>
                      <font-awesome-icon :icon="['far', 'address-card']" />
                    </span>
                    <span>
                      {{ navLinks.about }}
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: activeSection === 'portfolio' }" href="#portfolio"
                    @click.prevent="scrollToSection('portfolio')">
                    <span>
                      <font-awesome-icon :icon="['fas', 'briefcase']" />
                    </span>
                    <span>
                      {{ navLinks.portfolio }}
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: activeSection === 'technologies' }" href="#technologies"
                    @click.prevent="scrollToSection('technologies')">
                    <span>
                      <font-awesome-icon :icon="['fas', 'code']" />
                    </span>
                    <span>
                      {{ navLinks.technologies }}
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{ active: activeSection === 'contact' }" href="#contact"
                    @click.prevent="scrollToSection('contact')">
                    <span>
                      <font-awesome-icon :icon="['far', 'address-book']" />
                    </span>
                    <span>
                      {{ navLinks.contact }}
                    </span>
                  </a>
                </li>
              </ul>
              <div class="languageSwitch p-2">
                <languageSwitch />
              </div>
            </div>
          </div>
        </div>
        <div class="col-auto d-none d-md-block">
          <languageSwitch />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { store } from '../store.js';
import themeSwitch from './AppThemeSwitch.vue';
import languageSwitch from './AppLanguageSwitch.vue'

export default {
  data() {
    return {
      activeSection: '',
      isScrolled: false,
      store,
    };
  },
  components: {
    themeSwitch,
    languageSwitch
  },
  computed: {
    navLinks() {
      return store.navMenuLinks[store.currentLanguage];
    }
  },
  methods: {
    // Scroll to a specific section on the page
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth',
        });
      }
    },
    // Handle the scroll event to determine the active section
    onScroll() {
      const sections = ['home', 'about', 'portfolio', 'technologies', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // console.log(rect);
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            this.activeSection = section;
            break;
          }
        }
      }
      // Check if the page has been scrolled
      this.isScrolled = window.scrollY > 0;
    },
    // Change the theme color based on the dark mode status
    changeThemeColor(isDarkMode) {
      // Update the dark mode status in the store
      store.isDarkThemeColor = isDarkMode;
    },
  },
  mounted() {
    // Add scroll event listener when the component is mounted
    window.addEventListener('scroll', this.onScroll);
    // Call onScroll method to initialize active section
    this.onScroll();
  },
  beforeUnmount() {
    // Remove scroll event listener when the component is about to be unmounted
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
@use '../../src/style/partials/variables' as *;

header {
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 20px;
  z-index: 100;
  background-color: transparent;
  transition: background-color 1s;
}

header.white.scrolled {
  background-color: $color_02;
}

header.dark {
  background-color: $color_06;
  color: white;
}

.dark .nav.nav-custom a {
  color: $color_02;
}

.nav.nav-custom {
  font-size: 20px;
}

.nav.nav-custom a {
  color: $color_06;
  transition: 0.3s;
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    left: 50%;
    /* Inizia dal centro */
    background: linear-gradient(to right, transparent 0%, transparent 5%, $color_22 50%, transparent 95%, transparent 100%);
    transform: translateX(-50%);
    /* Centra l'elemento */
    transition: width 0.3s ease;
    -webkit-transition: width 0.3s ease;
    transform-origin: center;
    /* Imposta l'origine della trasformazione al centro */
  }

  &:hover::after,
  &.active::after {
    width: 100%;
    /* Espandi su entrambi i lati */
  }

  .dark &:hover::after,
  .dark &.active::after {
    background: linear-gradient(to right, transparent 0%, transparent 5%, $color_21 50%, transparent 95%, transparent 100%);
  }

  &:hover,
  &.active {
    color: $color_22;
  }

  .dark &:hover,
  .dark &.active {
    color: $color_21;
  }
}

//Offcanvas
button#offcanvasMenu {
  color: $color_06;
  font-size: 16px;
  display: flex;
  align-items: center;
  // border: 2px solid $color_06;

  & svg {
    height: 24px;
    width: 28px;
  }

  &:hover {
    color: $color_22;
    border: 1px solid $color_22;
  }
}

.dark button#offcanvasMenu {
  color: $color_02;

  &:hover {
    color: $color_21;
    border: 1px solid $color_21;
  }
}

.dark .offcanvas {
  background-color: $color_06;
  color: $color_21;

  & .offcanvas-header {
    border-bottom: 2px solid $color_05;
  }
}

.offcanvas-header {
  border-bottom: 2px solid $color_03;
}

.offcanvas .nav-item {
  display: flex;

  & a {
    display: flex;
    gap: 10px;
    position: relative;

    &::after {
      bottom: 0;
    }

    & span:first-child{
      // border: 1px solid;
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {}

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  .nav.nav-custom {
    font-size: 20px;
  }
}

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) {}
</style>