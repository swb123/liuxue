<template>
    <div> 
        <el-form :model="assessform" :rules="rules" ref="assessform" label-width="100px">

        <el-form-item label="目标国家" prop="targetcountry">
            <el-col :span ="18">
            <el-select v-model="assessform.targetcountry" placeholder="请选择留学国家">
            <el-option label="加拿大" value="canada"></el-option>
            <el-option label="澳洲" value="australia"></el-option>
            </el-select>
            </el-col>
        </el-form-item>

         <el-form-item label="目标院校" prop="targetSchool">
            <el-col :span ="18">
            <el-input type="text" v-model="assessform.targetSchool" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>

        <el-form-item label="目标专业" prop="targetMajor">
            <el-col :span ="18">
            <el-input type="text" v-model="assessform.targetMajor" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>

        <el-form-item label="入学时间" required>
            <el-col :span="18">
            <el-form-item prop="admissiontime">
                <el-date-picker type="date" placeholder="选择日期" v-model="assessform.admissiontime" style="width: 100%;"></el-date-picker>
            </el-form-item>
            </el-col>
        </el-form-item>
            
            <el-form-item label="毕业学校" prop="undergraduate">
            <el-col :span ="18">
            <el-input type="text" v-model="assessform.undergraduate" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>

        <el-form-item label="个人绩点" prop="gpa">
            <el-col :span ="18">
            <el-input type="text" v-model="assessform.gpa" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>

        <el-form-item label="英语类型" prop="englishtype">
            <el-col :span ="18">
            <el-select v-model="assessform.englishtype" placeholder="现有英语成绩类型">
            <el-option label="雅思" value="shanghai"></el-option>
            <el-option label="托福" value="beijing"></el-option>
            <el-option label="四六级" value="beijing"></el-option>
            </el-select>
            </el-col>
        </el-form-item>
        
        <el-form-item label="英语成绩" prop="englishgrade">
            <el-col :span ="18">
            <el-input type="text" v-model="assessform.englishgrade" autocomplete="off"></el-input>
            </el-col>
        </el-form-item>
      
        <el-form-item label="目前学历" prop="education">
            <el-radio-group v-model="assessform.education">
            <el-radio label="本科"></el-radio>
            <el-radio label="硕士"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="获奖情况" prop="prize">
            <el-input type="textarea" v-model="assessform.prize"></el-input>
        </el-form-item>

            <el-form-item label="实习情况" prop="practice">
            <el-input type="textarea" v-model="assessform.practice"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('assessform')">查看评估结果</el-button>
            <el-button @click="resetForm('assessform')">重置</el-button>
        </el-form-item>
        </el-form>
    </div> 
</template>

<script>
import userApi from '@/api/user'
  export default {
    data() {
      return {
        assessform: {
          targetcountry: '',
          targetSchool:'',
          targetMajor:'',
          admissiontime: '',
          undergraduate:'',
          gpa: '',
          englishtype: '',
          englishgrade:'',
          education:'',
          prize:'',
          practice:''
        },
        assessrate: "",
        rules: {
          targetcountry: [
            { required: true, message: '请选择留学国家', trigger: 'change' }
          ],
          admissiontime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          englishtype: [
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
          englishgrade:[
              { required: true, message: '成绩不能为空'},
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(JSON.stringify(this.assessform));
            userApi.assess(this.assessform ).then( res=> {
              this.assessrate=res.data.assessrate;
              console.log(JSON.stringify(this.assessrate));
              this.$router.push({
                path: "/manager/assess",
                query:{
                  assessrate: this.assessrate,
                  school: this.assessform.targetSchool,
                  major: this.assessform.targetMajor,
                  code: 10011
                }
              });
			})
          
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
