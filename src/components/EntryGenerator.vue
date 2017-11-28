<template>
  <div class="add-title">
    <input type="text" placeholder="Add a new title here"
      id="new-title"
      maxlength="255"
      v-model="newTitle"
      @keyup.enter="addNewTitle"
    >
    <button
      @click="addNewTitle"
    >Add</button>
  </div>
</template>
<script>
export default {
  name: 'TextBox',
  props: ['value'],
  methods: {
    addNewTitle() {
      this.$emit('addNewTitle', { title: this.newTitle, numVotes: this.numVotes });
      this.newTitle = '';
      this.numVotes = 0;
    },
  },
  data() {
    return {
      newTitle: '',
      numVotes: 0,
    };
  },
  mounted() {
    // Populate 30 new titles on mount with random num votes
    for (let i = 0; i < 30; i += 1) {
      this.newTitle = `This is a title${i}`;
      this.numVotes = Math.floor(Math.random() * ((1000 - (-234)) + 1)) - 234;
      this.addNewTitle();
    }
  },
};
</script>
<style lang="scss">
.add-title {
  input {
    padding: 15px;
    width: 50%;
    font-size: 16px;
    background-color: #eee;
    border: 0;
    outline: none;
  }

  button {
    // position: absolute;
    margin-left: -5px;
    padding: 15px;
    border: 0;
    font-size: 16px;
    background-color: #d3edc9;
    border-radius: 0;
    outline: none;
    cursor: pointer;

    &:active {
      background-color: #c1e0b5;
    }
  }
}
</style>


