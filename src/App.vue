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
import { onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import headerBar from './components/headerBar.vue';

const store = useStore()

const isDarkMode = ref(true) // Set this to true to enable dark mode

onBeforeMount(() => {
  // Check for jwt token in local storage
  const token = sessionStorage.getItem('token')
  if (!token) {
    return
  }
  store.dispatch('user/getUser')
})

</script>


<style lang="sass">
@import "./public/dark-mode.scss"
</style>
