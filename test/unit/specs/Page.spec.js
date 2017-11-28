import Vue from 'vue';
import Page from '@/components/Page';

// Set up EntryGenerator component
const PageConstructor = Vue.extend(Page);
const page = new PageConstructor().$mount();

describe('Page.vue', () => {
  context('when adding a valid title', () => {
    it('should increase length of entries by 1', () => {
      // Get initial number of entries
      const initialNumEntries = Object.keys(page.entries).length;

      // Create entry object to be added in
      const entryObj = {
        title: 'this is a test title',
        numVotes: 0,
      };

      // Add new title to entries
      page.addNewTitle(entryObj);

      // Get number of entries after adding
      const numEntries = Object.keys(page.entries).length;

      expect(numEntries).to.equal(initialNumEntries + 1);
    });
  });
});
