<template>
  <div class="home">
    <company-information>
      <template v-slot:companyName>
        {{ stockName }}
      </template>
      <template v-slot:symbol>
        {{ stockSymbol }}
      </template>
      <template v-slot:currentPrice>
        {{ stockCurrentPrice }}
      </template>
    </company-information>
    <div id="model-image-container">
      <img id="time-series-model" :src="`data:image/jpeg;base64, ${stockWeeklyModel.ar}`" alt="Model of Stock Time Series Analysis">
    </div>
    <p>{{ stockAboutCompany }}</p>
  </div>
</template>

<script setup>
import { watch, onBeforeMount, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import companyInformation from '../components/companyInformation.vue'
import getStockData from '../utils/getStockData.js'

// References the current route
const route = useRoute()

// Define stock properties
const stockName = ref('')
const stockSymbol = ref('')
const stockCurrentPrice = ref('')
const stockAboutCompany = ref('')
const stockWeeklyModel = ref({})
const stockMonthlyModel = ref({})

const mountStockValues = async (route) => {
  const stock = await getStockData(route)
  stockName.value = stock.stockData.shortName
  stockSymbol.value = stock.stockData.symbol
  stockCurrentPrice.value = stock.stockData.currentPrice
  stockAboutCompany.value = stock.stockData.longBusinessSummary
  stockWeeklyModel.value = reactive(stock.weeklyModel)
  stockMonthlyModel.value = reactive(stock.monthlyModel)
}

onBeforeMount(() => {
  // Call server with current route ticker url variable stocks/:ticker
  mountStockValues(route.params.ticker)
})

// When route changes, update currentStock state
watch(
  () => route.params.ticker,
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