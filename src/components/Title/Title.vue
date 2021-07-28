<script lang="ts" setup>
import { camelToSpaces } from '@helpers';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
ref: titleName = computed(() => camelToSpaces(route.name as string));

interface Props {
   icon: string;
}
const props = defineProps<Props>();
</script>

<template>
   <div class="_title">
      <div class="_text">{{ titleName }}</div>
      <img v-if="props.icon" width="50" height="50" :src="props.icon" />
   </div>
</template>

<style lang="scss" scoped>
._title {
   font-size: vars.$med;
   color: vars.$red;
   text-align: left;
   position: relative;
   display: flex;
   align-items: center;

   img {
      margin-left: auto;
   }

   ._text {
      position: relative;
      &::after {
         position: absolute;
         bottom: 0px;
         left: -10px;
         content: '';
         width: calc(100% + 25px);
         height: 10px;
         background: url(/src/static/red_underline.png);
         background-size: 100% 100%;
      }
   }
}
</style>
