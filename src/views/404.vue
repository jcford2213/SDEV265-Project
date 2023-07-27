<template>
  <div id="404-container">
    <h1>404 {{ path }} Not Found</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const path = ref(route.path)
</script>

<style>

</style>