<script lang="ts" setup>
import ContactIcon from '/src/static/icons/contact.png';
</script>

<template>
   <Page class="_contact">
      <Title :icon="ContactIcon">Contact</Title>
      <p>You can contact and find me via those platforms.</p>
      <p>
         <img src="/src/static/contact/email.png" class="_logo" />
         Mail:
         <a href="mailto:kadir_yazici@yahoo.com" class="_link"
            >kadir_yazici@yahoo.com</a
         >
      </p>
      <p>
         <img src="/src/static/contact/instagram.png" class="_logo" />
         İnstagram:
         <a href="https://instagram.com/https.kadiryazici" class="_link"
            >https.kadiryazici</a
         >
      </p>
      <p>
         <img src="/src/static/contact/youtube.png" class="_logo" />
         Youtube:
         <a href="https://youtube.com/c/vierone" class="_link">/c/vierone</a>
      </p>
      <p>
         <img src="/src/static/contact/github.png" class="_logo" />
         Github:
         <a href="https://github.com/kadiryazici" class="_link">/kadiryazici</a>
      </p>
   </Page>
</template>

<style lang="scss" scoped>
._contact {
   opacity: 1;
   ._logo {
      width: 40px;
      height: 40px;
      vertical-align: middle;
   }
}
</style>
