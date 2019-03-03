<template>
    <div class="answers"> 
     <h4><span>我的录取率</span></h4> 
     <ul>
         <h1><span>根据最新大数据分析，您考取"{{this.$route.query.school}}"的"{{this.$route.query.major}}"专业的录取率为：{{this.$route.query.assessrate}}</span></h1>   
     </ul> 
    </div> 
</template>
<script>
import '~/assets/css/page-sj-person-myanswer.css'
export default {
    

}
</script>