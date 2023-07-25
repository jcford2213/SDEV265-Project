<template>
  <div>
    <button id="track-stock-button" v-if="!isTickerTracked" @click="trackStock(reactiveTicker)">track stock</button>
    <div id="tracking-stock-indicator" v-if="isTickerTracked">
      tracking
      <button @click="removeStock(ticker)">
        <font-awesome-icon :icon="['fas', 'ellipsis-vertical']"/>
      </button>
    </div>
  </div>
  <login-signup-popup v-show="showPopup" @closePopup="showPopup = false" />
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, computed, inject } from 'vue';
import loginSignupPopup from './loginSignupPopup.vue';

// Get state values
const store = useStore()
const trackedStocks = store.state.user.trackedStocks
// Get the current ticker and check if it is being tracked by user
const ticker = inject('ticker')
const reactiveTicker = ref(ticker)
console.log(`${reactiveTicker.value}, ${trackedStocks}`)
const isTickerTracked = computed(() => trackedStocks.includes(ticker))

// Initial display state for loginSignupPopup
const showPopup = ref(false)

const trackStock = (tickerToAdd) => {
  console.log(tickerToAdd)
  if(store.state.user.user.username) {
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
  
</style>