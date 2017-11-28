<template>
  <div class="entrylist">
    <transition-group name="flip-list" tag="div">
      <Entry 
        v-for="(entry, index) in results"
        :key="entry.id"
        :entry="entry"
        @updateVotes="updateVotes"
      />
    </transition-group>
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
      const results = Object.keys(this.value)
                            .map(key => this.value[key]);

      switch (this.currentTab) {
        case 'new': {
          // Returns last 10 newly added titles
          return results.slice(-10).reverse();
        }
        case 'popular': {
          // Concat to reate new array so that original data will not be sorted
          // Returns the top 20 titles according to votes in descending order
          return results.concat().sort(this.sortByVotes).slice(0, 20);
        }
        default: {
          return results;
        }
      }
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
.flip-list-move {
  transition: transform 0.5s, opacity 0.1s;
}
.flip-list-enter,
.flip-list-leave-to {
  opacity: 0;
}
.flip-list-leave-active {
  position: absolute;
}
</style>


