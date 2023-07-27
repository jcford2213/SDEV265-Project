<template>
  <div class="home">
    <track-stock-button :ticker="currentTicker"/>
    <h1>
      {{ stockName }}
    </h1>
    <h1>
      {{ stockSymbol }}
    </h1> 
    <h2>
      {{ stockCurrentPrice }}
    </h2>
    <div id="model-image-container">
      <img id="time-series-model" :src="`data:image/jpeg;base64, ${stockWeeklyModel.ar}`" alt="Model of Stock Time Series Analysis">
    </div>
    <p>{{ stockAboutCompany }}</p>
  </div>
</template>

<script setup>
import { watch, onBeforeMount, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import getAllStockData from '../utils/getAllStockData.js'
import trackStockButton from '@/components/trackStockButton.vue';

// References the current route
const route = useRoute()
const currentTicker = ref(route.params.ticker)

// Define stock properties
const stockName = ref('')
const stockSymbol = ref('')
const stockCurrentPrice = ref('')
const stockAboutCompany = ref('')
const stockWeeklyModel = ref({})
const stockMonthlyModel = ref({})


const mountStockValues = async (route) => {
  const stock = await getAllStockData(route)
  stockName.value = stock.stockData.shortName
  stockSymbol.value = stock.stockData.symbol
  stockCurrentPrice.value = stock.stockData.currentPrice
  stockAboutCompany.value = stock.stockData.longBusinessSummary
  stockWeeklyModel.value = reactive(stock.weeklyModel)
  stockMonthlyModel.value = reactive(stock.monthlyModel)
}

onBeforeMount(() => {
  // Call server with current route ticker url variable stocks/:ticker
  mountStockValues(currentTicker.value)
})

// When route changes, update currentStock state
watch(
  () => currentTicker.value,
  (newTicker) => {
    mountStockValues(newTicker)
  }
)
</script>

<style lang="sass">
#model-image-contianer
  width: 100%
#time-series-model
  width: 100%
  height: auto
  
</style>