<template>
  <div :class="{'dark-mode': isDarkMode}">
    <header>
      <header-bar/>
    </header>
    <router-view/>
  
    <footer>
    </footer>
    </div>
</template>

<script setup>
  import headerBar from './components/headerBar.vue';
</script>

<script>
  export default {
  data() {
    return {
      isDarkMode: true, // Set this to true to enable dark mode
    };
  },
};
</script>

<style lang="sass">
@import "./public/dark-mode.scss"
</style>
