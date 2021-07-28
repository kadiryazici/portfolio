<script lang="ts" setup>
import EducationIcon from '/src/static/icons/education.png';

const items = [
   [
      'Izmit Technical and Industrial Vocational High School',
      'I started to study here in 2016 and graduated in 2019'
   ],
   [
      'University',
      `I don't aim to study a university right now, I'm aiming to improve my frontend skills.`
   ]
];
</script>

<template>
   <Page class="_education">
      <Title :icon="EducationIcon" />

      <template v-for="[name, detail] in items">
         <Heading>{{ name }}</Heading>
         <p class="mb-5 mt-0">- {{ detail }}</p>
      </template>
   </Page>
</template>
