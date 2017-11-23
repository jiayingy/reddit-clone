<template>
  <div>
    <TextBox v-model="entries"/>
    <EntryList v-model="entries"/>
  </div>
</template>
<script>
import EntryList from './EntryList';
import TextBox from './TextBox';

export default {
  components: {
    EntryList,
    TextBox,
  },
  data() {
    return {
      entries: [],
    };
  },
  mounted() {
    this.entries.push({
      title: 'test',
      numVotes: 0,
    });
  },
};
</script>
<style lang="sass">

</style>


