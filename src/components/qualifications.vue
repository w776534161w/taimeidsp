<template>
  <div class="zdy_formclass">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
      <el-form-item label="官网" prop="weburl">
        <el-input v-model="ruleForm.weburl" placeholder="请输入官网"></el-input>
      </el-form-item>
      <el-form-item label="营业执照" prop="">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove"
           :limit="1" :on-exceed="handleExceed" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="ICP备案图片" prop="">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove"  
        :limit="1" :on-exceed="handleExceed" :file-list="fileList2">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="开户行" prop="khh">
        <el-input v-model.number="ruleForm.khh" placeholder="请输入公司开户行"></el-input>
      </el-form-item>
      <el-form-item label="法人身份证" prop="userid">
        <el-input v-model.number="ruleForm.userid" placeholder="请输入法人身份证"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="邮寄地址" prop="emailadd">
        <el-input v-model="ruleForm.emailadd" placeholder="请输入邮寄地址"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交信息</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          weburl: '',
          khh: '', //开户行
          userid: '',
          email: '',
          emailadd: ''
        },
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        fileList2: [],
        rules: {
          weburl: [
            { required: true, message: '请输入官网', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          khh: [
            { required: true, message: '请输入开户行', trigger: 'blur' },
            { min: 3, max: 40, message: '长度在 3 到 40 个字符', trigger: 'blur' }
          ],
          userid: [
            { required: true, message: '请输入法人身份证', trigger: 'blur' },
            { type:"number", message: '请确认法人身份证是否正确', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type:"email", message: '请确认邮箱格式是否正确', trigger: 'blur' }
          ],
          emailadd: [
            { required: true, message: '请输入邮寄地址', trigger: 'blur' },
            { min: 3, max: 40, message: '邮寄地址必填', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },  
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zdy_formclass{
  width:500px;
}
</style>
