import { createApp } from 'vue'

import * as bootstrap from 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

import { 
	faHouse as fasHouse,
    faBriefcase as fasBriefCase,
    faCode as fasCode,
    faBars as fasBars,
    faEnvelope as fasEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import { 
	faAddressCard as farAddressCard,
    faAddressBook as farAddressBook,
} from '@fortawesome/free-regular-svg-icons'

import { 
	faGithub as fabGithub,
    faLinkedin as fabLinkedin,
    faTelegram as fabTelegram,
    faFacebook as fabFacebook,
} from '@fortawesome/free-brands-svg-icons'

library.add(
    fasHouse,
    farAddressCard,
    fasBriefCase,
    fasCode,
    farAddressBook,
    fasBars,
    fabGithub,
    fabLinkedin,
    fasEnvelope,
    fabTelegram,
    fabFacebook
	)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')