import Vue from 'vue';
import EntryGenerator from '@/components/EntryGenerator';

// Set up EntryGenerator component
const EntryGeneratorConstructor = Vue.extend(EntryGenerator);
const eg = new EntryGeneratorConstructor().$mount();

describe('EntryGenerator.vue', () => {
  let emittedObjTitle;
  let emittedObjVotes;
  context('when adding a valid title with button click', () => {
    it('should emit an object containing the same title and numvotes', () => {
      const title = 'a test title';
      const votes = 5;

      eg.newTitle = title;
      eg.numVotes = votes;

      eg.$on('addNewTitle', (obj) => {
        emittedObjTitle = obj.title;
        emittedObjVotes = obj.numVotes;
      });

      eg.$el.querySelector('button').click();
      expect(emittedObjTitle).to.equal(title);
      expect(emittedObjVotes).to.equal(votes);
    });
  });
  context('when adding an invalid title with button click', () => {
    it('should not emit addNewTitle function', () => {
      let eventEmitted = false;

      eg.$on('addNewTitle', (obj) => {
        emittedObjTitle = obj.title;
        emittedObjVotes = obj.numVotes;
        eventEmitted = true;
      });

      eg.$el.querySelector('button').click();

      expect(eventEmitted).to.equal(false);
    });
  });
});
