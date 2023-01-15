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
         Can watch The Office without subtitles, able to read documentations and can
         speak at level B2.
      </p>

      <Heading>Turkish</Heading>
      <p>git checkout main</p>
   </Page>
</template>
