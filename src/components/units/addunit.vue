<template>
	<div>
		<div class="step-user">
			<el-steps :active="active" align-center>
			  <el-step title="步骤1" description="广告基本信息"></el-step>
			  <el-step title="步骤2" description="广告定向设置"></el-step>
			  <el-step title="步骤3" description="选择创意"></el-step>
			</el-steps>

		</div>
		<div v-show="isoneshow"  >
			<el-form ref="userform" :model="userform" label-width="80px" size="mini" class='demo-ruleForm' label-position="left" :rules="rules">
			  <el-form-item label="投放名称" prop="name">
			  	<el-input v-model="userform.name" class="el-input"></el-input>
			  </el-form-item>
			  <el-form-item label="开始日期" prop='value7'>
			  	<el-date-picker value-format="yyyy-MM-dd" @change="daychange()" v-model="userform.value7"
			      type="daterange"
			      align="left"
			      unlink-panels
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期"
			      :picker-options="pickerOptions2"
			       >
			    </el-date-picker>
			  </el-form-item>

			  <el-form-item label="开始时间" prop="startTime">
			  	  <el-time-select class="utime"
				    placeholder="起始时间"
				    v-model="userform.startTime"
				    :picker-options="{
				      start: '00:00',
				      end: '23:59'
				    }">
				  </el-time-select>
				  <el-time-select class="utime"
				    placeholder="结束时间"
				    v-model="userform.endTime"
				    :picker-options="{
				      start: '00:00',
				      end: '23:59',
				      minTime: userform.startTime
				    }">
				  </el-time-select>
			  </el-form-item>
			  <el-form-item label="频次" prop="pinci">
			  	<el-input v-model.number="userform.pinci"></el-input>
			  </el-form-item>
			  <el-form-item label="价格" prop="price">
			  	<el-input v-model.number="userform.price"></el-input>
			  </el-form-item>
			    <el-form-item>
			    	<el-button type="primary" @click="submitForm('userform')">下一步</el-button>
			    	<el-button @click="clearfun()">取消</el-button>
			  	</el-form-item>
			</el-form>
		</div>


		<div v-show="istwoshow">
			<div class="u-mb15">
				  <span class="radio-u">地域</span>
				  <el-radio v-model='isaddress'  :label='false' >不限制</el-radio>
	  			  <el-radio v-model='isaddress' :label='true' >限制</el-radio>
	  			  <div v-show="isaddress" class="u-mt20 borderadd">
				  <template v-for ="(item,index) in cities" >
				  	<div class="u-mb15" >
					  	<el-checkbox v-model="item.checkAll" @change="handleCheckAllChange(index)">{{item.name}}</el-checkbox>

					  	<el-checkbox-group v-model="item.uts" @change="handleCheckedCitiesChange(index,item.uts)">
					  	
				  			<template v-for ="ts in item.ts">
				  				<el-checkbox v-bind:label="ts.id"   >{{ts.name}}</el-checkbox>
				  			</template>

					  	</el-checkbox-group>
				  	</div>
				  </template>
				  	<error v-show="isadderr" mesage="请选择限制地域"></error>
				  </div>
			</div>


			<div class="u-mb15">
				  <span class="radio-u">周期</span>
				  <el-radio v-model='isdate'  :label='false' >不限制</el-radio>
	  			  <el-radio v-model='isdate' :label='true' >限制</el-radio>
	  			  <div v-show="isdate" class="u-mt20">
				  	<div class="u-mb15">
				  		<span class="radio-u">周一至周五</span>
				  		<el-checkbox-group v-model="datecheck" size="mini" style="display:inline-block" >
				  			<el-checkbox-button v-for="z in zhou1" :label="z" :key="z">{{z}}</el-checkbox-button>
				  		</el-checkbox-group>
				  	</div>
				  	<div class="u-mb15">
				  		<span class="radio-u">周六至周日</span>
				  		<el-checkbox-group v-model="datecheck2" size="mini" style="display:inline-block" >
				  			<el-checkbox-button v-for="z in zhou2" :label="z" :key="z">{{z}}</el-checkbox-button>
				  		</el-checkbox-group>
				  	</div>
				  </div>
				  <error v-show="isadderr" mesage="请选择限制周期"></error>
			</div>

			<div class="u-mb15">
				  <span class="radio-u">天气</span>
				  <el-radio v-model='isweather'  :label='false' >不限制</el-radio>
	  			  <el-radio v-model='isweather' :label='true' >限制</el-radio>
	  			  <div v-show="isweather" class="u-mt20">
				  	  <el-checkbox-group v-model="weathercheck">
					    <el-checkbox v-for="we in weathersdata" :label="we" :key="we">{{we}}</el-checkbox>
					  </el-checkbox-group>
				  </div>
				  <error v-show="isadderr" mesage="请选择限制天气"></error>
			</div>
			<div class="bottom clearfix" style="height:40px;border-bottom:1px solid #ccc;"></div>
			<div class="u-mt20">
				<span class="radio-u"></span>
				<el-button size="mini"  @click="prevtwo()">上一步</el-button>
				<el-button size="mini" type="primary" @click="nexttwo()">下一步</el-button>
				<el-button size="mini" @click="clearfun()">取消</el-button>
			</div>
		</div>
		<div v-show="issanshow">
			<div>
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
					          <el-checkbox-group v-model="checksource" @change="daychange()" size="mini" style="display:inline-block;">
					          	<el-checkbox-button :label="item.id" style="border-radius:5px;">&nbsp;</el-checkbox-button>
					          </el-checkbox-group>
					      </div>
				        </div>
				      </div>
				    </el-card>
				  </el-col>
				</el-row>
			</div>
			<div class="bottom clearfix" style="height:40px;border-bottom:1px solid #ccc;"></div>
			<div class="u-mt20">
				<span class="radio-u"></span>
				<el-button size="mini"  @click="prevsan()">上一步</el-button>
				<el-button size="mini" type="primary" @click="nextsan()">完成创建</el-button>
				<el-button size="mini" @click="clearfun()">取消</el-button>
			</div>
		</div>
		
	</div>
