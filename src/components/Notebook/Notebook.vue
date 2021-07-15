<script lang="ts" setup>
import { store, updatePage } from '@store';
import { onMounted, watch } from 'vue';
import anime from 'animejs';

ref: notebook = null as HTMLDivElement | null;
ref: notebookOldHeight = 0;
watch(
   () => store.currentActivePage,
   () => {
      notebookOldHeight = notebook!.offsetHeight;
   },
   { flush: 'pre' }
);
watch(
   () => store.currentActivePage,
   () => {
      const currentHeight = notebook!.offsetHeight;
   },
   { flush: 'pre' }
);

onMounted(() => {
   notebookOldHeight = notebook!.offsetHeight;
});
</script>

<template>
   <div class="_notebook-wrapper">
      <div ref="notebook" class="_notebook">
         <div class="_content">
            <transition
               :leaveActiveClass="
                  store.oldActivePage < store.currentActivePage
                     ? 'anim-flip-out'
                     : 'anim-opacity-out'
               "
               :enterActiveClass="
                  store.oldActivePage > store.currentActivePage
                     ? 'anim-flip-in'
                     : 'anim-opacity-in'
               "
            >
               <component :is="store.tabs[store.currentActivePage][1]" />
            </transition>
         </div>

         <div class="_stickers">
            <div
               role="button"
               class="_sticker"
               :data-test="name"
               v-for="([name, comp], index) in store.tabs"
               :class="{ active: store.currentActivePage === index }"
               @click="updatePage(index)"
            >
               {{ name }}
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
._notebook-wrapper {
   width: 100%;
   padding: vars.$p * 4 vars.$p;
   display: flex;
   flex-flow: row nowrap;
   position: relative;
   justify-content: center;

   @include mix.forMobile {
      & {
         justify-content: flex-start;
      }
   }
   @include mix.forMoreMobile {
      & {
         justify-content: center;
         padding: vars.$p vars.$p vars.$p 0;
      }
   }

   ._notebook {
      @include mix.forMoreMobile {
         & {
            transform: rotate(0deg);
            width: calc(100% + 50px);
            flex-shrink: 0;
            // transform: translateX(-25px);
            max-width: 100%;
         }
      }
      width: 100%;
      max-width: 500px;

      // background-color: vars.$white;
      filter: drop-shadow(vars.$dropShadow);
      background-image: url(/src/static/notebook_left.png),
         url(/src/static/notebook_right.png);
      background-size: 50px, 100% 100%;
      background-position: left top, 50px 0px;
      background-repeat: repeat-y;
      transform: rotate(-2deg);
      position: relative;
      display: flex;
      ._content {
         min-height: 650px;
         max-height: 2000px;
         transition: max-height 0.35s;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;

         perspective: 1000px;
      }

      ._stickers {
         @include mix.forMoreMobile {
            & {
               display: none;
            }
         }

         display: flex;
         align-items: flex-start;
         align-content: center;
         justify-content: center;
         position: absolute;
         // width: 50px;
         // height: 100%;
         right: 0px;
         transform: translateX(100%);
         filter: drop-shadow(vars.$dropShadow);
         flex-flow: column wrap;

         ._sticker {
            margin: vars.$p 0;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 vars.$p * 2 + 5px 0 vars.$p * 2;
            background-color: vars.$blue;
            cursor: pointer;
            overflow: hidden;
            font-weight: bold;
            font-size: vars.$tiny;
            clip-path: polygon(
               100% 0%,
               calc(100% - 10px) 50%,
               100% 100%,
               0px 100%,
               0% 50%,
               0px 0%
            );

            position: relative;
            transition: clip-path 0.35s,
               transform 0.35s cubic-bezier(0.96, -1.15, 0.19, 1.97);

            &::after {
               content: '';
               position: absolute;
               top: 0;
               right: calc(-100% + 15px);
               transition: all 0.35s;
               height: 100%;
               width: 100%;
               background-color: vars.$white;
               clip-path: polygon(
                  100% 0%,
                  calc(100% - 10px) 50%,
                  100% 100%,
                  10px 100%,
                  0% 50%,
                  10px 0%
               );
               z-index: -1;
            }
            &.active {
               // background-color: vars.$white;
               clip-path: polygon(
                  100% 0%,
                  calc(100% - 10px) 50%,
                  100% 100%,
                  10px 100%,
                  0% 50%,
                  10px 0%
               );
               transform: translateX(-15px);
               &::after {
                  // background-color: vars.$blue;
                  right: auto;
                  right: -5px;
               }
            }
         }
      }
   }
}
</style>
