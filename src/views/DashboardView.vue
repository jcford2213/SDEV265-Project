<template>
  <div>
    <h1>
      {{ currentUser }} Dashboard
    </h1>
  </div>
</template>

<script setup>
import { onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore()
const currentUser = computed(() => store.state.currentUser)

const router = useRouter()

onBeforeMount(() => {
  console.log(currentUser.value)
  // If no user is logged in, rerouted to login page
  if (!currentUser.value) {
    router.push('/login')
  }
})

</script>

<style lang="sass">
  
</style>