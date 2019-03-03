<template>
<<<<<<< HEAD

=======
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
   <div class="sj-content"> 
    <div class="left-nav"> 
     <div class="float-nav" id="float-nav"> 
      <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical"> 
<<<<<<< HEAD
       <li class="active" ><a href="#"> 地理位置</a></li> 
=======
       <li class="active"><a>地理位置</a></li> 
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
       <li><a href="#">学校概况</a></li> 
       <li><a href="#">学校设施</a></li> 
       <li><a href="#">学校宿舍</a></li> 
       <li><a href="#">学校排名</a></li> 
       <li><a href="#">学校联系</a></li> 
      </ul> 
     </div> 
    </div> 
    
<<<<<<< HEAD
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
    
=======
    <div class="data-list">
        <ul class="headline fixed" id="headline"> 
        <li class="headline-item"> 
         <div class="fl indexImg"> 
          <img src="~/assets/img/aozhou.jpg" width="100" height="100"/> 
         </div> 
         <div class="words"> 
          <h3>城市介绍<span><img src="" /></span></h3> 
          <h6> 
澳大利亚首都领地（又译作澳大利亚首都特区）大体位于澳大利亚的悉尼和墨尔本之间，
环绕着堪培拉市，建于1911年，是澳大利亚联邦的政府所在地，
是澳大利亚面积最小但人口最为稠密、教育程度最高的州及领地层级行政区，
是众多政府机构、办事处、大使馆及科学教育机构的集中地。公园与保护区覆盖了该领地53%的土地，被称为“森林首都”。气候多雨和寒冷，强风较频。  
           <div class="clearfix"></div> </h6> 
         </div></li> 
        </ul>
    </div> 
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
   </div> 
    
</template>
<script>
import "~/assets/css/page-sj-person-homepage.css"
import "~/assets/css/page-sj-headline-login.css"
<<<<<<< HEAD
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

=======
export default {
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
}
</script>