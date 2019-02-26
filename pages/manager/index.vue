<template>
    <div> 
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" >

        <el-form-item label="目标国家" prop="region">
            <el-col :span ="4">
            <el-select v-model="ruleForm.region" placeholder="请选择留学国家">
            <el-option label="美国" value="shanghai"></el-option>
            <el-option label="英国" value="beijing"></el-option>
            </el-select>
            </el-col>
        </el-form-item>

        <el-form-item label="入学时间" required>
            <el-col :span="4">
            <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
            </el-col>
        </el-form-item>
            
            <el-form-item label="本科学校" prop="undergraduate">
            <el-col :span ="4">
            <el-input type="text" v-model="ruleForm.undergraduate" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>

            <el-form-item label="个人绩点" prop="gpa">
            <el-col :span ="4">
            <el-input type="text" v-model="ruleForm.gpa" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>

        <el-form-item label="英语类型" prop="type">
            <el-col :span ="4">
            <el-select v-model="ruleForm.type" placeholder="现有英语成绩类型">
            <el-option label="雅思" value="shanghai"></el-option>
            <el-option label="托福" value="beijing"></el-option>
            <el-option label="四六级" value="beijing"></el-option>
            </el-select>
            </el-col>
        </el-form-item>

        <el-form-item label="目标院校" prop="targetSchool">
            <el-col :span ="4">
            <el-input type="text" v-model="ruleForm.targetSchool" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>

        <el-form-item label="目标专业" prop="targetMajor">
            <el-col :span ="4">
            <el-input type="text" v-model="ruleForm.targetMajor" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>

        <el-form-item label="目前学历" prop="education">
            <el-radio-group v-model="ruleForm.education">
            <el-radio label="本科"></el-radio>
            <el-radio label="硕士"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="获奖情况" prop="prize">
            <el-input type="textarea" v-model="ruleForm.prize"></el-input>
        </el-form-item>

            <el-form-item label="实习情况" prop="practice">
            <el-input type="textarea" v-model="ruleForm.practice"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">重置</el-button>
            <el-button @click="resetForm('ruleForm')">查看评估</el-button>
        </el-form-item>
        </el-form>
    </div> 
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          type: '',
          undergraduate:'',
          gpa: '',
          targetSchool:'',
          targetMajor:'',
          education:'',
          prize:'',
          practice:''
        },
        rules: {
          region: [
            { required: true, message: '请选择留学国家', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          type: [
            {  required: true, message: '请选择英语类型', trigger: 'change' }
          ],
          undergraduate: [
               { required: true, message: '本科学校不能为空'},
          ],
          gpa: [
               { required: true, message: '个人绩点不能为空'},
          ],
          targetSchool: [
               { required: true, message: '目标院校不能为空'},
          ],
          targetMajor:[
              { required: true, message: '目标专业不能为空'},
          ],
          education:[
              { required: true, message: '目前学历不能为空'},
          ],
        }
      };
    },
    methods: {
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
