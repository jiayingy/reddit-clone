<template>
  <div>
    <TextBox 
      v-model="entries"
      @addNewTitle="addNewTitle"
    />
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
  methods: {
    addNewTitle(title) {
      this.entries.push({
        title,
        numVotes: 0,
      });
    },
  },
  mounted() {
    this.entries.push({
      title: 'This is a test',
      numVotes: 0,
    });
    this.entries.push({
      title: 'This is a test 2',
      numVotes: 0,
    });
  },
};
</script>
<style lang="sass">

</style>


