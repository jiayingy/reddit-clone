import Vue from 'vue';
import Page from '@/components/Page';

// Set up EntryGenerator component
const PageConstructor = Vue.extend(Page);
const page = new PageConstructor().$mount();

describe('Page.vue', () => {
  context('when adding a valid title', () => {
  });
});
