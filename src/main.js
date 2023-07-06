import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// FontAwesome Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add( faMagnifyingGlass )

createApp(App).use(router).mount('#app')
