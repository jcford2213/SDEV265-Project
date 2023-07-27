<template>
  <div id="login-form-container" class="card">
    <h1>Login</h1>
    <form @submit.prevent="loginUser" id="login-form">
      <p v-if="loginError">
        Incorrect username or password
      </p>
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
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

// Get store to dispatch actions
const store = useStore()

// Define referable values
const username = ref('')
const password = ref('')

// Define error state
const loginError = ref(false)

const loginUser = async () => {
  if (username.value && password.value) {
    try {
      await store.dispatch('user/loginUser', {'username': username.value, 'password': password.value})
    }
    catch {
      loginError.value = true
    }
  }

watch(
  () => loginError.value, (bool) => {
    if (!bool) {
      document.querySelectorAll('#login-form > input').classList.add('form-invalid')
    }
  }
)
}

</script>

<style lang="sass">
  #login-form-container
    display: flex
    flex-direction: column
    row-gap: 1rem
    width: 100%
    max-width: 400px
    margin-inline: auto
    height: fit-content
    padding: 1rem

  #login-form
    display: flex
    flex-direction: column
    align-items: center
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
  #login-form-container
      max-width: 600px

</style>