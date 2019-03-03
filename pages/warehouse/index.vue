<template>
<div class="wrapper activities">
  <div class="activity-card-list">
    <h2>留学仓库</h2>
  <ul class="activity">
<li class="activity-item"  v-for="(item,index) in items" :key="index" >
   <div class="activity-inner">
  <el-card class="box-card" >
  <div slot="header" class="clearfix">
    <span><a :href="'/warehouse/item/'+item.id">{{item.title}}</a></span>
    <el-button style="float: right; padding: 3px 0"  icon="el-icon-setting"></el-button>
  </div>
    <div class="text item">
        <h4>{{item.title}}</h4>
        <h5>{{item.content}}</h5>
        <br/>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="item.rate"></el-progress>
    </div>
</el-card>
   </div>
  </li>
  </ul>
   

  </div>
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
    width: 280px;
  }
</style>

<script>
import '~/assets/css/page-sj-activity-index.css'
import warehouseApi from '@/api/warehouse'
import {getUser} from '@/utils/auth'
export default {
    data(){
      return {
        /** 
        items: [
          {
            id : 1,
            title: "中国科学技术大学",
            content: "软件学院",
            rate: 30
          },
          {
            id : 1,
            title: "中国科学技术大学",
            content: "软件学院",
            rate: 50
          },
          {
            id : 1,
            title: "中国科学技术大学",
            content: "软件学院",
            rate: 30
          },
          {
            id : 1,
            title: "中国科学技术大学",
            content: "软件学院",
            rate: 30
          },
          {
            id : 1,
            title: "中国科学技术大学",
            content: "软件学院",
            rate: 30
          },
          {
            id : 1,
            title: "中国科学技术大学",
            content: "软件学院",
            rate: 30
          }

        ]*/
      }
    },
    asyncData(){
      return  warehouseApi.getList().then( res => {
          return {items: res.data.data.rows }
       })
    },
    created(){
        if(getUser().name===undefined){
            this.$router.push('/login')
        }
    }
}
</script>

