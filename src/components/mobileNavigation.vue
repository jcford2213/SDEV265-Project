<template>
  <div id="mobile-nav">
    <font-awesome-icon :icon="['fas', 'fa-bars']" v-if="!drawerOpen" @click="openCloseNavDrwer()"/>
    <font-awesome-icon :icon="['fas', 'fa-x']" v-if="drawerOpen" @click="openCloseNavDrwer()"/>
  </div>
  <nav id="mobile-nav-drawer" :class="{ 'open': drawerOpen }">
    <ul id="mobile-nav-list">
      <li>
        <div class="btn btn-primary">
          <router-link to="/" @click="openCloseNavDrwer()">
            <span class="material-icons-sharp">
                home
            </span>
            Home
          </router-link>
        </div>
        
      </li>
      <li v-if="userLoggedIn">
        <div class="btn btn-primary">
          <router-link :to="{ name: 'Dashboard', params: {user: username} }" @click="openCloseNavDrwer()">
            <span class="material-icons-sharp">
                dashboard
            </span>
            Dashboard
          </router-link>
        </div>
      </li>
      <li>
        <div class="btn btn-primary">
          <router-link to="/stocks" @click="openCloseNavDrwer()">
            <span class="material-icons-sharp">
              trending_up
            </span>
            Stocks
          </router-link>
        </div>
      </li>
      <li v-if="!userLoggedIn">
        <div class="btn btn-primary">
          <router-link to="login" @click="openCloseNavDrwer()">
            <span class="material-icons-sharp">
              person_outline
            </span>
            Login
          </router-link>
        </div>
      </li>
      <li v-if="!userLoggedIn">
        <div class="btn btn-primary">
          <router-link to="signup" @click="openCloseNavDrwer()">
            <span class="material-icons-sharp">
              person_add
            </span>
            Sign Up
          </router-link>
        </div>
      </li>
      <li v-if="userLoggedIn">
        <div class="btn btn-primary">
          <span class="material-icons-sharp">
              person_remove
            </span>
          <p @click="logoutUser">Log Out</p>
        </div>
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
const username = computed(() => store.state.user.user.username)
const userLoggedIn = computed(() => store.getters['user/isLoggedIn'])

const router = useRouter()

let drawerOpen = ref(false);
const openCloseNavDrwer = () => {
  drawerOpen.value = !drawerOpen.value
}

const logoutUser = () => {
  store.dispatch('user/logoutUser')
  openCloseNavDrwer()
  router.push('/')
}

// Get headerHeight prop so drawer knows how far to drop down
const props = defineProps(['headerHeight'])
const height = ref(0)
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