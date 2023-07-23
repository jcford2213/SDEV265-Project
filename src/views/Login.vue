<template>
  <div class="login-signup-form-container">
    <login-signup-button-bar />
    <form @submit.prevent="sendLoginToServer" id="login-form">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="username">
      <label for="password">Password</label>
      <input type="text" name="password" v-model="password">
      <!-- TODO Add rememberMe checkbox -->
      <button type="submit">Login</button>
      <span id="forgot-password">
        <router-link to="/forgot-password">Forgot Password?</router-link>
      </span>
    </form>
    <!-- TODO Add other thirdparty account login methods -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

import loginSignupButtonBar from '@/components/loginSignupButtonBar.vue';

const store = useStore()


const username = ref('')
const password = ref('')

const sendLoginToServer = () => {
  if (username.value && password.value) {
    store.dispatch('loginUser', {'username': username.value, 'password': password.value})
  }
}

</script>

<style lang="sass">
  #login-form
    display: flex
    flex-direction: column
    row-gap: 1rem

  #forgot-password
    align-self: end
</style>