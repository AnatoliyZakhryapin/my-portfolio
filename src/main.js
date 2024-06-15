import { createApp } from 'vue'

import * as bootstrap from 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

import { 
	faTableCellsLarge as fasTableCellsLarge,
    faTableCells as fasTableCells,
    faFilter as fasFilter,
} from '@fortawesome/free-solid-svg-icons'

import { 
	faSquare as farSquare,
} from '@fortawesome/free-regular-svg-icons'

library.add(
    fasTableCellsLarge,
    fasTableCells,
    farSquare,
    fasFilter
	)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')