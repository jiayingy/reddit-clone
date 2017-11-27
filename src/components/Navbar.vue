<template>
  <div class="navbar">
    <ul>
      <li class="active">Popular</li>
      <li>New</li>
      <li>All</li>
    </ul>
  </div>
</template>

<script>
export default {

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


