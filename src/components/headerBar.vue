<template>
  <div id="header-bar">
    <div id="mobile-nav">
        <font-awesome-icon id="fa-bars" class="fa-2x" :icon="['fas', 'fa-bars']" v-if="!navOpen" @click="openCloseNav()"/>
        <font-awesome-icon id="fa-x" class="fa-2x" :icon="['fas', 'fa-x']" v-if="navOpen" @click="openCloseNav()"/>
        <mobile-side-bar :navOpen="navOpen" @closeNav="openCloseNav()"/>
    </div>
    <div id="left-header">
      <router-link to="/">
        <img id=tsp-logo src="\images\Logo.png" alt="Logo for Stock Trading Platform">
      </router-link>
    
      <h1 id="app-name-h1">Trading System Platform</h1>
    </div>
    <div id="right-header">
      <stock-search-bar />
    </div>
  </div>
</template>

<script setup>
import stockSearchBar from './stockSearchBar.vue'
import mobileSideBar from './mobileSideBar.vue';
import { ref } from 'vue';

const navOpen = ref(false)


const openCloseNav = () => {
  navOpen.value = !navOpen.value
}





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


#right-header {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

#left-header {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  align-items: center;
}

#tsp-logo {
  display: none
}


@media screen and (min-width: 601px) {
  #mobile-nav {
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