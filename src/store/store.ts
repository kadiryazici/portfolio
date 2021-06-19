import { reactive, markRaw, defineAsyncComponent, computed } from 'vue';

const AboutMe = defineAsyncComponent(
   () => import('@components/Sheets/AboutMe.vue')
);
const Experience = defineAsyncComponent(
   () => import('@components/Sheets/Experience.vue')
);
const Knowledge = defineAsyncComponent(
   () => import('@components/Sheets/Knowledge.vue')
);
const LanguageSkills = defineAsyncComponent(
   () => import('@components/Sheets/LanguageSkills.vue')
);
const Contact = defineAsyncComponent(
   () => import('@components/Sheets/Contact.vue')
);
const Education = defineAsyncComponent(
   () => import('@components/Sheets/Education.vue')
);

type Tabs = [
   string,
   (
      | typeof AboutMe
      | typeof Experience
      | typeof Knowledge
      | typeof LanguageSkills
      | typeof Contact
      | typeof Education
   )
][];

export const store = reactive({
   oldActivePage: 0,
   currentActivePage: 0,
   tabs: [
      ['About Me', markRaw(AboutMe)],
      ['Experience', markRaw(Experience)],
      ['Education', markRaw(Education)],
      ['Knowledge', markRaw(Knowledge)],
      ['Language Skills', markRaw(LanguageSkills)],
      ['Contact', markRaw(Contact)]
   ] as Tabs
});

export const useGetters = () =>
   reactive({
      canFlipNext: computed(() => {
         const active = store.currentActivePage;
         const length = store.tabs.length;
         return active < length - 1;
      }),
      canFlipBefore: computed(() => {
         const active = store.currentActivePage;
         return active > 0;
      })
   });

export async function updatePage(index: number) {
   if (store.currentActivePage !== index) {
      store.oldActivePage = store.currentActivePage;
      store.currentActivePage = index;
   }
}

export function nextPage() {
   if (store.currentActivePage + 1 < store.tabs.length) {
      updatePage(store.currentActivePage + 1);
   }
}

export function previousPage() {
   if (store.currentActivePage > 0) {
      updatePage(store.currentActivePage - 1);
   }
}
