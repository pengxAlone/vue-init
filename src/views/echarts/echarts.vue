<template>
  <div class="echarts">
    <Head></Head>

    <div class="page-content">
      制表页面
      <div class="example"></div>
    </div>

    <Foot></Foot>
  </div>
</template>

<script>
import Head from '@/components/header/head'
import Foot from '@/components/footer/foot'
import echarts from 'echarts'

export default {
  name: 'home',
  components: {
    Head,
    Foot,
  },
  mounted() {
    this.$nextTick(() => {
      this.initTab()
    })
  },
  methods: {
    // 初始化表格
    initTab() {
      let theChart = echarts.init(document.getElementsByClassName('example')[0])
      theChart.setOption({
        title: {
          text: '一年级放牛班各组分数情况'
        },
        tooltip: {},
        xAxis: {
          data: ['第一组', '第二组', '第三组', '第四组', '第五组', '第六组']
        },
        yAxis: {},
        series: [{
          name: '分数',
          type: 'bar',
          data: [59, 69, 79, 89, 99, 49]
        }]
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
  .example {
    width: 100%;
    height: 400px;
  }
}
</style>