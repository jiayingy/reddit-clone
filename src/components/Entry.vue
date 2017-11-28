/** 
 * This component maintains the title and number of votes
 */
<template>
  <div class="entry">
    <div class="numbering"></div>
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
  props: ['entry'],
  data() {
    return {
      id: this.entry.id,
      title: this.entry.title,
      numVotes: this.entry.numVotes,
    };
  },
  methods: {
    upvote() {
      this.numVotes = this.numVotes + 1;
    },
    downvote() {
      this.numVotes = this.numVotes - 1;
    },
  },
  watch: {
    numVotes() {
      this.$emit('updateVotes',
                { id: this.id, numVotes: this.numVotes });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.entry {
  width: 100%;
  height: 80px;
  background-color: #eee;
  display: flex;
  align-content: center;
  flex-direction: row;
  align-items: center;
  border-bottom: 1.5px solid rgba(0,0,0,0.1);

  .numbering {
    width: 50px;
    color: grey;

    &::before {
      counter-increment: index;
      content: counter(index) ".";
    }
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
