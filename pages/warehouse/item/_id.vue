<template>
<div>
    <el-row :gutter="20">
    <el-col :span="16"><div><h2>中科大-软件工程</h2></div></el-col>
    </el-row>
    <el-row :gutter="20">
    <el-col :span="16"><div><h3>我的流程</h3></div></el-col>
    </el-row>
<el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <h4>签证入学</h4>
      <div style="height: 300px;">
        <el-steps direction="vertical" :active="1">
          <el-step title="签证"></el-step>
          <el-step title="护照"></el-step>
          <el-step title="机票"></el-step>
        </el-steps>
      </div>
    </el-card>
  </el-col>
</el-row>
</div>
</template>
<style>
  .time {
    font-size: 13px;
    color: rgb(209, 47, 47);
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>


