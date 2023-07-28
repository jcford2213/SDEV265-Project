<template>
  <div id="track-button-container">
    <button id="track-stock-button" v-if="!isTickerTracked" @click="trackStock(ticker)">track stock</button>
    <div id="tracking-stock-indicator" v-if="isTickerTracked">
      tracking
      <button id="ellipsis" @click="toggleRemoveStock()">
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']"/>
      </button>
    </div>
    <div id="untrackStock" v-if="removeStockClicked">
      <button  @click="removeStock(ticker)">
        untrack stock
      </button>
      <span id="verticle-rule"></span>
      <font-awesome-icon id="fa-x" :icon="['fas', 'fa-x']" @click="toggleRemoveStock()"/>
    </div>
  </div>
  <login-signup-popup v-show="showPopup" @closePopup="showPopup = false" />
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, computed, watch } from 'vue';
import loginSignupPopup from './loginSignupPopup.vue';

// Get state values
const store = useStore()
const trackedStocks = computed( () => store.state.user.trackedStocks)

// Get the current ticker
const props = defineProps(['ticker'])
const ticker = computed(() => props.ticker)
// Check if it is being tracked by user
let isTickerTracked = computed(() => trackedStocks.value.includes(ticker.value))

console.log(trackedStocks.value, ticker.value)

// Initial display state for loginSignupPopup
const showPopup = ref(false)

// Calls store action. Adds stock to user database
const trackStock = (tickerToAdd) => {
  console.log(tickerToAdd)
  if(store.state.user.user?.username) {
    store.dispatch('user/addTrackedStock', { tickerToAdd })
  }
  else {
    showPopup.value = true
  }
}

// Removing stock
const removeStockClicked = ref(false)

const toggleRemoveStock = () => {
  removeStockClicked.value = !removeStockClicked.value
}

const removeStock = (tickerToRemove) => {
  store.dispatch('user/deleteTrackedStock', { tickerToRemove })
  toggleRemoveStock()
}

watch(
  () => ticker.value, (newTicker) => {
    console.log(newTicker)
    isTickerTracked = computed(() => trackedStocks.value.includes(newTicker))
  }
)
</script>

<style lang="sass">
  #track-button-container 
    width: 6.5rem

  #track-stock-button
    background-color: var(--color-warning)
    width: 100%
    padding-block: 0.5rem
    border-radius: 5px

  #tracking-stock-indicator
    display: flex
    flex-direction: row
    justify-content: space-between
    background-color: var(--color-success)
    border-radius: 5px
    padding-left: 10px

  #ellipsis
    padding-inline: 0.75rem

  #untrackStock
    display: flex
    flex-direction: row
    column-gap: 1rem
    background-color: var(--color-info-dark)
    position: absolute
    top: 10px
    padding: 0.5rem

    button
      background: none

  #verticle-rule
    border: 1px solid
    width: 1px
    
</style>