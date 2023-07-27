<template>
  <div id="header-bar">
    <div id="mobile-nav-icons">
        <font-awesome-icon id="fa-bars" class="fa-2x" :icon="['fas', 'fa-bars']" v-if="!navAsideOpen" @click="openCLoseNavAside()"/>
        <font-awesome-icon id="fa-x" class="fa-2x" :icon="['fas', 'fa-x']" v-if="navAsideOpen" @click="openCLoseNavAside()"/>
    </div>
    <div id="logo-container"><router-link to="/">
      <img id=tsp-logo src="\images\Logo.png" alt="Logo for Stock Trading Platform">
    </router-link></div>
    <h1 id="app-name-h1">Trading System Platform</h1>
    <div class="right-section">
    <div class="right-nav">
      <button id="menu-btn" @click="toggleDark()">
        <span class="material-icons-sharp">
          menu
        </span>
      </button>
      <div class="dark-mode">
          <span class="material-icons-sharp active">
              light_mode
          </span>
          <span class="material-icons-sharp">
              dark_mode
          </span>
      </div>
      </div>
      <stock-search-bar />
    </div>
  </div>
</template>

<script setup>
import stockSearchBar from './stockSearchBar.vue'
import { defineEmits, ref , watch} from 'vue';

const props = defineProps();
const navAsideOpen = ref(props.navAsideOpen)

const emit = defineEmits(['toggleNavAside']);

const openCLoseNavAside = () => {
  navAsideOpen.value = !navAsideOpen.value
  emit('toggleNavAside')
}

// const headerHeight = ref(0)

// const setHeaderHeight = (newHeaderHeight) => {
//   headerHeight.value = newHeaderHeight
// }



// onMounted( () => {
//   headerHeight.value = header.value.offsetHeight
//   // headerHeight.value = header.value.offsetHeight
//   // const headerBar = document.getElementById('header-bar')
//   // headerBar.addEventListener('change', setHeaderHeight(header.value.offsetHeight) )
// })

import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);





</script>

<style>
#header-bar {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: space-around;
  align-items: center;
  margin-inline: 1rem;
  margin-top: 1rem;
}

#app-name-h1 {
  display: none;
}

#right-section {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
  justify-content: end;
  flex: 1;
}
#tsp-logo {
  display: none
}


@media screen and (min-width: 601px) {
  #mobile-nav-icons {
    display: none;
  }

  #header-bar {
    justify-content: space-between;
    padding-inline: 3rem;
  }

  #tsp-logo {
    display: block;
    max-width: 6rem;
  }

  #app-name-h1 {
    display: block;
  }
}


</style>