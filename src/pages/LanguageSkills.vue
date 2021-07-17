<script lang="ts" setup>
import LanguageIcon from '/src/static/icons/language.png';

const pageData = [
   [
      'English',
      'I speak english at B2 level. I can talk to people and describe my willings and understand theirs. I can read documentation of libraries without any issue. I can watch English code teaching videos.'
   ],
   [
      'Turkish', // phych prettier
      'Turkish is my main language.'
   ]
];
</script>

<template>
   <Page class="_skills">
      <Title :icon="LanguageIcon" />

      <template :key="name" v-for="[name, detail] in pageData">
         <Heading>{{ name }}</Heading>
         <p class="_detail">{{ detail }}</p>
      </template>
   </Page>
</template>

<style lang="scss" scoped>
._skills {
   ._detail {
      margin-bottom: vars.$p * 3;
   }
}
</style>
