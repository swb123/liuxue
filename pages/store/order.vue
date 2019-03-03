<template>
  <div class="MyOrder">
 
    <ul class="tagList">
      <li :class="{selected:curIndex===index}" v-for="(item,index) in tagList" :key="'tag'+index" @click="changeIndex(index)">
        {{item}}
      </li>
    </ul>
    <div class="orderBox">
      <div class="orderTableHeader">
        <span>商品</span>
        <span>单价</span>
        <span>数量</span>
        <span>实付款</span>
        <span>交易操作</span>
      </div>
      <ul class="orderList">
        <li v-for="(item,index) in items" :key="index">
          <div class="orderHeader">
            <span class="orderTime">{{item.createdDate}}</span>
            <span class="orderId">{{'订单号：'+item.id}}</span>
            <span class="state">{{tagList[item.state+1]}}</span>
            <!-- <span class="deleteBtn" @click="deleteOrder(item.id)"><i class="iconfont icon-close" /></span> -->
          </div>
          <div class="orderDetail">
            <img :src="item.goods.image" alt="商品图片" />
            <div class="goodsName">
              <nuxt-link :to="'/store/item/'+item.goods.id">{{item.goods.name}}</nuxt-link>
            
            </div>
            <span class="unitPrice">{{'￥'+item.goods.price}}</span>
            <span class="num">{{item.itemNum}}</span>
            <span class="amount">{{'￥'+item.amount}}</span>
            <button v-if="item.state===0" @click="confirmPay(item.id)">确认付款</button>
            <button v-else-if="item.state===1" @click="confirmReceive(item.id)">确认收货</button>
            <button v-else-if="item.state===2" @click="deleteOrder(item.id)">删除订单</button>
            <!-- <button v-else-if="item.state===3 && !item.hasComment" @click="showPopup(item.id,item.goods.id,item.goods.goodsDetailId)">评价</button>
            <span class="hasComment" v-else-if="item.state===3 && item.hasComment">已评价</span> -->
          </div>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
import '~/assets/css/page-headline-logined.css'
import '~/assets/css/page-sj-activity-index.css'
import { mapState } from 'vuex';
import clientAPI from '@/api/client'
//import Popup from '@/components/Popup';
export default {
  name: 'order',
  components:{
   // Popup
  },
  computed:{
    ...mapState([
      'clientToken'
    ]),
  },
  data () {
    return {
      pageNo:1,
      tagList:['全部订单','待付款','待收货','已完成'],
      items:{},
      curIndex:0,
  
    //  popupShow:false,
   //   curOrderId:'',
   //   curCommentGoodsId:'',
    //  curCommentGoodsDetailId:'',
  //    curStar:0,
  //    hasClickStar:false,
  //    comment:'',
    }
  },
  //需要加上userId
 asyncData(){
      return  clientAPI.searchOrder(1,12,{state:'1'}).then( res => {
          return {items: res.data.data.rows }
       })
    },
   methods:{
    loadMore(){
        this.pageNo++
        clientAPI.searchOrder(this.pageNo,12,{state:'1'}).then( res => {
          this.items = this.items.concat( res.data.data.rows )
        })
    },
    changeIndex(i){
      this.curIndex = i;
      this.getOrderByState(this.curIndex-1);
    },
    getOrderByState(state){
       clientAPI.getOrderByState(state).then(res =>{
                if(res.data.flag){
                    this.$message({
                        message: '查询成功',
                        type: 'success'
                    })
                }else{
                    this.$message({
                        message: '查询失败',
                        type: 'error'
                    })
                }
          })
    },
    deleteOrder(orderId){
       clientAPI.deleteOrder(orderId).then(res =>{
                if(res.data.flag){
                    alert('商品删除成功！请继续购物')
                    // this.cartList.items((item,index)=>{
                    //   if(item.id===cartId){
                    //     this.cartList.splice(index,1);
                    //   }
                    // })
                    this.$message({
                        message: '订单删除成功',
                        type: 'success'
                    })
                    this.items.forEach((item, index) => {
                      if(item.id == orderId){
                          this.items.splice(index, 1);
                       }
                    })
                  //  this.items = {}

                }else{
                    this.$message({
                        message: '订单删除失败',
                        type: 'error'
                    })
                }
          })
    },
    //支付订单
    confirmPay(orderId){
        clientAPI.pay(orderId).then(res =>{
        if(res.data.flag){
                    this.items.forEach((item,index) =>{
                      if(item.id === orderId){
                        item.state = 1;
                      }
                    })
                    this.$message({
                        message: '支付成功！请继续购物',
                        type: 'success'
                    })
                }else{
                    this.$message({
                        message: '支付失败',
                        type: 'error'
                    })
                }
      })
    },
    //收货
    confirmReceive(orderId){
       clientAPI.confirmReceive(orderId).then(res =>{
        if(res.data.flag){
                    alert('收货成功')
                    this.items.forEach((item,index) =>{
                      if(item.id === orderId){
                        item.state = 2;
                      }
                    })
                    this.$message({
                        message: '收货成功',
                        type: 'success'
                    })
                }else{
                    this.$message({
                        message: '收货失败',
                        type: 'error'
                    })
                }
      })
    }

  }
}

