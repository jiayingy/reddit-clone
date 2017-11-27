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
      // Concat to reate new array so that original data will not be sorted
      // Returns the top 20 titles according to votes in descending order
      return this.results.concat().sort(this.sortByVotes).slice(0, 20);
    },
  },
  methods: {
    updateVotes(entry) {
      // Updates the numVotes of entry and emits new hashmap to parent
      const newMap = this.value;
      newMap[entry.id].numVotes = entry.numVotes;
      this.$emit('input', newMap);
    },
    sortByVotes(obj1, obj2) {
      return (obj1.numVotes > obj2.numVotes) ? -1 : 1;
    },
  },
};
</script>
<style lang="scss">

</style>


