<template>
  <div>
    <div class="top-container">
      <TextBox 
        v-model="entries"
        @addNewTitle="addNewTitle"
      />
      <Navbar/>
    </div>
    <EntryList 
      v-model="entries"
      :currentTab="tab"/>
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
      tab: 'popular',
      id: 0,
    };
  },
  methods: {
    addNewTitle(obj) {
      this.entries.push({
        id: this.id,
        title: obj.title,
        numVotes: obj.numVotes,
      });
      this.id += 1;
    },
    switchTab(tab) {
      this.tab = tab;
    },
  },
  mounted() {
    for (let i = 0; i < 5; i += 1) {
      this.addNewTitle({
        title: `This is a test${this.id}`,
        numVotes: 0,
      });
    }
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


