<script lang="ts" setup>
import LanguageIcon from '/src/static/icons/language.png';
</script>

<style lang="scss" scoped>
.markdown-body {
   height: 100%;
}
</style>

<template>
   <Page>
      <Title :icon="LanguageIcon" />
      <Heading>English</Heading>
      <p>
         I speak english at B2 level. I can talk to people and describe my willings and understand
         theirs. I can read documentation of libraries without any issue. I can watch English code
         teaching videos.
      </p>

      <Heading>Turkish</Heading>
      <p>Turkish is my native language.</p>
   </Page>
</template>
