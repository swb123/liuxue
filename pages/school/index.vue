<template>
   <div class="sj-content"> 
    <div class="left-nav"> 
     <div class="float-nav" id="float-nav"> 
      <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical"> 
       <li class="active" ><a href="#"> 地理位置</a></li> 
       <li><a href="#">学校概况</a></li> 
       <li><a href="#">学校设施</a></li> 
       <li><a href="#">学校宿舍</a></li> 
       <li><a href="#">学校排名</a></li> 
       <li><a href="#">学校联系</a></li> 
      </ul> 
     </div> 
    </div> 
    
    <!-- <div class="data-list" id="box" >
        <ul class="headline fixed" id="headline"> 
        <li class="headline-item"> 
         <div class="words inside-box"> 
          <h3>城市介绍</h3> 
          <h4 > 
          {{item.cityInfo}}
           <div class="clearfix"></div> </h4> 
         </div></li> 
        </ul>
    </div>  -->
    
   </div> 
    
</template>
<script>
import "~/assets/css/page-sj-person-homepage.css"
import "~/assets/css/page-sj-headline-login.css"
import axios from 'axios'
import educationApi from '@/api/education'

export default {
 
      asyncData(){
      return educationApi.getList().then( res =>{
        return {item: res.data.data.rows}
      })
    
      // handleTest(index, row) {
      //   console.log(index, row);
      // }后端计算
    },

}
</script>