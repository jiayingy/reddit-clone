import Vue from 'vue';
import EntryGenerator from '@/components/EntryGenerator';

// Set up EntryGenerator component
const EntryGeneratorConstructor = Vue.extend(EntryGenerator);
const eg = new EntryGeneratorConstructor().$mount();

describe('EntryGenerator.vue', () => {
  context('when adding a valid title with button click', () => {
    it('should emit an object containing the same title and numvotes', () => {
      const title = 'a test title';
      const votes = 5;

      eg.newTitle = title;
      eg.numVotes = votes;

      let emittedObjTitle;
      let emittedObjVotes;

      eg.$on('addNewTitle', (obj) => {
        emittedObjTitle = obj.title;
        emittedObjVotes = obj.numVotes;
      });

      eg.$el.querySelector('button').click();
      expect(emittedObjTitle).to.equal(title);
      expect(emittedObjVotes).to.equal(votes);
    });
  });
});
