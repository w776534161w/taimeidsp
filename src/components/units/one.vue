<template>
	<div>
		<div class="step-user">
			<el-steps :active="1" align-center>
			  <el-step title="步骤1" description="广告基本信息"></el-step>
			  <el-step title="步骤2" description="广告定向设置"></el-step>
			  <el-step title="步骤3" description="广告创意设置"></el-step>
			</el-steps>

		</div>
		<div>
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
			    	<el-button @click="resetForm('userform')">重置</el-button>
			  	</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
import addunittwo from '@/components/units/addunittwo'
export default{
	props:["myContent"],
	data(){
		//console.log(this.$route);
		return{
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
	        

		}
	},
	methods:{
		
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
	           	 this.$emit("next");
	          	} else {
	         	   console.log('error submit!!');
	         	   return false;
	       	   }
	       	 });
     	},
     	resetForm(formName) {
     	   this.$refs[formName].resetFields();
    	},
		daychange:function(){
			console.log(this.userform.value7);
		}
	}
}

</script>
<style type="text/css">
.el-input{width:300px;}
.utime{width:173px !important; }
</style>