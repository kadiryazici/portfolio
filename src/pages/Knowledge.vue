<script lang="tsx">
import Page from '@components/Page/Page.vue';
import Title from '@components/Title/Title.vue';
import { defineComponent } from 'vue';

import KnowledgeIcon from '/src/static/icons/knowledge.png';
import HTMLIcon from '/src/static/technologies/html.png';
import CSSIcon from '/src/static/technologies/css.png';
import TSIcon from '/src/static/technologies/ts.png';
import VueIcon from '/src/static/technologies/vue.png';
import GitIcon from '/src/static/technologies/git.png';
import FigmaIcon from '/src/static/technologies/figma.png';
import NodeIcon from '/src/static/technologies/node.png';
import SCSSIcon from '/src/static/technologies/scss.png';

const KnowledgeData = [
   `img:${HTMLIcon} I type HTML and img:${CSSIcon} CSS since 2014.`,
   `img:${TSIcon} I code JavaScript applications since middle 2017 and TypeScript since 2020.`,
   `img:${VueIcon} I develop Vue applications since mid 2017 and Vue 3 applications since 2020.`,
   `img:${GitIcon} I use Git for version controlling with Github.`,
   `img:${FigmaIcon} I use Figma to create concepts of designs and sketches.`,
   `img:${NodeIcon} I Use Node.js to develop front-end applications with bundlers and I have a bit knowledge about backend development.`,
   `img:${SCSSIcon} I use SCSS to create designs in web applications.`
];

function HandledKnowledgeDetails() {
   return KnowledgeData.map((k) => {
      const splittedData = k.split(' ');
      const handledStrings = splittedData.map((str, index) => {
         if (str.match('img:')) {
            const replaced = str.replace('img:', '');
            const alt = 'coding technology logo';
            return <img src={replaced} class="_logo" alt={alt} />;
         }

         return index > 0 ? ` ${str}` : `${str} `;
      });
      return <p class="pb-3">{handledStrings}</p>;
   });
}

export default defineComponent({
   setup() {
      return () => (
         <Page class="_knowledge">
            <Title icon={KnowledgeIcon} />
            {HandledKnowledgeDetails()}
         </Page>
      );
   }
});
</script>

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
