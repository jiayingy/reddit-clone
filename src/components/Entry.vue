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
  props: ['entry', 'index'],
  data() {
    return {
      id: 0,
      title: '',
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
    },
  },
  mounted() {
    this.title = this.entry.title;
    this.numVotes = this.entry.numVotes;
    this.id = this.entry.id;
    this.numbering = this.index + 1;  // Index starts from 0
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.entry {
  width: 100%;
  height: 80px;
  // background-color: white;
  display: flex;
  align-content: center;
  flex-direction: row;
  align-items: center;
  border-bottom: 1.5px solid rgba(0,0,0,0.1);

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
