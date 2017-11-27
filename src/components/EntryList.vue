<template>
  <div class="entrylist">
      <Entry 
        v-for="(entry, index) in popularTitles"
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
      return Object.keys(this.value)
                   .map(key => this.value[key]);
    },
    newTitles() {
      return this.results.slice(-10);
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


