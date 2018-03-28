<template>
<div>
    <div>
      <router-link to="/addmatter"><el-button type="primary" plain>新建素材</el-button></router-link>
    </div>
    <div class="bottom clearfix" style="height:20px;border-bottom:1px solid #ccc;"></div>
    <div style="padding-top:50px;">
      <el-row>
        <el-col :span="4" v-for="item in sourcedata" :key="item.id" :offset="1">
          <el-card :body-style="{ padding: '0px' }">
            <img v-if="item.type=='img'" :src="item.img" class="image">
            <video v-else loop="loop" autoplay="autoplay" :src="item.img" style="height:200px; margin:0 auto"></video>
            <div style="padding: 10px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <span>{{item.size}}</span>
                <div style="float:right;">
                  <el-checkbox-group v-model="checksource" @change="" size="mini" style="display:inline-block;">
                    <el-checkbox-button :label="item.id" style="border-radius:5px;">&nbsp;</el-checkbox-button>
                  </el-checkbox-group>
              </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
      <div class="block" style="padding-top:30px;margin:0 auto;width:600px;">
        <span class="demonstration"></span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    <div class="bottom clearfix" style="height:40px;border-bottom:1px solid #ccc;"></div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        checksource:[],
        sourcedata:{
          1:{id:"1",img:"/static/img/1.mp4",name:"张三张三张三张三张三张三张三张三张三张三dfasdf张",size:"540x400",type:"mp4"},
          2:{id:"2",img:"/static/img/1.mp4",name:"张三",size:"540x400",type:"mp4"},
          3:{id:"3",img:"/static/img/1.jpg",name:"张三",size:"540x400",type:"img"}
        },
        currentPage4: 4

      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table .cell{
  text-align: left;
}
.clearfix:before,
.clearfix:after {display: table;content: "";}
.clearfix:after {clear: both}
</style>
