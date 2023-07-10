<template>
  <div id="search-field-container">
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    <input type="text" id="search-field" placeholder="Stock Symbol..." v-model="stockSymbol" @keyup.enter="getStockData(stockSymbol)">
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'

const globalStore = inject('globalStore')
const router = useRouter()

const getStockData = (tickerInput) => {
  // send ticker to server
  axios.post('http://127.0.0.1:8000/stocks/', {
    ticker: tickerInput
  })
  .then( response => {
    // Update state
    globalStore.currentStock = response.data;
    router.push(`/${tickerInput}`)
  })
  .catch ( error => {
    console.log(error.response.data['error'])
    // emit ('error', error.response.data['error'])
  })
}

</script>

<style lang="sass">
#search-field-container
  border: 1px solid
  border-radius: 10px
  padding-inline: 1rem
  padding-block: 0.5rem

#search-field
  border: none
  margin-left: 0.5rem
</style>