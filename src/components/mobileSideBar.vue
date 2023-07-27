<template>
  <div id="mobile-sidebar" ref="mobileSidebar">
      <img src="images/logo.png" id="tsp-nav-logo">
      <hr id="nav-hr">
      <div class="aside-button-container">
          <router-link to="/" @click="openCloseNav()">
              <span class="material-icons-sharp">
                  home
              </span>
              Home
          </router-link>
      </div>
      <div class="aside-button-container" v-if="userLoggedIn">
          <router-link :to="{ name: 'Dashboard', params: {user: username} }" @click="openCloseNav()">
              <span class="material-icons-sharp">
                  dashboard
              </span>
              Dashboard
          </router-link>
      </div>
      <div class="aside-button-container">
          <router-link to="/stocks" @click="openCloseNav()">
            <span class="material-icons-sharp">
                trending_up
            </span>
            Stocks
          </router-link>
      </div>

      <div class="aside-button-container" v-if="!userLoggedIn">
          <router-link to="/login" @click="openCloseNav()">
              <span class="material-icons-sharp">
                  person_outline
              </span>
              Login
          </router-link>
      </div>

      <div class="aside-button-container" v-if="!userLoggedIn">
          <router-link to="/signup" @click="openCloseNav()">
              <span class="material-icons-sharp">
                  person_add
              </span>
              Sign Up
          </router-link>
      </div>

      <div class="aside-button-container" v-if="userLoggedIn" @click="logoutUser">
        <router-link to="#">
          <span class="material-icons-sharp">
            person_remove
          </span>
          Log Out
        </router-link>
      </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

// Get current state
const store = useStore()

// Check if there is auser logged in, and get their username
const userLoggedIn = computed(() => store.getters['user/isLoggedIn'])
const username = computed(() => store.state.user.user.username)

// Get router
const router = useRouter()

// Get props and assign them to variables
const props = defineProps(['navOpen', 'headerHeight'])
const navOpen = computed(() => props.navOpen)

const emit = defineEmits(['closeNav'])

const openCloseNav = () => {
  emit('closeNav');
}

// Reference the div id="mobile-sidebar"
const mobileSidebar = ref(null)
watch(
    // Toggles if mobileSidebar is visible or not
    () => navOpen.value, (bool) => {
        // If value is true
        if (bool) {
            mobileSidebar.value.classList.add('mobile-sidebar-open')
        }
        else {
            mobileSidebar.value.classList.remove('mobile-sidebar-open')
        }
    }
)   

const logoutUser = () => {
  store.dispatch('user/logoutUser')
  openCloseNav()
  router.push('/')
}


</script>

<style> 
#tsp-nav-logo {
  width: 50%;
  margin-inline: auto;
  margin-top: 1rem;
}

#nav-hr {
  margin-block: 1rem;
}

#mobile-sidebar{
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    border-radius: 15px;
    height: 88vh;
    width: 160px;
    position: absolute; 
    top: 50px;
    left: -160px;
    transition: all 0.3s ease;
    z-index: 99999;
}
.mobile-sidebar-open {
    transform: translateX(160px);
}

#mobile-sidebar:hover{
    box-shadow: none;
}

#mobile-sidebar a{
    display: flex;
    align-items: center;
    color: var(--color-info-dark);
    height: 3.7rem;
    gap: 1rem;
    position: relative;
    transition: all 0.3s ease;
}

#mobile-sidebar a span{
    font-size: 1.6rem;
    transition: all 0.3s ease;
}

#mobile-sidebar a.active{
    width: 100%;
    color: var(--color-primary);
    background-color: var(--color-light);
    margin-left: 0;
}

#mobile-sidebar a.active::before{
    content: '';
    width: 6px;
    height: 18px;
    background-color: var(--color-primary);
}

#mobile-sidebar a.active span{
    color: var(--color-primary);
    margin-left: calc(1rem - 3px);
}

#mobile-sidebar a:hover{
    color: var(--color-primary);
}

#mobile-sidebar a:hover span{
    margin-left: 0.6rem;
}

#mobile-sidebar .message-count{
    background-color: var(--color-danger);
    padding: 2px 6px;
    color: var(--color-white);
    font-size: 11px;
    border-radius: var(--border-radius-1);
}

@media screen and (min-width: 601px) {
    #mobile-sidebar {
        width: 100%;
        position: relative;
        left: 0;
    }
}
</style>