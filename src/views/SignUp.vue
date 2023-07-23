<template>
  <div class="login-signup-form-container">
    <login-signup-button-bar />
    <form @submit.prevent="sendSigninToServer" id="signup-form">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="username">
      <label for="email">Email</label>
      <input type="text" name="email" v-model="email">
      <label for="password">Password</label>
      <input type="text" name="password" v-model="password">
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

import loginSignupButtonBar from '@/components/loginSignupButtonBar.vue';

const store = useStore()

const username = ref('')
const email = ref('')
const password = ref('')


const sendSigninToServer = () => {
  if (username.value && email.value && password.value) {
    store.dispatch('signUpUser', {'username': username.value, 'email': email.value, 'password': password.value, 'tracked_stocks': ''})
  }
}

</script>

<style lang="sass">
  #signup-form
    display: flex
    flex-direction: column
    row-gap: 1rem
</style>