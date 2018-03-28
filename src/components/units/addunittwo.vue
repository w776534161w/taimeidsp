<template>
	<div>
		<div class="step-user">
			<el-steps :active="2" align-center>
			  <el-step title="步骤1" description="广告基本信息"></el-step>
			  <el-step title="步骤2" description="广告定向设置"></el-step>
			  <el-step title="步骤3" description="广告创意设置"></el-step>
			</el-steps>

		</div>
		<div class="u-mb15">
			  <span class="radio-u">地域</span>
			  <el-radio v-model='isaddress'  :label='false' >不限制</el-radio>
  			  <el-radio v-model='isaddress' :label='true' >限制</el-radio>
  			  <div v-show="isaddress" class="u-mt20">
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
			  <span class="radio-u">时间</span>
			  <el-radio v-model='isdate'  :label='false' >不限制</el-radio>
  			  <el-radio v-model='isdate' :label='true' >限制</el-radio>
  			  <div v-show="isdate" class="u-mt20">
			  
			  </div>
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
			{id:"1-4",name:"山西"},
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

export default{
	data(){
		//console.log(this.$route);
		return{
			isaddress:false,// false不限制  地域	
			isadderr:false,//显示地址错误信息
        	cities: cityOptions,	        
        	isdate:false,
        	datecheck:[],
        	isweather:false,  //天气
        	weathersdata:['阴天', '晴天', '多云',],
        	weathercheck:[],



		}
	},
	components:{
		"error":{
			props:["mesage"],
			template:"<div style='color:red'>{{mesage}}</div>",
			
		}
	},
	methods:{
		submitForm(formName) {
			console.log(this.$refs);
			console.log(formName);
			console.log(this.$refs[formName]);
	       	 this.$refs[formName].validate((valid) => {
	          	if (valid) {
	           	 alert('submit!');
	          	} else {
	         	   console.log('error submit!!');
	         	   return false;
	       	   }
	       	 });
     	},
     	cc(a){
     		
     		//console.log( typeof(this.isaddress))
     	},
     	resetForm(formName) {
     	   //this.$refs[formName].resetFields();
     	   this.$router.push("/unit/addunit");
    	},
		daychange:function(){
			console.log(this.userform.value7);
		},
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
.radio-u{display: inline-block;width: 50px;}
.u-mb15{margin-bottom: 15px;}
.u-mt20{margin-top:20px;}
</style>