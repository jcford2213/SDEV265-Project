<template>
  <div class="home">
    <form @submit.prevent="getTickerData(stockSymbol)">
      <label for="ticker-search">Stock Symbol</label>
      <input type="text" name="ticker-search" v-model="stockSymbol">
      <button type="submit">Submit</button>
    </form>
    <p>{{ stockData }}</p>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const stockSymbol = ref('');
let stockData = ref('');

const getTickerData = (ticker) => {
  console.log(ticker)
  
    axios.post('http://127.0.0.1:8000/stocks/', {
      ticker: ticker
    })
    .then((response) => {
      console.log(response.data);
      stockData.value = response.data;
    })
    .catch ( (error) => {
      stockData.value = error.response.data['error']
    })
  
}
</script>