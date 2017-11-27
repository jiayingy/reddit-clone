<template>
  <div class="entrylist">
      <Entry 
        v-if="currentTab === 'popular'"
        v-for="(entry, index) in popularTitles"
        :key="entry.id"
        :entry="entry"
        @updateVotes="updateVotes"
      />
      <Entry 
        v-if="currentTab === 'new'"
        v-for="(entry, index) in newTitles"
        :key="entry.id"
        :entry="entry"
        @updateVotes="updateVotes"
      />
      <Entry 
        v-if="currentTab === 'all'"
        v-for="(entry, index) in results"
        :key="entry.id"
        :entry="entry"
        @updateVotes="updateVotes"
      />
  </div>
</template>
<script>
import Entry from './Entry';

export default {
  name: 'EntryList',
  components: {
    Entry,
  },
  props: ['value', 'currentTab'],
  data() {
    return {
    };
  },
  computed: {
    results() {
      // Returns all titles from oldest to newest
      return Object.keys(this.value)
                   .map(key => this.value[key]);
    },
    newTitles() {
      // Returns last 10 newly added titles
      return this.results.slice(-10).reverse();
    },
    popularTitles() {
      return this.results.sort(this.sortByVotes);
    },
  },
  methods: {
    updateVotes(entry) {
      // This function updates the numVotes of updated entry and emits to Page
      const newMap = this.value;
      newMap[entry.id].numVotes = entry.numVotes;
      this.$emit('input', newMap);
    },
    sortByVotes(obj1, obj2) {
      return obj1.numVotes > obj2.numVotes ? -1 : 1;
    },
  },
};
</script>
<style lang="scss">

</style>


