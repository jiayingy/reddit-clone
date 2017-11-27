<template>
  <div>
    <div class="top-container">
      <TextBox 
        v-model="entries"
        @addNewTitle="addNewTitle"
      />
      <Navbar/>
    </div>
    <EntryList v-model="entries"/>
  </div>
</template>
<script>
import EntryList from './EntryList';
import TextBox from './TextBox';
import Navbar from './Navbar';

export default {
  components: {
    EntryList,
    TextBox,
    Navbar,
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
<style lang="scss">
.top-container {
  height: 100px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);
  position: relative;
}
</style>


