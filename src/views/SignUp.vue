<template>
  <div class="login-signup-form-container">
    <login-signup-button-bar />
    <form @submit.prevent="sendSigninToServer" id="signup-form">
      <label for="email">Email</label>
      <input type="text" name="email" v-model="newEmail">
      <label for="password">Password</label>
      <input type="text" name="password" v-model="newPassword">
      <button type="submit" @click="sendSigninToServer">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

import loginSignupButtonBar from '@/components/loginSignupButtonBar.vue';

const store = useStore()

const newEmail = ref('')
const newPassword = ref('')


const sendSigninToServer = () => {
 
}

</script>

<style lang="sass">
  #signup-form
    display: flex
    flex-direction: column
    row-gap: 1rem
</style>