<template>
<div>
    <el-row :gutter="20">
    <el-col :span="16"><div><h2>{{items.title}}-{{items.content}}</h2></div></el-col>
    </el-row>
    <el-row :gutter="20">
    <el-col :span="16"><div><h3>我的流程</h3></div></el-col>
    </el-row>
<el-row>
  <el-col :span="2">
    <h2 >入学要求</h2>
  </el-col>
  <el-col :span="2">
      <el-button  icon="el-icon-edit" size="small"    @click="setProp1"></el-button>
  </el-col>
</el-row>
<el-row>
<el-steps :active="items.current1" finish-status="success" simple style="margin-top: 20px">
  <el-step title="GRE成绩" ></el-step>
  <el-step title="学位学历" ></el-step>
  <el-step title="经济证明" ></el-step>
</el-steps>
</el-row>
<el-row>    
  <el-col :span="2">
    <h2 >资料准备</h2>
  </el-col>
  <el-col :span="2">
      <el-button  icon="el-icon-edit" size="small"    @click="setProp2"></el-button>
  </el-col>

</el-row>
<el-row>
<el-steps :active="items.current2" finish-status="success" simple style="margin-top: 20px">
  <el-step title="GRE成绩" ></el-step>
  <el-step title="学位学历" ></el-step>
  <el-step title="成绩单" ></el-step>
  <el-step title="申请书" ></el-step>
</el-steps>
</el-row>

<el-row>    
  <el-col :span="2">
    <h2 >学校申请</h2>
  </el-col>
  <el-col :span="2">
      <el-button  icon="el-icon-edit" size="small"    @click="setProp3"></el-button>
  </el-col>
</el-row>
<el-row>
<el-steps :active="items.current3" finish-status="success" simple style="margin-top: 20px">
  <el-step title="网上材料" ></el-step>
  <el-step title="材料寄送" ></el-step>
  <el-step title="经济证明" ></el-step>
</el-steps>
</el-row>
<el-row>  
  <el-col :span="2">
    <h2 >签证入学</h2>
  </el-col>
  <el-col :span="2">
      <el-button  icon="el-icon-edit" size="small"    @click="setProp4"></el-button>
  </el-col>  

</el-row>
<el-row>
<el-steps :active="items.current4" finish-status="success" simple style="margin-top: 20px">
  <el-step title="签证" ></el-step>
  <el-step title="护照" ></el-step>
  <el-step title="机票" ></el-step>
  <el-step title="入住" ></el-step>
</el-steps>
</el-row>

<el-dialog  :visible.sync="dialogVisible1">
    <el-form :model="form">
    <el-form-item label="当前进度" :label-width="formLabelWidth">{{currentName1}}
    </el-form-item>
    <el-form-item label="描述" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    </el-form>


  <span slot="footer" class="dialog-footer">
  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
         multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
    <el-button size="small" type="primary">文件上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传3个文件，且不超过20M</div>
    </el-upload>
  </span>
</el-dialog>


<el-dialog  :visible.sync="dialogVisible2">
    <el-form :model="form">
    <el-form-item label="当前进度" :label-width="formLabelWidth">{{currentName2}}
    </el-form-item>
    <el-form-item label="描述" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    </el-form>


  <span slot="footer" class="dialog-footer">
  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
         multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
    <el-button size="small" type="primary">文件上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传3个文件，且不超过20M</div>
    </el-upload>
  </span>
</el-dialog>

<el-dialog  :visible.sync="dialogVisible3">
    <el-form :model="form">
    <el-form-item label="当前进度" :label-width="formLabelWidth">{{currentName3}}
    </el-form-item>
    <el-form-item label="描述" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    </el-form>


  <span slot="footer" class="dialog-footer">
  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
         multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
    <el-button size="small" type="primary">文件上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传3个文件，且不超过20M</div>
    </el-upload>
  </span>
</el-dialog>

<el-dialog  :visible.sync="dialogVisible4">
    <el-form :model="form">
    <el-form-item label="当前进度" :label-width="formLabelWidth">{{currentName4}}
    </el-form-item>
    <el-form-item label="描述" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    </el-form>


  <span slot="footer" class="dialog-footer">
  <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
         multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
    <el-button size="small" type="primary">文件上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传3个文件，且不超过20M</div>
    </el-upload>
  </span>
</el-dialog>

</div>
</template>

<script>
import warehouseApi from '@/api/warehouse'
export default {
  data(){
    return {
      currentName1: '',
      currentName2: '',
      currentName3: '',
      currentName4: '',
      items:{},
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      },
      formLabelWidth: '120px',
      fileList: []
    }
    
  },
  /*
  data() {

    return {
      items:{
        current1: 1,
        current2: 2,
        current3: 3,
        current4: 0
      }
    }
  },
  */
  asyncData(params){
      console.log("gg");
      return  warehouseApi.getStatus(params.id).then( res => {
         return {items: res.data.data }

       })
  },

  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      setProp1()
      {
        this.dialogVisible1 = true
        switch(this.items.current1)
        {
          case 0 : this.currentName1 ='GRE'; break;
          case 1 : this.currentName1 ='学位学历'; break;
          case 2 : this.currentName1 = '经济证明'; break;
          case 3 : this.currentName1 = '无'; break;
        }
      },
      setProp2()
      {
        this.dialogVisible2 = true
        switch(this.items.current2)
        {
          case 0 : this.currentName2 ='GRE'; break;
          case 1 : this.currentName2 ='学位学历'; break;
          case 2 : this.currentName2 = '成绩单'; break;
          case 3 : this.currentName2 = '申请书'; break;
        }
      },
      setProp3()
      {
        this.dialogVisible3 = true
        switch(this.items.current3)
        {
          case 0 : this.currentName3 ='网上材料'; break;
          case 1 : this.currentName3 ='材料寄送'; break;
          case 2 : this.currentName3 = '经济证明'; break;
          case 3 : this.currentName3 = '无'; break;
        }
      },
      setProp4()
      {
        this.dialogVisible4 = true
        switch(this.items.current4)
        {
          case 0 : this.currentName4 ='签证'; break;
          case 1 : this.currentName4 ='护照'; break;
          case 2 : this.currentName4 = '机票'; break;
          case 3 : this.currentName4 = '入住'; break;
        }
      }


    }
}
</script>


