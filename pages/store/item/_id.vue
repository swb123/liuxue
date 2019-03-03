<template>
  <div class="wrapper activities"> 
  <!-- <div v-for="(item,index) in items" :key="index" > -->
   <h1>{{item.name}}</h1> 
   <div class="img-text"> 
    <div class="left-img"> 
     <img :src="item.image" alt="" /> 
    </div> 
    <div class="right-txt"> 
      <p>价格： {{item.price}}</p> 
     <p>数量： {{item.amount}}</p> 
     <div class="join"> 
       <!-- <button class="buyBtn" @click="buy">立即购买</button> -->
        <button @click="addToCart">加入购物车</button>
     </div> 
    </div> 
   </div> 
   <div class="simple-text"> 
    <div class="left-content"> 
     <div class="content-item"> 
      <div class="tit">
       <span>商品介绍</span>
      </div> 
      <div class="text"> 
       <h4></h4> 
       <p>{{item.itemDetail}}</p> 
      </div> 
     </div> 

    </div> 
    <!-- </div> -->
    <div class="right-intro"> 
     <div class="content-item"> 
      <div class="tit">
       <span>分享扩散</span>
      </div> 
      <div class="social-share" data-sites="weibo,wechat" :data-title="item.name" data-url="http://www.itheima.com"> 
      </div> 
     </div> 
    </div> 
   </div> 
  </div> 
</template>
<script>
import "~/assets/css/page-sj-activity-detail.css"
import clientAPI from '@/api/client'

//import axios from 'axios'
//import orderApi from '@/api/order'
export default {
    data(){
        return{
            item:{},
    
        }
        
    },
   asyncData( {params} ){
        //params.id
        return clientAPI.findItemById(params.id).then(res =>{
         //   alert("1111")
            return {
                item:res.data.data
            }
        })
    
    },  
    head: {
        script:[
            {src: 'https://cdn.bootcss.com/social-share.js/1.0.16/js/social-share.min.js'}
        ],
        link: [
            {rel:'stylesheet' ,href: 'https://cdn.bootcss.com/social-share.js/1.0.16/css/share.min.css' }
        ]
    },
    methods:{
        addToCart(){
        //     if(!this.clientToken){
        //     alert('请先登录！');
        //     return;
        // }
        clientAPI.addCart(this.items).then(res =>{
         
                if(res.data.flag){
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
 /*   buy(){
    //   if(!this.clientToken){
    //     alert('请先登录！');
    //     return;
    //   }
      clientAPI.addOrder(this.item).then(res =>{
         if(res.data.flag){
                    alert('自动付款成功！请耐心等待包裹派送~')
                    this.$message({
                        message: '下单成功',
                        type: 'success'
                    })
                }else{
                    this.$message({
                        message: '下单出错',
                        type: 'error'
                    })
                }
          })
    }
    */
    }
}
</script>
