import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import public stylesheets
import '../public/normalize.css'
import '../public/global.sass'

// FontAwesome Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars, faX } from '@fortawesome/free-solid-svg-icons'
library.add( faMagnifyingGlass, faBars, faX )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
