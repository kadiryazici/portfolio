<script lang="ts" setup>
import EducationIcon from '/src/static/icons/education.png';
import Dot from '/src/static/icons/dot.png';

interface Study {
   name: string;
   detail: string;
}

const items: Study[] = [
   {
      name: 'Izmit Technical and Industrial Vocational High School',
      detail: 'I started to study here in 2016 and graduated in 2019'
   },
   {
      name: 'University',
      detail: `I don't aim to study a university right now, I'm aiming to improve my frontend skills.`
   }
];
</script>

<template>
   <Page class="_education">
      <Title :icon="EducationIcon">Education</Title>

      <template v-for="{ detail, name } in items">
         <div role="heading" class="_header">
            <img :src="Dot" class="_dot" />
            <span>{{ name }}</span>
         </div>
         <p class="_detail">- {{ detail }}</p>
      </template>
   </Page>
</template>

<style lang="scss" scoped>
._education {
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