</script>


<style scoped lang="less">

.MyOrder{
  .tagList{
    li{
      text-align: center;
      display: inline-block;
      font-weight: 550;
      font-size: 18px;
      border-bottom: 2px solid #e6e8eb;
      cursor: pointer;
      padding: 10px 20px;
      position: relative;
      &:after{
        top:12px;
        right: 0;
        position:absolute;
        content:'';
        width: 1px;
        height: 15px;
        background-color: #e6e8eb;
      }
      &:last-child{
        &:after{
          display:none;
        }
      }
    }
    .selected{
      color:#b4a078;
      border-bottom: 2px solid #e6e8eb;
    }
  }
  .orderBox{
    width: 100%;
    margin-top: 20px;
    .orderTableHeader{
      width: 100%;
      height: 40px;
      background-color: #f5f5f5;
      border: 1px solid #e6e8eb;
      color: #7d7d7d;
      font-size: 14px;
      line-height: 40px;
      span{
        display: inline-block;
        width: 14%;
        &:first-child{
          width:40%;
          text-align: center;
        }
      }
    }
    .orderList{
      width: 100%;
      li{
        border: 1px solid #e6e8eb;
        font-size: 13px;
        margin-top: 10px;
        .orderHeader{
          background-color: #f1f1f1;
          height: 40px;
          line-height: 40px;
          padding: 0 5px;
          .orderTime{
            font-weight: 600;
          }
          .orderId,.state{
            margin-left: 10px;
          }
          .deleteBtn{
            float: right;
            cursor: pointer;
            
          }
        }
        .orderDetail{
          width: 100%;
          padding: 10px;
          position: relative;
          overflow: hidden;
          img{
            width: 84px;
            height: 84px;
            display: inline-block;
          }
          .goodsName{
            display: inline-block;
            margin-left: 5px;
            width: 230px;
            vertical-align: top;
            p{
              cursor: pointer;
              line-height: 20px;
              &:hover{
                text-decoration:underline;
              }
            }
            span{
              color:#7d7d7d;
              display: block;
              margin-top: 10px;
            }
          }
          .unitPrice,.num,.amount,.hasComment{
            display: inline-block;
            vertical-align: top;
            width: 15%;
            height: 85px;
            line-height: 85px;
            text-align: center;
          }
          button{
            position: absolute;
            right: 90px;
            bottom: 40px;
            width: 70px;
            height: 30px;
            border-radius: 3px;
            background-color: #b4a078;
            color:white;
            border: none;
          }
        }
      }
    }
  }
  .popupContent{
    padding: 10px;
    .scoreBox{
      width: 100%;
      height: 50px;
      position: relative;
      line-height: 50px;
      text-align: left;
      .tips{
        font-size: 15px;
        vertical-align: middle;
        display: inline-block;
      }
      i{
        cursor: pointer;
        vertical-align: middle;
        display: inline-block;
        font-size: 25px;
        margin-right: 5px;
        -webkit-text-stroke: 1px #f9bd4f;
      }
    }
    textarea{
      width: 400px;
      height: 80px;
      padding: 5px;
      border:1px solid #e6e8eb;
      display: block;
      margin-top: 10px;
    }
    button{
      display: block;
      margin: 10px auto;
      width: 70px;
      height: 30px;
      border-radius: 3px;
      background-color: #313541;
      color:white;
      border: none;
    }
  }
}
</style>