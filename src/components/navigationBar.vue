<template>
  <div id="navigation-container">
    <div id="logo"><router-link to="/">TSP</router-link></div>
    <search-for-stock />
    <nav id="mobile-nav">
      <font-awesome-icon :icon="['fas', 'fa-bars']" />
    </nav>
  </div>
</template>

<script setup>
import searchForStock from './searchForStock.vue'

</script>

<style lang="sass">
#navigation-container
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  width: 100%
  padding-block: 1.5rem

</style>