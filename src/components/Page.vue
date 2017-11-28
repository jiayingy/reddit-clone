<template>
  <div>
    <div class="top-container">
      <EntryGenerator 
        v-model="entries"
        @addNewTitle="addNewTitle"
      />
      <Navbar
        @switchTab="switchTab"
      />
    </div>
    <EntryList 
      v-model="entries"
      :currentTab="tab"/>
  </div>
</template>
<script>
import EntryList from './EntryList';
import EntryGenerator from './EntryGenerator';
import Navbar from './Navbar';

export default {
  components: {
    EntryList,
    EntryGenerator,
    Navbar,
  },
  data() {
    return {
      entries: {},
      tab: 'popular',
      id: 0,
    };
  },
  methods: {
    addNewTitle(obj) {
      this.$set(this.entries, this.id, {
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


