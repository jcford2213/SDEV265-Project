<template>
    <header>
      <header-bar />
    </header>
    <div id="content-container">
      <aside id="sidebar">
        <div class="container">
            <router-link to="/">
              <span class="material-icons-sharp">
                  home
              </span>
              Home
            </router-link>
        </div>
        <div class="container" v-if="userLoggedIn">
            <router-link :to="{ name: 'Dashboard', params: {user: username} }">
              <span class="material-icons-sharp">
                  dashboard
              </span>
              Dashboard
            </router-link>
        </div>
        
        
        <div class="container">
            <router-link to="/stocks">
              <span class="material-icons-sharp">
                  trending_up
              </span>
              Stocks
            </router-link>
        </div>

        <div class="container" v-if="!userLoggedIn">
            <router-link to="/login">
              <span class="material-icons-sharp">
                  person_outline
              </span>
              Login
            </router-link>
        </div>

        <div class="container" v-if="!userLoggedIn">
            <router-link to="/signup">
              <span class="material-icons-sharp">
                  person_add
              </span>
              Sign Up
            </router-link>
        </div>

        <div class="container" v-if="userLoggedIn" @click="logoutUser">
            <router-link to="#">
              <span class="material-icons-sharp">
                person_remove
              </span>
              Log Out
            </router-link>
            
        </div>
      </aside>
      <router-view/>
    </div>
    

  
    <footer>
    </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import headerBar from './components/headerBar.vue';

// Get current state
const store = useStore()

// Get access to router
const router = useRouter()

// Check if there is auser logged in, and get their username
const userLoggedIn = computed(() => store.getters['user/isLoggedIn'])
const username = computed(() => store.state.user.user.username)



const logoutUser = () => {
  store.dispatch('user/logoutUser')
  router.push('/')
}
</script>


<style>

#content-container {
  display: block;
  margin-top: 2rem;
  margin-inline: 1rem;
}

#sidebar {
  display: none;
}

@media screen and (min-width: 600px) {
  #content-container{
    display: grid;
    width: 96%;
    margin-inline: auto;
    gap: 1.8rem;
    grid-template-columns: 12rem auto;
  }
  #sidebar{
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    border-radius: 15px;
    height: 88vh;
    width: 100%;
    transition: all 0.3s ease;
  }
  
  #sidebar:hover{
      box-shadow: none;
  }

  #sidebar a{
      display: flex;
      align-items: center;
      color: var(--color-info-dark);
      height: 3.7rem;
      gap: 1rem;
      margin-left: 0.5rem;
      position: relative;
      transition: all 0.3s ease;
  }

  #sidebar a span{
      font-size: 1.6rem;
      transition: all 0.3s ease;
  }

  #sidebar a.active{
      width: 100%;
      color: var(--color-primary);
      background-color: var(--color-light);
      margin-left: 0;
  }

  #sidebar a.active::before{
      content: '';
      width: 6px;
      height: 18px;
      background-color: var(--color-primary);
  }

  #sidebar a.active span{
      color: var(--color-primary);
      margin-left: calc(1rem - 3px);
  }

  #sidebar a:hover{
      color: var(--color-primary);
  }

  #sidebar a:hover span{
      margin-left: 0.6rem;
  }

  #sidebar .message-count{
      background-color: var(--color-danger);
      padding: 2px 6px;
      color: var(--color-white);
      font-size: 11px;
      border-radius: var(--border-radius-1);
  }
}

</style>
