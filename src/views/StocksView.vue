<template>
  <div id="stocks-container">
    <div v-for="stock in listOfStocks" class="card">
      <stockCard :ticker="stock" class="card-body"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import stockCard from '@/components/stockCard.vue';

const listOfStocks = ref([
  'aapl',
  'msft',
  'goog',
  'amzn',
  'nvda',
  'tsla',
  'meta',
  'tsm',
  'jpm',
  'v',
  'xom',
  'lly'
])

</script>

<style lang="sass">
  #stocks-container
    display: flex
    flex-direction: column
    row-gap: 1.5rem

  @media screen and (min-width: 600px) 
    #stocks-container
      display: grid
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
      grid-gap: 1.5rem
  
</style>