<template>
  <div id="mobile-nav">
    <font-awesome-icon :icon="['fas', 'fa-bars']" v-if="!drawerOpen" @click="toggleDrawerState()"/>
    <font-awesome-icon :icon="['fas', 'fa-x']" v-if="drawerOpen" @click="toggleDrawerState()"/>
  </div>
  <nav id="mobile-nav-drawer" :class="{ 'open': drawerOpen }">
    <ul id="mobile-nav-list">
      <li v-for="route in routes">
        <router-link :to="route.path" @click="toggleDrawerState()">
          {{ route.name }}
        </router-link>
      </li>
      <li v-if="userSignedIn">
        <p @click="logoutUser">Log Out</p>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

// Get current state
const store = useStore()
const routes = computed(() => store.state.navigationRoutes)
const user = computed(() => store.state.currentUser)
const userSignedIn = computed(() => user.value ? true : false)

const router = useRouter()

// Get headerHeight prop
const props = defineProps(['headerHeight'])

// Reactive height variable to take on props.headerHeight value
const height = ref(0)

// Drawer State and set DrawState
let drawerOpen = ref(false);
const toggleDrawerState = () => {
  drawerOpen.value = !drawerOpen.value
}

const logoutUser = () => {
  store.dispatch('logoutUser')
  toggleDrawerState()
  router.push('/')
}

watch(
  // Set css property when new height is detected
  () => props.headerHeight, (newHeight) => {
    height.value = newHeight
    document.documentElement.style.setProperty('--header-height', `${height.value}px`)
  }
)
</script>

<style lang="sass">
  #mobile-nav-drawer
    position: fixed
    left: 0
    top: -100%
    width: 100%
    background-color: #bebebe
    transition: top 0.3s ease-in-out

  #mobile-nav-drawer.open
    top: calc(var(--header-height) - 0.5rem)

  #mobile-nav

  #mobile-nav-list
    display: flex
    flex-direction: column
    row-gap: 1rem
    margin: 0
    width: fit-content
    padding-block: 1rem
    padding-inline-start: 3rem
</style>