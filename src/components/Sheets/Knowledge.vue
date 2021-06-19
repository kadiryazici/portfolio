<script lang="ts" setup>
import KnowledgeIcon from '/src/static/icons/knowledge.png';
</script>

<template>
   <Page class="_knowledge">
      <Title :icon="KnowledgeIcon">Knowledge</Title>
      <p>
         <img src="/src/static/technologies/html.png" class="_logo" />
         I type HTML and
         <img src="/src/static/technologies/css.png" class="_logo" />CSS since
         2014
      </p>
      <p>
         <img src="/src/static/technologies/ts.png" class="_logo" />
         I develop JavaScript applications since middle 2017 and I love
         TypeScript.
      </p>
      <p>
         <img src="/src/static/technologies/vue.png" class="_logo" />
         I develop Vue applications since 2018 and Vue 3 applications since
         middle 2020. I love Vue 3 more than Vue 2.
      </p>
      <p>
         <img src="/src/static/technologies/git.png" class="_logo" />
         I use Git for version control.
      </p>
      <p>
         <img src="/src/static/technologies/figma.png" class="_logo" />
         I use Figma to create sketches and designes.
      </p>
      <p>
         <img src="/src/static/technologies/node.png" class="_logo" />
         I use Node.js to create basic servers and for frontend development.
      </p>
      <p>
         <img src="/src/static/technologies/scss.png" class="_logo" />
         I use SCSS instead of CSS, it has a lot of feature those I like to use.
         I am a beginner of it currently (05/2021).
      </p>
   </Page>
</template>

<style lang="scss" scoped>
._knowledge {
   opacity: 1;
   ._logo {
      width: 40px;
      height: 40px;
      vertical-align: middle;
   }
}
</style>
