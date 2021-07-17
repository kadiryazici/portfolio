<script lang="ts" setup>
import ExperienceIcon from '/src/static/icons/work.png';
import Dot from '/src/static/icons/dot.png';

const Atlantic = {
   name: 'Atlantic International Technology',
   website: 'atlantic.es',
   info: 'from 06/2019 to 09/2019 - Spain/Sevilla',
   detail: `I was intern in this company. I made some designs for their websites and created user interfaces for clients.`
};

const HIK = {
   name: 'House in Korea Seoul',
   website: 'hikseoul.com',
   info: 'from 12/2019 to 05/2021 - Freelance',
   detail:
      'I created whole UI and UX without using any library in this website. I made what client wanted. Custom modals, custom selects. I had a really nice experience in this project.'
};

const items = [Atlantic, HIK];
</script>

<template>
   <Page class="_experience">
      <Title :icon="ExperienceIcon">Experience</Title>
      <p>
         I generally gave myself some homeworks and tried to finish them. I had
         some little jobs in my life but I will list here the big jobs I had.
      </p>

      <template v-for="item in items">
         <div role="heading" class="_header">
            <img :src="Dot" class="_dot" /> {{ item.name }}
         </div>
         <p class="_detail">
            <a
               target="_blank"
               class="_link"
               :href="`https://${item.website}`"
               v-text="'- Website'"
            />
            <br />
            <span>- {{ item.info }}</span>
         </p>
         <p>{{ item.detail }}</p>
      </template>
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
