<script lang="ts" setup>
import { defineComponent } from 'vue';
import Dot from '/src/static/icons/dot.png';
</script>

<template>
   <div class="_header" role="heading">
      <img :src="Dot" alt="•" class="_dot" />
      <span>
         <slot />
      </span>
   </div>
</template>

<style lang="scss" scoped>
._header {
   font-size: vars.$semiMed;
   font-weight: bold;
   margin-top: vars.$p;
   ._dot {
      width: 15px;
      height: 15px;
      vertical-align: middle;
   }
}
</style>
