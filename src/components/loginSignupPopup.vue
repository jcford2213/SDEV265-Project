<template>
  <div id="login-signup-popup">
    <font-awesome-icon id="close-popup" :icon="['fas', 'fa-x']" @click="closePopup()"/>
    <h3>Log in to track a stock</h3>
    <router-link to="/login">Login</router-link>
    <h4>Don't have an account?</h4>
    <router-link to="/signup">Sign Up</router-link>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emits = defineEmits('closingPopup')

const closePopup = () => {
  // sends event 'closePopup' to parent component
  emits('closePopup')
}

</script>

<style lang="sass">
  #login-signup-popup
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: flex
    flex-direction: column
    row-gap: 1rem
    align-items: flex-end
    padding: 1rem
    background-color: #dadada
    max-width: fit-content
    max-height: fit-content
  #close-popup
    justify-self: right
</style>