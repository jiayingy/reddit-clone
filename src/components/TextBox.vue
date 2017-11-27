<template>
  <div class="add-title">
    <input type="text" placeholder="Add a new title here"
      id="new-title"
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
      // Get string from textbox
      const newTitle = document.getElementById('new-title').value.trim();

      // If title is valid, emit newTitle to parent to handle
      if (newTitle.length > 0 && newTitle.length <= 255) {
        this.$emit('addNewTitle', newTitle);
        document.getElementById('new-title').value = '';
      }
    },
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


