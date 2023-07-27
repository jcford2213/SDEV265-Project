<template>
  <div>
    <h1>
      {{ username }} Dashboard
    </h1>
    <div v-if="trackedStocks.length > 0" v-for="stock in trackedStocks" class="card">
      <stockCard :ticker="stock" class="card-body"/>
    </div>
    <h2 v-else>You are not currently tracking any stocks</h2>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import stockCard from '@/components/stockCard.vue';

const store = useStore()
const trackedStocks = ref(store.state.user.trackedStocks)
const user = store.state.user.user
const username = ref(user.username)

const router = useRouter()

onBeforeMount(() => {
  // store.dispatch('user/getTrackedStocks')
  // console.log(Object.values(store.state.user.trackedStocks), ' ', store.state.user.trackedStocks.length)
  // If no user is logged in, rerouted to login page
  // if (!currentUser.value) {
  //   router.push('/login')
  // }
})

</script>

<style lang="sass">
  
</style>