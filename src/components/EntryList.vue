<template>
  <div class="entrylist">
      <Entry 
        v-for="(entry, index) in value"
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
  methods: {
    updateVotes(entry) {
      // This function updates the numVotes of updated entry and emits to Page
      const newMap = this.value;
      newMap[entry.id].numVotes = entry.numVotes;
      this.$emit('input', newMap);
    },
  },
};
</script>
<style lang="scss">

</style>


