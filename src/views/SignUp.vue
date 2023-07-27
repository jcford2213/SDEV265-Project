<template>
  <div id="signup-form-container" class="card">
    <h1>Sign Up</h1>
    <form @submit.prevent="registerUser" id="signup-form">
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

import store from '@/store';

store = useStore()

const username = ref('')
const email = ref('')
const password = ref('')


const registerUser = () => {
  if (username.value && email.value && password.value) {
    store.dispatch('user/createUser', {'username': username.value, 'email': email.value, 'password': password.value})
  }
}

</script>

<style lang="sass">
  #signup-form-container
      display: flex
      flex-direction: column
      row-gap: 1rem
      width: 100%
      max-width: 400px
      margin-inline: auto
      height: fit-content
      padding: 1rem

  #signup-form
    display: flex
    flex-direction: column
    row-gap: 1rem
    width: 100%
    padding: 20px
    border: 1px solid
    border-radius: 5px

    #forgot-password
      align-self: end

    
    label 
      display: block
      font-weight: bold
      align-self: start

    input[type="text"],
    input[type="password"] 
      width: 100%
      padding: 8px
      font-size: 16px
      border: 1px solid #ccc
      border-radius: 3px

    button
      display: block
      width: 100%
      padding: 10px
      font-size: 18px
      font-weight: bold
      color: #fff
      background-color: #007bff
      border: none
      border-radius: 5px
      cursor: pointer

    button:hover 
      background-color: #0056b3

@media screen and (min-width: 600px)
  #signup-form-container
      max-width: 600px
      
</style>