<template>
  
  <aside id="mobile-nav-drawer">
    <div class="logo">
        <img src="images/logo.png">
        <h2><span class="danger">TSP</span></h2>
    </div>
    <div class="toggle">
        <div class="close" id="close-btn" @click="openCloseNavDrawer()">
            <span class="material-icons-sharp">
                open
            </span>
        </div>
        <div class="close" id="btn btn-close" @click="openCloseNavDrawer()">
            <span class="material-icons-sharp">
                close
            </span>
        </div>
    </div>
    <div class="sidebar" id="mobile-nav-list" v-if="drawerOpen">
      
        <div class="btn btn-primary">
          <router-link to="/" @click="openCloseNavDrawer()">
            <span class="material-icons-sharp">
                home
            </span>
            Home
          </router-link>
        </div>
      
        <div class="btn btn-primary" v-if="userLoggedIn">
          <router-link :to="{ name: 'Dashboard', params: {user: username} }" @click="openCloseNavDrawer()">
            <span class="material-icons-sharp">
                dashboard
            </span>
            Dashboard
          </router-link>
        </div>
      
      
        <div class="btn btn-primary">
          <router-link to="/stocks" @click="openCloseNavDrawer()">
            <span class="material-icons-sharp">
              trending_up
            </span>
            Stocks
          </router-link>
        </div>
        <div class="btn btn-primary" v-if="!userLoggedIn">
          <router-link to="login" @click="openCloseNavDrawer()">
            <span class="material-icons-sharp">
              person_outline
            </span>
            Login
          </router-link>
        </div>
        <div class="btn btn-primary" v-if="!userLoggedIn">
          <router-link to="signup" @click="openCloseNavDrawer()">
            <span class="material-icons-sharp">
              person_add
            </span>
            Sign Up
          </router-link>
        </div>
        <div class="btn btn-primary" v-if="userLoggedIn">
          <span class="material-icons-sharp">
              person_remove
            </span>
          <p @click="logoutUser">Log Out</p>
        </div>
      
    </div>
  </aside>
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
const openCloseNavDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}

const logoutUser = () => {
  store.dispatch('user/logoutUser')
  openCloseNavDrawer()
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

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');




// darkMode.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode-variables');
//     darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
//     darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
// })

</script>

<style> 


  #mobile-nav-drawer {
    position: fixed;
    left: 0;
    top: -100%;
    width: 100%;
    background-color: #bebebe;
    transition: top 0.3s ease-in-out;
  }

  #mobile-nav-drawer.open {
    top: calc(var(--header-height));
  }

  #mobile-nav

  #mobile-nav-list{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin: 0;
    width: fit-content;
    padding-block: 1rem;
    padding-inline-start: 3rem;
  }
</style>