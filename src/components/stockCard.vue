<template>
  <div id="stock-information-container">
    <track-stock-button :ticker="ticker"/>
    <div  @click="openTickerPage()">
      <h1>
      {{ stockName }}
      </h1>
      <h1>
        {{ stockSymbol }}
      </h1> 
      <h2>
        {{ stockCurrentPrice }}
      </h2>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router';
import trackStockButton from './trackStockButton.vue'
import getBasicStockData from '../utils/getBasicStockData'

const router = useRouter()

const props = defineProps({
  'ticker': String
})
const ticker = ref(props.ticker)

// Define stock properties
const stockName = ref('')
const stockSymbol = ref('')
const stockCurrentPrice = ref('')

const openTickerPage = () => {
  router.push(`/stocks/${ticker.value}`)
}

onBeforeMount(async() => {
  const stock = await getBasicStockData(ticker.value)
  stockName.value = stock.stockData.shortName
  stockSymbol.value = stock.stockData.symbol
  stockCurrentPrice.value = stock.stockData.currentPrice
})


</script>

<style lang="sass">

</style>