<template>
  <div id="login-signup-button-bar">
    <router-link to="/login" class="login-signup-buttons" :class="{'active': isLogin}">Login</router-link>
    <router-link to="signup" class="login-signup-buttons" :class="{'active': isSignUp}">Sign Up</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onBeforeMount, ref } from 'vue';

const route = useRoute()
const routePath = ref(route.path)

const isLogin = ref(true)
const isSignUp = ref(false)

const flipActiveButtonState = path => {
  if (path === '/login') {
    isLogin.value = true
    isSignUp.value = false
  }
  if (path === '/signup') {
    isLogin.value = false
    isSignUp.value = true
  }
}

onBeforeMount(() => {
  console.log(routePath.value)
  flipActiveButtonState(routePath.value)
})

</script>

<style lang="sass">
#login-signup-button-bar
  display: flex
  flex-direction: row
  align-items: center
  column-gap: 3rem
  width: fit-content
  
.login-signup-buttons
  color: white

.login-signup-buttons.active
  border-block: 2px solid black


</style>