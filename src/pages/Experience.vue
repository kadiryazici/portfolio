<script lang="ts" setup>
import ExperienceIcon from '/src/static/icons/work.png';

interface Job {
   name: string;
   website: string;
   info: string;
   detail: string;
}

const Seo_do = {
   name: 'Seo.do',
   website: 'https://seo.do',
   info: 'working since 09/2021',
   detail: `I'm currently working at this company as frontend developer.`
};

const Atlantic: Job = {
   name: 'Atlantic International Technology',
   website: 'https://atlantic.es',
   info: 'from 06/2019 to 09/2019 - Spain/Sevilla',
   detail: `I was intern in this company. I made some designs for their websites and created user interfaces for clients.`
};

const HIK: Job = {
   name: 'House in Korea Seoul',
   website: 'https://hikseoul.com',
   info: 'from 12/2019 to 05/2021 - Freelance',
   detail:
      'I created whole UI and UX without using any library in this website. I made what client wanted. Custom modals, custom selects. I had a really nice experience in this project.'
};

const items = [Seo_do, Atlantic, HIK] as Job[];
</script>

<template>
   <Page class="_experience">
      <Title :icon="ExperienceIcon" />
      <template v-for="item in items">
         <Heading>&nbsp;{{ item.name }}</Heading>
         <p class="_detail">
            <a target="_blank" class="_link" :href="item.website">- Website</a>
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
   ._detail {
      margin: 0;
   }
}
</style>
