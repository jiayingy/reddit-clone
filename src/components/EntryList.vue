<template>
  <div class="entrylist">
      <Entry 
        v-for="(entry, index) in value"
        :key="entry.id"
        :index="index"
        :entry="entry"
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
  props: ['value'],
};
</script>
<style lang="scss">

</style>


