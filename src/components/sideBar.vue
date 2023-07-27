<template>
  
    <aside id="sidebar" ref="aside">
        <div class="logo">
            <!--<img src="images/logo.png">-->
            <!--<h2><span class="danger">TSP</span></h2>-->
        </div>
        <div class="container">
            <router-link to="/" @click="openCloseNavAside()">
                <a href="#">
                    <span class="material-icons-sharp">
                        home
                    </span>
                    Home
                </a>
            </router-link>
        </div>
        <div class="container" v-if="userLoggedIn">
            <router-link :to="{ name: 'Dashboard', params: {user: username} }" @click="openCloseNavAside()">
                <a href="#">
                    <span class="material-icons-sharp">
                        dashboard
                    </span>
                    Dashboard
                </a>
            </router-link>
        </div>
        
        
        <div class="container">
            <router-link to="/stocks" @click="openCloseNavAside()">
                <a href="#">
                    <span class="material-icons-sharp">
                        trending_up
                    </span>
                    Stocks
                </a>
            </router-link>
        </div>

        <div class="container" v-if="!userLoggedIn">
            <router-link to="login" @click="openCloseNavAside()">
                <a href="#">
                    <span class="material-icons-sharp">
                        person_outline
                    </span>
                    Login
                </a>
            </router-link>
        </div>

        <div class="container" v-if="!userLoggedIn">
            <router-link to="signup" @click="openCloseNavAside()">
                <a href="#">
                    <span class="material-icons-sharp">
                        person_add
                    </span>
                    Sign Up
                </a>
            </router-link>
        </div>

        <div class="container" v-if="userLoggedIn">
            <a href="#">
                    <span class="material-icons-sharp">
                        person_remove
                    </span>
                </a>
            <p @click="logoutUser">Log Out</p>
        </div>
    </aside>
</template>

<script setup>
import { ref, watch, computed, defineEmits } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

// Get current state
const store = useStore()
const username = computed(() => store.state.user.user.username)
const userLoggedIn = computed(() => store.getters['user/isLoggedIn'])

// Get router
const router = useRouter()

// Get props and assign them to variables
const props = defineProps(['navAsideOpen'])
const navAsideOpen = computed(() => props.navAsideOpen)
console.log(navAsideOpen.value)
// References the aside tag
const aside = ref(null)

const emit = defineEmits(['toggleNavAside'])

const openCloseNavAside = () => {
  emit('toggleNavAside')
}

watch(
    // Toggles if aside is visible or not
    () => navAsideOpen.value, (bool) => {
        console.log(bool)
        // If value is true
        if (bool) {
            aside.value.classList.add('sidebar-open')
        }
        else {
            aside.value.classList.remove('sidebar-open')
        }
    }
)   

const logoutUser = () => {
  store.dispatch('user/logoutUser')
  openCloseNavAside()
  router.push('/')
}


</script>

<style> 
#sidebar{
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    box-shadow: var(--box-shadow);
    border-radius: 15px;
    height: 88vh;
    position: absolute; 
    top: calc(var(--header-height) - 0.5rem);
    left: -160px;
    transition: all 0.3s ease;
}
.sidebar-open {
    transform: translateX(160px);
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
    position: relative;
    margin-left: 2rem;
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

@media screen and (min-width: 601px) {
    #sidebar {
        width: 100%;
        position: relative;
        left: 0;
    }
}
</style>