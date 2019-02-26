<template>
<div class="wrapper tag-item">
<div class="fl  left-list"> 
  <p style="text-align: left"><a href="/education" target="_blank">院校专业</a>><a href="/education" target="_blank">澳洲</a>><a href="/education" target="_blank">澳洲国立大学</a></p> 
    <div class="friend-dating-list"> 
     <ul class="friends"> 
      <li class="friend-item"> 
       <div class="fl photo"> 
        <div class="img">
         <img src="~/assets/img/widget-dating1.png" alt="" />
        </div> 
       </div> 
       <div class="fl content"> 
        <p class="title"> <span class="name" style="font-size:20px;text-align:left;margin-right:40px">澳洲国立大学</span> <el-button type="primary" size="mini" round>测试录取几率</el-button> </p> 
        <p class="aa">学校官网：<a href="/education" target="_blank">www.baidu.com</a>  </p> 
        <p class="point">学校类型：私立</p> 
       </div> 

       <div class="clearfix"></div> </li> 
     </ul>
    </div>
    
    <div class="tab-content"> 
     <div id="index" class="tab-pane active"> 
      <div class="tab-bottom-line"> 
       <ul class="sui-nav nav-tabs"> 
       <router-link tag="li" to="/school" active-class="active" exact><a>学校介绍</a></router-link>
       <router-link tag="li" to="/school/admission" active-class="active"><a>录取要求</a></router-link>
       <router-link tag="li" to="/school/major" active-class="active"><a>专业</a></router-link>
       <router-link tag="li" to="/school/consultation" active-class="active"><a>咨询</a></router-link>
       </ul> 
        
      </div> 
     </div> 
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
import '~/assets/css/page-headline-logined.css'
export default {
}
</script>