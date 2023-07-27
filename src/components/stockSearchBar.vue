<template>
  <div id="search-field-container">
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    <input type="text" maxlength="8" id="stock-search-field" placeholder="Stock Symbol..." ref="stockSymbol" @keyup.enter="routeToStockPage(stockSymbol.value)">
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

<style>
#search-field-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  column-gap: 0.5rem;
  border: 1px solid;
  border-radius: 10px;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  max-width: 25rem;
  min-width: 2rem;
}
#stock-search-field {
  border: none;
  background: none;
  min-width: 2rem;
}


</style>