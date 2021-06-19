<script lang="ts" setup>
import EducationIcon from '/src/static/icons/education.png';
</script>

<template>
   <Page class="_education">
      <Title :icon="EducationIcon">Education</Title>

      <div role="heading" class="_header">
         <img src="/src/static/icons/dot.png" class="_dot" /> Izmit Technical
         and Industrial Vocational High School
      </div>
      <p class="_detail">- from 2016 to 2019</p>

      <div role="heading" class="_header">
         <img src="/src/static/icons/dot.png" class="_dot" /> University
      </div>
      <p class="_detail">- Not yet</p>
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
