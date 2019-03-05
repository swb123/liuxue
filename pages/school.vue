<template>
<div class="wrapper tag-item">
<div class="fl  left-list"> 
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/education">院校专业</a></el-breadcrumb-item>
    <el-breadcrumb-item>{{item.collegeName}}大学</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="friend-dating-list"> 
     <ul class="friends"> 
      <li class="friend-item"> 
       <div class="fl photo"> 
        <div class="img">
         <img src="~/assets/img/Unimelb.jpg" width="200" />
        </div> 
       </div> 
       <div class="fl content" > 
        <p class="title"> <span class="name" style="font-size:20px;text-align:left;margin-right:40px">{{item.collegeName}}大学</span> 
        <p class="aa">学校官网：<a :href="item.collegeOffweb" target="_blank">{{item.collegeOffweb}}</a>  </p> 
        <p class="point">学校类型：{{item.collegeType}}</p>
        <!-- <el-button type="primary" size="mini" round>测试录取几率</el-button> </p>  -->
        <el-popover
          placement="right"
          width="120px"
          trigger="click">
          <el-progress type="circle" :percentage="item.collegeRank" width="100"></el-progress>

          <el-button slot="reference">录取几率</el-button>
      </el-popover> 
       </div> 

       <div class="clearfix"></div> </li> 
     </ul>
    </div>
    
        <nuxt-child/> 
   </div> 

   
 <div class="fl right"> 
      <div class="card-list"> 
       <div class="head"> 
        <h3 class="title">推荐</h3> 
       </div> 
       <div class="list"> 
        <ul> 
         <li class="card-item"> 
          <div class="attention"> 
           <span>文书撰写</span> 
           <span class="fr"><i class="fa fa-heart-o" aria-hidden="true"></i><i class="fa fa-times close" aria-hidden="true"></i></span> 
          </div> 
          <div class="img"> 
           <img src="~/assets/img/widget-t01be3f1015cf52e1f3.png" alt="" /> 
          </div> 
          <div class="info"> 
           <div class="fl photo">
            <img src="~/assets/img/widget-photo.png" alt="" />
           </div> 
           <div class="fl intro"> 
            <p>美美工作室</p> 
           </div> 
           <div class="clearfix"></div> 
          </div> </li> 
         <li class="card-item"> 
          <div class="attention"> 
           <span>学校推荐</span> 
           <span class="fr"><i class="fa fa-heart-o" aria-hidden="true"></i><i class="fa fa-times close" aria-hidden="true"></i></span> 
          </div> 
          <div class="img"> 
           <img src="~/assets/img/widget-MOG88A60E7ZI.png" alt="" /> 
          </div> 
          <div class="info"> 
           <div class="fl photo">
            <img src="~/assets/img/widget-photo.png" alt="" />
           </div> 
           <div class="fl intro"> 
            <p>星星教育</p> 
           </div> 
           <div class="clearfix"></div> 
          </div> </li> 
         <li class="card-item"> 
          <div class="attention"> 
           <span>面试辅导</span> 
           <span class="fr"><i class="fa fa-heart-o" aria-hidden="true"></i><i class="fa fa-times close" aria-hidden="true"></i></span> 
          </div> 
          <div class="img"> 
           <img src="~/assets/img/widget-t019e2d84e53580b099.png" alt="" /> 
          </div> 
          <div class="info"> 
           <div class="fl photo">
            <img src="~/assets/img/widget-photo.png" alt="" />
           </div> 
           <div class="fl intro"> 
            <p>图图文化</p> 
           </div> 
           <div class="clearfix"></div> 
          </div> </li> 
        </ul> 
        <a class="sui-btn btn-block btn-bordered btn-more">查看更多</a> 
       </div> 
      </div> 
     </div> 
   </div>

</template>
<script>
import "~/assets/css/page-sj-qa-login.css"
import "~/assets/css/page-sj-makeFriends-index.css"
import educationApi from '@/api/education'

export default {
  data(){
    return{
      item:{},
    }
  },
  asyncData({params}){
      return educationApi.findById(params.collegeId).then( res =>{
        return {item: res.data.data.rows }
      })
    },
}
</script>