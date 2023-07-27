<template>
  <div id="track-button-container">
    <button id="track-stock-button" v-if="!isTickerTracked" @click="trackStock(reactiveTicker)">track stock</button>
    <div id="tracking-stock-indicator" v-if="isTickerTracked">
      tracking
      <button id="ellipsis" @click="removeStock(ticker)">
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']"/>
      </button>
    </div>
  </div>
  <login-signup-popup v-show="showPopup" @closePopup="showPopup = false" />
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import loginSignupPopup from './loginSignupPopup.vue';

// Get state values
const store = useStore()
const trackedStocks = store.state.user.trackedStocks
// Get the current ticker and check if it is being tracked by user
const props = defineProps('ticker')
const ticker = ref(props.ticker)
console.log(`${trackedStocks}, ${ticker.value}`)
const isTickerTracked = computed(() => trackedStocks.includes(ticker))

// Initial display state for loginSignupPopup
const showPopup = ref(false)

const trackStock = (tickerToAdd) => {
  console.log(tickerToAdd)
  if(store.state.user.user?.username) {
    store.dispatch('user/addTrackedStock', { tickerToAdd })
  }
  else {
    showPopup.value = true
  }
}

const removeStock = (tickerToRemove) => {
  store.dispatch('user/deleteTrackedStock', { 'stock': tickerToRemove })
}

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
    background-color: var(--color-success)
    border-radius: 5px

  #ellipisis
</style>