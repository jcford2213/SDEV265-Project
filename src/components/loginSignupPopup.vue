<template>
  <div id="login-signup-popup" class="card">
    <button id="close-popup" @click="closePopup()">
      <font-awesome-icon  :icon="['fas', 'fa-x']" class="fa-lg" />
    </button>
    <h2>Log in to track a stock</h2>
    <router-link class="popup-nav-button" to="/login">
        <span class="material-icons-sharp">
            person_outline
        </span>
        Login
    </router-link>
    <h2>Don't have an account?</h2>
    <router-link class="popup-nav-button" to="/signup">
        <span class="material-icons-sharp">
            person_add
        </span>
        Sign Up
    </router-link>
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
    align-items: center
    padding: 1rem
    width: 60%
    z-index: 99999

  
  .popup-nav-button
    border-radius: 5px
    background-color: var(--color-primary)
    padding-inline: 1rem
    padding-block: 0.5rem
    align-self: center 
    display: flex
    flex-direction: row
    column-gap: 1rem
    align-items: center

  #close-popup
    align-self: flex-end
    background: none

  @media screen and (min-width: 600px)
    #login-signup-popup
      max-width: 400px
</style>