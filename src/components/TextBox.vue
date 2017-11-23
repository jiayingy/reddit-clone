<template>
  <div class="add-title">
    <input type="text" placeholder="Add a new title here">
    <button>Add</button>
  </div>
</template>
<script>
export default {
  name: 'TextBox',
  props: ['value'],
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
  }
}
</style>


