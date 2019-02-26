<template>
<div>
    <h2>留学仓库</h2>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>中科大-软件工程</span>
    <el-button style="float: right; padding: 3px 0"  icon="el-icon-setting"></el-button>
  </div>
    <div class="text item">
        <h4>中国科学技术大学</h4>
        <h5>软件工程</h5>
        <br/>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
    </div>
</el-card>
</div>    
</template>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
