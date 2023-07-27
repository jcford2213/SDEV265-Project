import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

// Import public stylesheets
import '../public/normalize.css'

import '../public/style.css'

// FontAwesome Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faBars, faX, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
library.add( faMagnifyingGlass, faBars, faX, faEllipsisVertical )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')


