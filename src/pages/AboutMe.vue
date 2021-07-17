<script lang="ts" setup>
import AboutIcon from '/src/static/icons/about.png';
import KadirPhoto from '/src/static/me.png';
import PageMarkdown from '/src/markdowns/AboutMe.md';
</script>

<template>
   <Page class="_about-me">
      <Title :icon="AboutIcon" />
      <PageMarkdown />
      <div class="_image">
         <img class="_img" :src="KadirPhoto" />
         <div class="_image_title">Kadir Photography</div>
      </div>
   </Page>
</template>

<style lang="scss" scoped>
$imageClipPath: polygon(
   0% 0%,
   7% 12%,
   3% 23%,
   13% 31%,
   7% 39%,
   16% 45%,
   4% 54%,
   14% 64%,
   3% 69%,
   13% 76%,
   7% 85%,
   15% 89%,
   8% 92%,
   13% 100%,
   100% 100%,
   94% 94%,
   95% 88%,
   91% 80%,
   85% 78%,
   90% 74%,
   90% 67%,
   86% 61%,
   94% 60%,
   93% 52%,
   89% 48%,
   84% 43%,
   91% 38%,
   86% 35%,
   93% 31%,
   87% 26%,
   95% 25%,
   90% 16%,
   95% 12%,
   89% 5%,
   100% 0
);
._about-me {
   text-align: center;

   ._image {
      background-color: white;
      padding-left: vars.$p;
      padding-right: vars.$p;
      padding-top: vars.$p;
      box-shadow: vars.$shadow;
      display: inline-block;
      margin-top: vars.$p * 2;
      transform: rotate(-8deg);
      position: relative;
      max-width: 100%;
      width: 250px;
      ._img {
         max-width: 100%;
      }

      &::after,
      &::before {
         content: '';
         position: absolute;
         width: 45px;
         height: 15px;
         background-color: rgba(rgb(122, 124, 87), 0.3);
         transform: rotate(45deg);
         clip-path: $imageClipPath;
         -webkit-clip-path: $imageClipPath;
      }

      &::before {
         bottom: -2px;
         left: -20px;
      }

      &::after {
         top: -5px;
         right: -20px;
         transform: rotate(225deg);
      }

      ._image_title {
         text-align: right;
      }
   }
}
</style>
