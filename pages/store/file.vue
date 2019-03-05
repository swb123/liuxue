<template>
<div class="wrapper"> 
<div class="sj-content"> 
    <div class="left-nav"> 
     <div class="float-nav" id="float-nav"> 
      <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical"> 
       <router-link tag="li" to="/store" active-class="active" exact><a>留学申请</a></router-link>
       <router-link tag="li" to="/store/exam" active-class="active"><a>留学考试</a></router-link>
       <router-link tag="li" to="/store/file" active-class="active"><a>留学文件</a></router-link>
       <router-link tag="li" to="/store/life" active-class="active"><a>留学生活</a></router-link>

      </ul> 
     </div> 
    </div> 
    <div class="right-content">

        <div class="fl middle">
        
  <div class="wrapper activities"> 
  <div class="activity-card-list" v-infinite-scroll="loadMore"> 
    <div > 
     <ul class="activity" v-for="(item,index) in items" :key="index"> 
      <li class="activity-item" v-for="o in 3" :key="o">
       <div class="activity-inner"> 
        <a href="http://"></a>
        
        <div class="img">
         <a :href="'/store/item/'+item.id" target="_blank"><img src="~/assets/img/widget-activity1.png" alt="" /></a>
        </div> 
        <div class="text"> 
         <p class="title"><nuxt-link :to="'/store/item/'+item.id">{{item.name}}</nuxt-link></p>
         <div class="fl goin"> 
          <p>价格：{{item.price}}</p> 
         </div> 
         <div class="fr btn"> 
          <span class="sui-btn btn-bao" @click="addToCart(item)">加入购物车</span> 
         </div> 
         <div class="clearfix"></div> 
        </div> 
       </div> </li> 
     </ul> 

    </div> 
   </div>
  </div>
        </div>
        <div class="fl right">  
     </div> 

     </div> 
    </div> 
   </div> 

</template>
<script>
import '~/assets/css/page-headline-logined.css'
import '~/assets/css/page-sj-activity-index.css'
import clientAPI from '@/api/client'  
export default {
    data() {
      return {
         pageNo: 1,
         items:{}
      }
    },
    asyncData(){
      return  clientAPI.searchItems(2,1,12,{state:'1'}).then( res => {
          return {items: res.data.data.rows }
       })
    },
    methods: {
      loadMore(){
        this.pageNo++
        clientAPI.searchItems(2,this.pageNo,12,{state:'1'}).then( res => {
          this.items = this.items.concat( res.data.data.rows )
        })
      },
    addToCart(item){
        //     if(!this.clientToken){
        //     alert('请先登录！');
        //     return;
        // }
     clientAPI.addCart(item).then(res =>{
                if(res.data.flag){
                  //  alert('加入购物车成功！请前往 个人中心->购物车 结算')
                    this.$message({
                        message: '加入购物车成功！请前往 个人中心->购物车 结算',
                        type: 'success'
                    })
                }else{
                    this.$message({
                        message: '加入购物车出错',
                        type: 'error'
                    })
                }
          })
      }
  }
  
}
</script>

