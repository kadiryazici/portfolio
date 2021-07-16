<script lang="ts" setup>
import LanguageIcon from '/src/static/icons/language.png';
</script>

<template>
   <Page class="_skills">
      <Title :icon="LanguageIcon">Language Skills</Title>
      <div role="heading" class="_header">
         <img src="/src/static/icons/dot.png" class="_dot" /> English
      </div>
      <p>
         I speak english at B2 level. I can talk to people and describe my
         willings and understand theirs. I can read documentation of libraries
         without any issue. I can watch English code teaching videos.
      </p>

      <div role="heading" class="_header">
         <img src="/src/static/icons/dot.png" class="_dot" /> Turkish
      </div>
      <p>Turkish is my main language.</p>
   </Page>
</template>

<style lang="scss" scoped>
._skills {
   opacity: 1;
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
}
</style>
