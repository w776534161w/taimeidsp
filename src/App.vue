<template>
  <el-container>
    <el-header>
      <router-link to="/" style="width:50px;display:inline-block;float:left;">LOGO</router-link>
      <div style="display:inline-block;float:right;">
        <el-button type="text" @click="dialogTableVisible = true" style="color:#fff;">通知</el-button>
        <span>欢迎&nbsp;<b>李刚</b></span>
        <router-link to="/" style="color:#fff;">退出</router-link>
      </div>
    </el-header>
    <el-container>
      <el-aside style="width:200px;">
        <el-menu default-active='ss' ref="myem" @select="usele" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
          <el-menu-item index="1" route="/" >
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2" route="/unit">
            <i class="el-icon-menu"></i>
            <span slot="title">投放管理</span>
          </el-menu-item>
          <el-menu-item index="3" route="/matter">
            <i class="el-icon-document"></i>
            <span slot="title" >素材管理</span>
          </el-menu-item>
          <el-menu-item index="4" route="/qualifications">
            <i class="el-icon-setting"></i>
            <span slot="title" >基本信息</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
      
    </el-container>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </el-container>
  </template>  
<script>

export default {
  name: 'App',
  data() {

      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };

      return {
        ss:0,
        tableData: 1,
        isCollapse: false,
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false, //通知消息是否显示
      }
      

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      usele(index,path){//导航选择事件
        //alert(index)
      }
    },
    created :function(){
      var ain=0;
      //console.log(typeof(this.$route.path));
      if(this.$route.path.indexOf("unit")>0){
        ain=2;
      }else if(this.$route.path.length==1){
        ain = 1
      }else if(this.$route.path.indexOf("qualifications")>0){
        ain = 4
      }
      //alert(ain);
      this.ss=ain;
      //console.log(this.$refs);
      //console.log(this.$refs.myem.$children);
      
    }
}
</script>

<style>
.mbx{height: 30px;}
.step-user{margin-bottom: 30px;}
*{padding:0px;margin:0px;font-size:12px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

  .el-header {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer{
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    width:auto;
  }
  
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: left;
   
  }
  a{
    text-decoration: none;
    color:#333;
  }
  .el-menu-item.is-active a{
    color:#1276e5;
  }
  body > .el-container {
    /*margin-bottom: 40px;*/
    min-height: 1000px;
  }
  
</style>
