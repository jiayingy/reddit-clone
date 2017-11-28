/**
 * This component takes valid input from the text box as a new title,
 * creates a object containing the newTitle and numVotes
 * and emits an addNewTitle event to the parent component
 */

<template>
  <div class="add-title">
    <input type="text" placeholder="Add a new title here"
      id="new-title"
      maxlength="255"
      v-model.trim="newTitle"
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
      if (this.newTitle) {
        this.$emit('addNewTitle', { title: this.newTitle, numVotes: this.numVotes });
        this.newTitle = '';
        this.numVotes = 0;
      }
    },
  },
  data() {
    return {
      newTitle: '',
      numVotes: 0,
    };
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


