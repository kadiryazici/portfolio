<script lang="ts" setup>
import { useGetters, store, nextPage, previousPage } from '@store';
import { toRefs } from 'vue';

const { canFlipBefore, canFlipNext } = toRefs(useGetters());
</script>

<template>
   <div class="_page">
      <div class="_page-nav">
         <span
            @click="previousPage()"
            class="wrapper"
            role="button"
            v-if="canFlipBefore"
         >
            <button class="button-prev"></button>
            {{ store.tabs[store.currentActivePage - 1][0] }}
         </span>

         <span class="_seperator"></span>

         <span
            @click="nextPage()"
            class="wrapper"
            role="button"
            v-if="canFlipNext"
         >
            {{ store.tabs[store.currentActivePage + 1][0] }}
            <button class="button-next"></button>
         </span>
      </div>
      <slot />
      <div class="_page-count">
         {{ store.currentActivePage + 1 }} / {{ store.tabs.length }}
      </div>
      <div class="_light"></div>
   </div>
</template>

<style lang="scss" scoped>
@use "sass:math";
$rightChevronClipPath: polygon(
   calc(100% - 10px) 0%,
   100% 50%,
   calc(100% - 10px) 100%,
   0% 100%,
   10px 50%,
   0% 0%
);

$leftChevronClipPath: polygon(
   100% 0%,
   calc(100% - 10px) 50%,
   100% 100%,
   10px 100%,
   0% 50%,
   10px 0%
);
._page {
   padding-right: vars.$p * 2;
   padding-bottom: vars.$p * 4;
   padding-left: vars.$p * 7;
   padding-top: vars.$p * 4;
   min-height: 100%;
   min-width: 100%;

   background-image: url(/src/static/notebook_right.png);
   background-size: 100% 100%;
   background-position: 50px top;
   background-repeat: repeat-y;

   ._page-nav {
      width: calc(100% - 50px);
      position: absolute;
      height: 45px;
      top: 0;
      left: 50px;
      align-items: center;
      padding: 0 vars.$p * 3;
      padding-left: vars.$p;
      font-size: vars.$tiny;
      display: none;
      @include mix.forMoreMobile {
         display: flex;
         padding-right: vars.$p;
         color: vars.$blue;
      }

      ._seperator {
         margin: auto;
      }

      .wrapper {
         display: inline-flex;
         align-items: center;
         cursor: pointer;
         .button-prev,
         .button-next {
            width: 15px;
            height: 15px;
            background-color: vars.$blue;
            border: none;
            outline: none;
         }

         .button-prev {
            clip-path: $leftChevronClipPath;
            -webkit-clip-path: $leftChevronClipPath;
            margin-right: math.div(vars.$p, 2);
         }
         .button-next {
            clip-path: $rightChevronClipPath;
            -webkit-clip-path: $rightChevronClipPath;
            margin-left: math.div(vars.$p, 2);
         }
      }
   }

   ._page-count {
      position: absolute;
      bottom: 5px;
      right: 15px;
      font-size: vars.$tiny;
      color: vars.$dark;
   }

   ._light {
      position: absolute;
      left: 50px;
      top: 0;
      width: calc(100% - 50px);
      height: 100%;
      pointer-events: none;
      z-index: 250;
      background-image: url(/src/static/notebook_light.png);
      background-size: 100% 100%;
      background-repeat: no-repeat, no-repeat;
      // opacity: 0.8;
   }
}
</style>
