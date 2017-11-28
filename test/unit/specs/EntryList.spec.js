import Vue from 'vue';
import EntryList from '@/components/EntryList';

// Set up EntryGenerator component
const EntryListConstructor = Vue.extend(EntryList);
const entrylist = new EntryListConstructor().$mount();

const maxEntries = 5;

describe('EntryList.vue', () => {
  // Create a hashmap with 5 entries
  entrylist.value = {};

  for (let i = 0; i < maxEntries; i += 1) {
    entrylist.$set(entrylist.value, i, {
      id: i,
      title: `this is a title ${i}`,
      numVotes: i,
    });
  }

  context('when given a hashmap of entries with different number of votes', () => {
    it('should return an array of entries containing the same title and votes', () => {
      const arr = entrylist.results;

      for (let i = 0; i < maxEntries; i += 1) {
        expect(arr[i].title).to.equal(`this is a title ${i}`);
        expect(arr[i].numVotes).to.equal(i);
      }
    });

    it('should return an array of entries sorted by number of votes in descending order', () => {
      const arr = entrylist.popularTitles;

      for (let i = 0; i < maxEntries; i += 1) {
        expect(arr[i].title).to.equal(`this is a title ${maxEntries - i - 1}`);
        expect(arr[i].numVotes).to.equal(maxEntries - i - 1);
      }
    });

    it('should return an array of entries from newest to oldest', () => {
      const arr = entrylist.newTitles;

      for (let i = 0; i < maxEntries; i += 1) {
        expect(arr[i].title).to.equal(`this is a title ${maxEntries - i - 1}`);
        expect(arr[i].numVotes).to.equal(maxEntries - i - 1);
      }
    });
  });
});
