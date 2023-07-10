<template>
  <div class="home">
    <basic-stock-information>
      <template v-slot:companyName>
        {{ currentTickerData.shortName }}
      </template>
      <template v-slot:symbol>
        {{ currentTickerData.symbol }}
      </template>
      <template v-slot:currentPrice>
        {{ currentTickerData.currentPrice }}
      </template>
    </basic-stock-information>
  </div>
</template>

<script setup>
import { inject, watch, reactive, toRefs } from 'vue'

import basicStockInformation from '../components/basicStockInformation.vue'


const globalStore = inject('globalStore')
// Initialize reactive stockState with globalStore currentStock data
const stockState = reactive({
  currentTickerData: globalStore.currentStock
})

// Convert reactive stockState to refs for use in template
const { currentTickerData } = toRefs(stockState)

watch(
  () => globalStore.currentStock,
  (newStockData) => {
    stockState.currentTickerData = newStockData
  }
)




</script>