<script lang="ts" setup>
import ExperienceIcon from '/src/static/icons/work.png';

interface Job {
   name: string;
   website: string;
   info: string;
   detail: string;
}

const Wope = {
   name: 'Wope',
   website: 'https://wope.com',
   info: 'working since 09/2021',
   detail: `As a front-end-developer`
};

const Atlantic: Job = {
   name: 'Atlantic International Technology',
   website: 'https://atlantic.es',
   info: 'from 06/2019 to 09/2019',
   detail: `I was intern in this company as a junior WordPress enjoyer.`
};

const HIK: Job = {
   name: 'House in Korea Seoul',
   website: 'https://hikseoul.com',
   info: 'from 12/2020 to 05/2021 - Freelance',
   detail:
      'A freelance project I worked on, it was about to search and select houses from map, it is not in the picture anymore (sad).'
};

const items = [Wope, Atlantic, HIK] as Job[];
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