</template>
<script>
const cityOptions=[
	{
		id:1,
		name:"华北地区",
		ts:[
			{id:"1-1",name:"北京"},
			{id:"1-2",name:"天津"},
			{id:"1-3",name:"河北",ts:[{id:"1-1-1",name:"保定"},{id:"1-1-2",name:"沧州"},{id:"1-1-3",name:"承德"},{id:"1-1-4",name:"廊坊"},{id:"1-1-2",name:"秦皇岛"} ] },
			{id:"1-4",name:"内蒙古"},
			{id:"1-5",name:"山西"},
		],
		uts:[],
		checkAll:false
	},
	{
		id:2,
		name:"东北地区",
		ts:[
			{id:"2-1",name:"黑龙江"},
			{id:"2-2",name:"吉林"},
			{id:"2-2",name:"辽宁"},
		],
		uts:[],
		checkAll:false
		
	},
	{
		id:3,
		name:"华东地区",
		ts:[
			{id:"3-1",name:"上海"},
			{id:"3-2",name:"安徽"},
			{id:"3-3",name:"福建"},
			{id:"3-4",name:"江苏"},
			{id:"3-5",name:"江西"},
			{id:"3-6",name:"山东"},
			{id:"3-7",name:"浙江"},
		],
		uts:[],
		checkAll:false
		
	}
]
const zhou1 = ['0', '1', '2', '3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
const zhou2 = ['0', '1', '2', '3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
export default{
	components:{
		"error":{
			props:["mesage"],
			template:"<div style='color:red'>{{mesage}}</div>",
		}
	},
	data(){
		//console.log(this.$route);
		return{
			active:1,//步骤
			isoneshow:true,//yi
			istwoshow:false,//er
			issanshow:false,
			
			userform:{
				name:"",
				pinci:"",
				value7:["2018/3/22","2018/3/22"],
				startTime: '',//开始时间
        		endTime: '',//结束时间
				price:'',
			},
			rules:{
				name:[
					{ required: true, message: '请输入名称', trigger: 'blur' },
        			{ min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }],
        		/*value7:[
        			{validator:(rule,value,callback)=>{ 
        				console.log(value);

        				if(value[0]==""&&value[1]==""){callback(new Error("日期不能为空")); 
        			}}, trigger: 'change'}
        		],*/
        		value7:[
        			{required:true,message: '请选择日期', trigger: 'change'}
        		],
        		startTime:[
        			{type:"string",required: true, message: '请选择日期', trigger: 'change'}
        		],
        		endTime:[
        			{type:"string",required: true, message: '请选择日期', trigger: 'change'}
        		],
        		pinci:[
        			{type:"number",required: true, message: '请输入频次', trigger: 'blur'}
        		],
        		price:[
        			{type:"number",required: true, message: '请输入价格', trigger: 'blur'}
        		]
			},
			pickerOptions2: {
	          shortcuts: [{
	            text: '最近一周',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
	              picker.$emit('pick', [start, end]);
	            }
	          }, {
	            text: '最近一个月',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
	              picker.$emit('pick', [start, end]);
	            }
	          }, {
	            text: '最近三个月',
	            onClick(picker) {
	              const end = new Date();
	              const start = new Date();
	              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
	              picker.$emit('pick', [start, end]);
	            }
	          }]
	        },
	        
	        //er
	        isaddress:false,// false不限制  地域	
			isadderr:false,//显示地址错误信息
        	cities: cityOptions,	        
        	isdate:false,
        	datecheck:[],
        	datecheck2:[],
        	zhou1:zhou1,
        	zhou2:zhou2,

        	isweather:false,  //天气
        	weathersdata:['阴天', '晴天', '多云',],
        	weathercheck:[],

        	//san
        	checksource:[],
        	sourcedata:{
        		1:{id:"1",img:"/static/img/1.mp4",name:"张三张三张三张三张三张三张三张三张三张三dfasdf张",size:"540x400",type:"mp4"},
        		2:{id:"2",img:"/static/img/1.mp4",name:"张三",size:"540x400",type:"mp4"},
        		3:{id:"3",img:"/static/img/1.jpg",name:"张三",size:"540x400",type:"img"}
        	}
		}
	},
	methods:{
		
		nextfun:function(){
			this.isoneshow=false;
			this.istwoshow=true;
			this.issanshow=false;
			this.active++;
		},
		nexttwo(){
			this.isoneshow=false;
			this.istwoshow=false;
			this.issanshow=true;
			this.active++;
		},
		nextsan(){
			
		},


		submitForm(formName) {
			var that=this;
			/*console.log(this.$refs);
			console.log(formName);
			console.log(this.$refs[formName]);*/
			//this.myContent
			//console.log(this.myContent)
			//this.content=this.data;
			
	       	 this.$refs[formName].validate((valid) => {
	          	if (valid) {
	           	 //alert('submit!');
	           	 //console.log(that)
	           	 //that.$router.push("/unit/addunittwo");
	           	 this.nextfun();
	          	} else {
	         	   console.log('error submit!!');
	         	   return false;
	       	   }
	       	 });
     	},
     	prevtwo() {
     	   //this.$refs[formName].resetFields();
     	   this.isoneshow=true;
		   this.istwoshow=false;
		   this.issanshow=false;
		   this.active--;
    	},
    	prevsan() {
     	   //this.$refs[formName].resetFields();
     	   this.isoneshow=false;
		   this.istwoshow=true;
		   this.issanshow=false;
		   this.active--;
    	},
		daychange:function(){
			//console.log(this.userform.value7);
			//console.log(this.checksource);
		},
		clearfun(){
			this.$confirm('确认取消, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          this.$router.push("/unit");
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消操作'
	          });          
	        });
	      
		},
		//第二步
		handleCheckAllChange(val,) {
			//console.log(val);
			//console.log(checks);
	        //this.checkedCities = val ? cityOptions[val] : [];
	        //this.isIndeterminate = false;
	        //console.log(this.cities[val].ts);
	        //console.log(cityOptions[val].ts);
			if(this.cities[val].checkAll){
				for(var i=0;i<cityOptions[val].ts.length;i++){
		        	this.cities[val].uts.push(cityOptions[val].ts[i].id);
		        }
			}else{
				this.cities[val].uts=[];
			}
			//this.checkedCities=this.cities[val].uts;
			console.log(this.cities); 
	       
	    },
	    handleCheckedCitiesChange(value,item) {
	        let checkedCount = value.length;
	        //console.log(value);
	        //console.log(item);
	        this.cities[value].checkAll=this.cities[value].ts.length===item.length;
	        console.log(this.cities); 

	    }

	}
}

</script>
<style type="text/css">
.el-input{width:300px;}
.utime{width:173px !important; }
.radio-u{display: inline-block;width: 76px;}
.u-mb15{margin-bottom: 15px;}
.u-mt20{margin-top:20px;}
.el-checkbox{width:70px;}
.borderadd{padding: 5px;border: 1px solid #ccc;}
.time {font-size: 13px;color: #999;}
.bottom {margin-top: 13px;line-height: 12px;}
.button {padding: 0;float: right;}
.image {width: 100%;display: block;height: 200px;}

.clearfix:before,
.clearfix:after {display: table;content: "";}
.clearfix:after {clear: both}
</style>