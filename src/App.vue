<template>
   <router-view> </router-view>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { watchEffect } from 'vue';
import { store, updatePage } from '@store';

const router = useRouter();
const route = useRoute();

const params = route.params;
if (params.page) {
   if (typeof params.page === 'string') {
      const num = parseInt(params.page);
      if (num < 0 || num > store.tabs.length - 1) {
         router.push({
            name: 'SpesificPage',
            params: {
               page: store.currentActivePage
            }
         });
      } else {
         updatePage(num);
         router.push({
            name: 'SpesificPage',
            params: {
               page: store.currentActivePage
            }
         });
      }
   }
}

watchEffect(() => {
   router.push({
      name: 'SpesificPage',
      params: {
         page: store.currentActivePage
      }
   });
});
</script>

<style lang="scss">
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Kalam', cursive;
   -webkit-tap-highlight-color: transparent;
}

body {
   overscroll-behavior: none;
}

#app {
   min-height: 100vh;
   overflow: hidden;
   display: flex;
   background-color: vars.$white;
   padding: 0 vars.$p;
   color: vars.$dark;

   @include mix.forMoreMobile {
      padding: 0;
   }
}

p {
   font-size: calc(#{vars.$tiny} + 2px);
   display: block;
   margin: vars.$p 0;
   text-align: left;
}

.anim-flip-in,
.anim-flip-out {
   transform-origin: 50px 50%;
   position: absolute;
   left: 0;
   top: 0;
   backface-visibility: hidden;
   -webkit-backface-visibility: hidden;
   z-index: 10;
}

.anim-flip-in {
   animation: flipIn 0.35s ease-out;
}
.anim-flip-out {
   animation: flipIn 0.35s ease-out reverse;
}

@keyframes flipIn {
   0% {
      transform: rotateY(-90deg);
   }
   100% {
      transform: rotateY(0deg);
   }
}

// a mini trick for Vue transition to wait
.anim-opacity-out,
.anim-opacity-in {
   --from: 1;
   --to: 0.95;
   animation: animOpacity 0.35s ease-out;
   // position: absolute;
}
@keyframes animOpacity {
   0% {
      opacity: var(--from);
   }
   100% {
      opacity: var(--to);
   }
}

._link,
._link:visited {
   color: vars.$blue;
   text-decoration: underline;
   &:hover {
      color: darken(vars.$green, 1.5);
   }
}
</style>
