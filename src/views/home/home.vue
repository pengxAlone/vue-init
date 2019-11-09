<template>
  <div class="home">
    <Head></Head>

    <div class="page-content"><i class="el-icon-edit"></i>首页内容</div>

    <Foot></Foot>
  </div>
</template>

<script>
import Head from '@/components/header/head'
import Foot from '@/components/footer/foot'

import { test } from '@/api/api'

export default {
  name: 'home',
  components: {
    Head,
    Foot,
  },
  data() {
    return {
      info: ''
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      test({ loginFrom: 'tch_applet' }).then(() => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.page-content {
  height: 600px;
  @include fajf(center, space-between, column);
}
</style>
