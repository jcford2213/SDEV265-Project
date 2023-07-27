<template>
  <div id="stock-information-container">
    <track-stock-button />
    <h1>
      <slot name="companyName"></slot>
      (<slot name="symbol"></slot>)
    </h1>
    <h2>
      <slot name="currentPrice"></slot>
    </h2>
  </div>
</template>

<script setup>
import trackStockButton from './trackStockButton.vue';

</script>

<style>

</style>