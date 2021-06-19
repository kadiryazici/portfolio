<script lang="ts" setup>
import Notebook from '@components/Notebook/Notebook.vue';
</script>

<template>
   <div class="_home">
      <Notebook />
   </div>
</template>

<style lang="scss" scoped>
._home {
   @include mix.forMoreMobile {
      margin: 0;
   }

   width: 100%;
   display: flex;
   flex-flow: row wrap;
   justify-content: center;
   align-items: flex-start;
   align-content: flex-start;
   min-height: 100%;
   max-width: 1000px;
   margin: vars.$p auto;
   box-shadow: vars.$shadow;

   background: url('/src/static/background.jpg') repeat;
}
</style>
