<template>
  <div id="search-field-container">
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    <input type="text" id="stock-search-field" placeholder="Stock Symbol..." ref="stockSymbol" @keyup.enter="routeToStockPage(stockSymbol.value)">
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const stockSymbol = ref(null)

const routeToStockPage = (tickerInput) => {
  console.log(tickerInput)
  router.push(`/stocks/${tickerInput}`)
  // Reset search field
  document.getElementById('stock-search-field').value = ''
  //TODO async Validate Search
}

</script>

<style lang="sass">
#search-field-container
  display: flex
  flex-direction: row
  column-gap: 0.5rem
  border: 1px solid
  border-radius: 10px
  padding-inline: 1rem
  padding-block: 0.5rem
  min-width: 8rem

#stock-search-field
  border: none
  min-width: 6rem
</style>