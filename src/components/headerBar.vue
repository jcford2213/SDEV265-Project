<template>
  <div id="header-bar" ref="header">
    <div id="logo"><router-link to="/">TSP</router-link></div>
    <stock-search-bar />
    <mobile-nav :headerHeight="headerHeight"/>
  </div>
</template>

<script setup>
import stockSearchBar from './stockSearchBar.vue'
import mobileNav from './mobileNavigation.vue';
import { ref, onMounted } from 'vue';

// const headerHeight = ref(0)
const header = ref(null)
const headerHeight = ref(0)
// const setHeaderHeight = (newHeaderHeight) => {
//   headerHeight.value = newHeaderHeight
// }

onMounted( () => {
  headerHeight.value = header.value.offsetHeight
  // headerHeight.value = header.value.offsetHeight
  // const headerBar = document.getElementById('header-bar')
  // headerBar.addEventListener('change', setHeaderHeight(header.value.offsetHeight) )
})



</script>

<style lang="sass">
#header-bar
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  width: 100%
  padding-block: 1.5rem
  column-gap: 1rem

  #logo
    color: white

</style>