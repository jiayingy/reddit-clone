import Vue from 'vue';
import EntryList from '@/components/EntryList';

// Set up EntryGenerator component
const EntryListConstructor = Vue.extend(EntryList);
const entrylist = new EntryListConstructor().$mount();

describe('EntryList.vue', () => {
  context('when given a list of entries with different number of votes', () => {
    it('should sort entries in descreasing order according to number of votes', () => {
      expect().to.equal();
    });
  });
});
