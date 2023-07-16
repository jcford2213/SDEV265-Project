<template>
  <div class="home">
    <company-information>
      <template v-slot:companyName>
        {{ currentStock.shortName }}
      </template>
      <template v-slot:symbol>
        {{ currentStock.symbol }}
      </template>
      <template v-slot:currentPrice>
        {{ currentStock.currentPrice }}
      </template>
    </company-information>
  </div>
</template>

<script setup>
import { watch, onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import companyInformation from '../components/companyInformation.vue'
// import getStockData from '../methods/getStockData.js'

// Get state
const store = useStore()
const currentStock = computed(() => store.state.currentStock)

// References the current route
const route = useRoute()

onBeforeMount(() => {
  // Call server with current route ticker url variable stocks/:ticker
  store.dispatch('getStockData', route.params.ticker)
})

// When route changes, update currentStock state
watch(
  () => route.params.ticker,
  (newTicker) => {
    store.dispatch('getStockData', newTicker)
  }
)

</script>