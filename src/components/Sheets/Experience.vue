<script lang="ts" setup>
import ExperienceIcon from '/src/static/icons/work.png';
</script>

<template>
   <Page class="_experience">
      <Title :icon="ExperienceIcon">Experience</Title>
      <p>
         I generally gave myself some homeworks and tried to finish them. I had
         some little jobs in my life but I will list here the big jobs I had.
      </p>

      <div role="heading" class="_header">
         <img src="/src/static/icons/dot.png" class="_dot" /> Atlantic
         International Technology
      </div>
      <p class="_detail">
         - <a class="_link" href="https://atlantic.es">atlantic.es</a>
         <br />
         - from 06/2019 to 09/2019 - Spain/Sevilla
      </p>
      <p>
         I was intern in this company. I made some designs for their websites
         and created user interfaces for clients.
      </p>

      <div role="heading" class="_header">
         <img src="/src/static/icons/dot.png" class="_dot" /> House in Korea
         Seoul
      </div>
      <p class="_detail">
         - <a class="_link" href="https://hikseoul.com">hikseoul.com</a>
         <br />
         - from 12/2019 to 05/2021 - Freelance
      </p>
      <p>
         I created whole UI and UX without using any library in this website. I
         made what client wanted. Custom modals, custom selects. I had a really
         nice experience in this project.
      </p>
   </Page>
</template>

<style lang="scss" scoped>
._experience {
   text-align: left;
   ._dot {
      width: 15px;
      height: 15px;
      vertical-align: middle;
   }

   ._header {
      font-size: vars.$small;
      font-weight: bold;
      margin-top: vars.$p;
   }

   ._detail {
      margin: 0;
   }
}
</style>
