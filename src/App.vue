<template>
    <header ref="header">
      <header-bar :navAsideOpen="navAsideOpen" @toggleNavAside="toggleNavAside()"/>
    </header>
    <div id="content-container">
      <side-bar-vue :navAsideOpen="navAsideOpen" @toggleNavAside="toggleNavAside()"/>
      <router-view/>
    </div>
    

  
    <footer>
    </footer>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import headerBar from './components/headerBar.vue';
import sideBarVue from './components/sideBar.vue';

const header = ref(null)
const headerHeight = ref(0)

const store = useStore()

const navAsideOpen = ref(false)

//const isDarkMode = ref(true) // Set this to true to enable dark mode

const toggleNavAside = () => {
  navAsideOpen.value = !navAsideOpen.value
}

onBeforeMount(() => {
  // Check for jwt token in local storage
  const token = sessionStorage.getItem('token')
  if (!token) {
    return
  }
  store.dispatch('user/getUser')
})


</script>


<style>

#content-container {
  display: block;
}

@media screen and (min-width: 600px) {
  #content-container{
    display: grid;
    width: 96%;
    margin: 0 auto;
    gap: 1.8rem;
    grid-template-columns: 12rem auto 23rem;
}
}

</style>
