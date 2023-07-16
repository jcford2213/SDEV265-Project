<template>
  <div class="login-signup-form-container">
    <login-signup-button-bar />
    <form @submit.prevent="sendLoginToServer" id="login-form">
      <label for="email">Email</label>
      <input type="text" name="email" v-model="userEmail">
      <label for="password">Password</label>
      <input type="text" name="password" v-model="userPassword">
      <!-- TODO Add rememberMe checkbox -->
      <button type="submit" @click.once="sendLoginToServer">Login</button>
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
import { useRouter } from 'vue-router';

import loginSignupButtonBar from '@/components/loginSignupButtonBar.vue';

const store = useStore()

const router = useRouter()

const userEmail = ref('')
const userPassword = ref('')

const sendLoginToServer = () => {
  if (userEmail.value && userPassword.value) {
    store.dispatch('loginUser', userEmail.value)
    router.push(`/${userEmail.value}/dashboard`)
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