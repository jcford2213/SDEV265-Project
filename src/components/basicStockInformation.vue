<template>
  <div id="stock-information-container">
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

</script>

<style lang="sass">

</style>