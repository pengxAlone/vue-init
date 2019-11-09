<template>
  <div class="head">
    <router-link to="/">Home</router-link> |
    <router-link to="/echarts">Echarts</router-link>
  </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style scoped lang="scss">
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: #fff;
  background: #000;
  a {
    margin: 0 20px;
    color: #fff;
  }
}
</style>
