<template>
  <div>
    <el-breadcrumb class="mbx" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      
    </el-breadcrumb>
    <div>
      <el-row :gutter="4">
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple">创意数量<br/><b>{{matter}}</b></div></el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple-light">投放数量<br/><b>{{unit}}</b></div></el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple">停止投放<br/><b>{{stopunit}}</b></div></el-col>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"><div class="grid-content bg-purple-light">昨日花费<br/><b>{{price}}</b></div></el-col>
      </el-row>
    </div>
    <div>
      <div id="indexchart" style="width:100%;height:300px;"></div>
    </div>
  </div>
  
</template>


<script>
import echarts from 'echarts';
export default {

  data() {
   
    return {
      msg: "fff",
      matter:234,
      unit:234,
      stopunit:234,
      price:2342456
    }
  },
  methods: {
    
  },
  mounted(){
    var myChart = echarts.init(document.getElementById('indexchart'));
    myChart.setOption({
        title: { text: 'ECharts示例' },
        tooltip: {},
        xAxis: {
            data: ["1","2","3","4","5","6"]
        },
        yAxis:{
            type: 'value', 
        },
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 40px;
    text-align: center;
  }
</style>
