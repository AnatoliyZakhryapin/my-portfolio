import { reactive } from 'vue';

export const store = reactive({
    isDarkThemeColor: false,
    currentLanguage: 'en',
    navMenuLinks: {
        en: {
            home: 'Home',
            about: 'About',
            portfolio: 'Portfolio',
            technologies: 'Technologies',
            contact: 'Contact',
        },
        it: {
            home: 'Home',
            about: 'Chi sono',
            portfolio: 'Portfolio',
            technologies: 'Tecnologie',
            contact: 'Contatto',
        },
    },
    languageLinks: {
        en: {
            en: 'English',
            it: 'Italian',
        },
        it: {
            en: 'Inglese',
            it: 'Italiano',
        },
    },
    sectionsTextContent:{
        en: {
            home: {
                typeText: {
                    textPart1: "I'm",
                    textPart2: "Anatoliy Zakhryapin",
                    textPart3: "Jr. Full Stack Developer"
                }
            }
        },
        it: {
            home: {
                typeText: {
                    textPart1: "Sono",
                    textPart2: "Anatoliy Zakhryapin",
                    textPart3: "Sviluppatore Full Stack"
                }
            }
        },
    }
});