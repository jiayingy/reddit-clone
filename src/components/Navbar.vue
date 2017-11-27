<template>
  <div class="navbar">
    <ul>
      <li class="active"
          @click="switchTab('popular', $event)">
          Popular
      </li>
      <li
          @click="switchTab('new', $event)">
          New
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      currentTab: 'popular',
    };
  },
  methods: {
    switchTab(tab, event) {
      if (tab !== this.currentTab) {
        // Remove 'active' class from all other elments and add to current element
        document.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');

        // Update value of currentTab
        this.currentTab = tab;

        this.$emit('switchTab', tab);
      }
    },
  },
};
</script>

<style lang="scss">
.navbar {
  ul {
    list-style: none;
    padding-left: 0;
    li {
      display: inline-block;
      margin: 10px 50px;
      cursor: pointer;

      &.active {
        font-weight: bold;
        border-bottom: 1px dotted black;
      }
    }
  }
}
</style>


