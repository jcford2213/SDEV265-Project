<template>
  <div>
    <h1>
      {{ username }} Dashboard
    </h1>
    <div>
      <h2 v-if="trackedStocks.length > 0">{{ trackedStocks }}</h2>
      <h2 v-else>You are not currently tracking any stocks</h2>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

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