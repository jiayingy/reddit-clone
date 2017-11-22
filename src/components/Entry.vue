<template>
  <div class="entry">
    <div class="title">
      {{title}}
    </div>
    <div class="vote">
      <i class="material-icons arrow-up">keyboard_arrow_up</i>
      {{numVotes}}
      <i class="material-icons arrow-down">keyboard_arrow_down</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  data() {
    return {
      title: 'test',
      numVotes: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entry {
  width: 100%;
  height: 150px;
}
</style>
