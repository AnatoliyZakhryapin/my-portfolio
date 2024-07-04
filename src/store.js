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
    sectionsTextContent: {
        en: {
            home: {
                typeText: {
                    textPart1: "I'm",
                    textPart2: "Anatoliy Zakhryapin",
                    textPart3: "Jr. Full Stack Developer"
                }
            },
            about: {
                title: "About",
                card: {
                    name: "Anatoliy Zakhryapin",
                    profession: "Junior Full Stack Developer",
                    p1: "I am a Junior Full Stack Developer with experience in developing complex web applications using .NET, Laravel, and Vue.js frameworks. I handle both front-end and back-end tasks, with solid skills in MVC architecture and creating RESTful APIs, documented through Swagger.",
                    p2: "For example, in the back-end, I can develop the entire lifecycle of an application. This includes creating database migrations and seeders, managing API controllers, and implementing features such as user authentication, role, and permission management. Additionally, I am skilled in building complex queries to retrieve data based on advanced user-set filters, ensuring efficiency and security in server interaction processes.",
                    p3: "On the client side, I develop responsive pages with Vue.js to ensure the best user experience, creating modern and intuitive interfaces that enhance usability and customer satisfaction.",
                    btnDownloadCv: 'Download CV'
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
            },
            about: {
                title: "Chi sono",
                card: {
                    name: "Anatoliy Zakhryapin",
                    profession: "Sviluppatore Full Stack Junior",
                    p1: "Sono un Jr. Full Stack Developer con esperienza nello sviluppo di applicazioni web complesse utilizzando i framework .NET, Laravel e Vue.js. Mi occupo sia di front- end che di back- end, con solide competenze nell'architettura MVC e nella creazione di API RESTful, documentate tramite Swagger.",
                    p2: "Per esempio, nel back-end, posso sviluppare l'intero ciclo di vita di un'applicazione. Questo include la creazione di migrazioni e seeder per il database, la gestione dei controller API e la realizzazione di funzionalità come l'autenticazione degli utenti, la gestione dei ruoli e delle autorizzazioni. Inoltre, sono abile nel costruire query complesse per recuperare dati in base a filtri avanzati impostati dall'utente, garantendo efficienza e sicurezza nei processi di interazione con il server.",
                    p3: "Sul lato client, sviluppo pagine reattive con Vue.js per garantire la migliore esperienza utente, creando interfacce moderne e intuitive che migliorano l'usabilità e la soddisfazione del cliente.",
                    btnDownloadCv: 'Scarica CV'
                }
            }
        },
    }
});