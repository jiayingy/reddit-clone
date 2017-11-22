<template>
  <div class="entry">
    <div class="numbering">
      {{numbering}}.
    </div>
    <div class="vote">
      <i class="material-icons arrow-up"
          @click="upvote"
      >keyboard_arrow_up</i>
      <p>{{numVotes}}</p>
      <i class="material-icons arrow-down"
          @click="downvote"
      >keyboard_arrow_down</i>
    </div>
    <div class="title">
      {{title}}
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
      numbering: 1,
    };
  },
  methods: {
    upvote() {
      this.numVotes = this.numVotes + 1;
    },
    downvote() {
      this.numVotes = this.numVotes - 1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.entry {
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-content: center;
  flex-direction: row;
  align-items: center;

  .numbering {
    width: 50px;
    color: grey;
  }

  .vote {
    width: 60px;
    display: flex;
    flex-direction: column;
    align-content: center;
    color: grey;

    .material-icons {
      cursor: pointer;
    }

    p {
      margin: 0;
    }
  }

  .title {
    font-weight: bold;
  }
}
</style>
