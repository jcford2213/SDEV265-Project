<template>
  <div>
    <h1>
      {{ username }} Dashboard
    </h1>
    <div id="dashboard-stocks-list">
      <div v-if="areThereStocks" v-for="stock in trackedStocks" class="card">
        <stockCard :ticker="stock" class="card-body"/>
      </div>
      <h2 v-else>You are not currently tracking any stocks</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import stockCard from '@/components/stockCard.vue';


// Getr current state
const store = useStore()

// Get user's tracked stocks
const trackedStocks = ref(store.state.user.trackedStocks)
console.log(trackedStocks.value)
const areThereStocks = computed(() => trackedStocks.value.length > 0)
console.log(areThereStocks.value)
const user = store.state.user.user
const username = ref(user.username)

</script>

<style lang="sass">
  #dashboard-stocks-list
    display: flex
    flex-direction: column
    row-gap: 1.5rem

  @media screen and (min-width: 600px) 
    #dashboard-stocks-list
      display: grid
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
      grid-gap: 1.5rem
</style>