import Vue from 'vue';
import EntryList from '@/components/EntryList';

// Set up EntryGenerator component
const EntryListConstructor = Vue.extend(EntryList);
const entrylist = new EntryListConstructor().$mount();

describe('EntryList.vue', () => {
  context('when given a hashmap of entries with different number of votes', () => {
    it('should return an array of entries containing the same title and votes', () => {
      entrylist.value = {};

      for (let i = 0; i < 5; i += 1) {
        entrylist.$set(entrylist.value, i, {
          id: i,
          title: `this is a title ${i}`,
          numVotes: i,
        });
      }

      const arr = entrylist.results;

      for (let i = 0; i < 5; i += 1) {
        expect(arr[i].title).to.equal(`this is a title ${i}`);
        expect(arr[i].numVotes).to.equal(i);
      }
    });
  });
});
