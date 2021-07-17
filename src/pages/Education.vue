<script lang="ts" setup>
import EducationIcon from '/src/static/icons/education.png';
import Dot from '/src/static/icons/dot.png';

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
         <div role="heading" class="_header">
            <Heading>{{ name }}</Heading>
         </div>
         <p class="_detail">- {{ detail }}</p>
      </template>
   </Page>
</template>

<style lang="scss" scoped>
._education {
   text-align: left;
   ._detail {
      margin: 0;
      margin-bottom: vars.$p * 3;
   }
}
</style>
