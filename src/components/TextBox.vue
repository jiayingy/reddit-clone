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
      const newTitle = document.getElementById('new-title').value;
      if (newTitle.trim().length > 0 && newTitle.trim().length <= 255) {
        // If title is valid, emit newTitle to parent
        this.$emit('addNewTitle', newTitle);
        document.getElementById('new-title').value = '';
      }
    },
  },
};
</script>
<style lang="scss">
.add-title {
  height: 60px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 1px 5px 1px rgba(0,0,0,0.2);
  position: relative;

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


