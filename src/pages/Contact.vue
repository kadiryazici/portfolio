<script lang="ts" setup>
import ContactIcon from '/src/static/icons/contact.png';
import ImgEmail from '/src/static/contact/email.png';
import ImgInstagram from '/src/static/contact/instagram.png';
import ImgYoutube from '/src/static/contact/youtube.png';
import ImgGithub from '/src/static/contact/github.png';

interface Item {
   name: string;
   link: string;
   displayLink: string;
   img: string;
}

const Email: Item = {
   displayLink: 'kadir_yazici@yahoo.com',
   img: ImgEmail,
   link: 'mailto:kadir_yazici@yahoo.com',
   name: 'Mail'
};
const Instagram: Item = {
   displayLink: '/https.kadiryazici',
   img: ImgInstagram,
   link: 'https://instagram.com/https.kadiryazici',
   name: 'Instagram'
};
const Youtube: Item = {
   displayLink: '/c/vierone',
   img: ImgYoutube,
   link: 'https://youtube.com/c/vierone',
   name: 'Youtube'
};
const Github: Item = {
   displayLink: '/kadiryazici',
   img: ImgGithub,
   link: 'https://github.com/kadiryazici',
   name: 'Github'
};

const items = [Email, Instagram, Youtube, Github] as Item[];
</script>

<template>
   <Page class="_contact">
      <Title :icon="ContactIcon" />

      <p>You can contact and find me via those platforms.</p>
      <p v-for="item in items" :key="item.link">
         <img :src="item.img" class="_logo" />
         <span>{{ item.name }}: </span>
         <a target="_blank" :href="item.link" class="_link">{{ item.displayLink }}</a>
      </p>
   </Page>
</template>

<style lang="scss" scoped>
._contact {
   ._logo {
      width: 40px;
      height: 40px;
      @apply align-middle mr-2;
   }
}
</style>
