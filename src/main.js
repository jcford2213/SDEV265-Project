import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalStore from './globalStore'

// Normalize.css reset styles
import 'normalize.css'

// FontAwesome Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars, faX } from '@fortawesome/free-solid-svg-icons'
library.add( faMagnifyingGlass, faBars, faX )

createApp(App)
.provide('globalStore', globalStore)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
