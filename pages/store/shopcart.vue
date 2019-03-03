<template>
  <div class="Cart">
    <div v-if="items.length>0">
      <div class="cartTableHeader">
        <span>商品信息</span>
        <span>单价</span>
        <span>数量</span>
        <span>小计</span>
        <span>交易操作</span>
      </div>
      <ul class="orderList">
        <li v-for="(item,index) in items" :key="index">
          <div class="orderDetail">
            <img :src="item.goods.image" alt="商品图片" />
            <div class="goodsName">
                <nuxt-link :to="'/store/item/'+item.goods.id">{{item.goods.name}}</nuxt-link>
            </div>
            <span class="unitPrice">{{'￥'+item.goods.price}}</span>
            <span class="num">
              <NumberInput 
                @changeHandle="numberChange(item.id)" 
                :initNum="item.itemNum" 
                v-model="item.itemNum" 
                :min="1" 
                :max="999"
              />
            </span>
            <span class="amount">{{'￥'+item.amount}}</span>
            <button @click="deleteOrder(item.id)">删除</button>
          </div>
        </li>
      </ul>
      <div class="cartFooter">
        <span>应付金额：</span>
        <span class="total">{{'￥'+totalAmount}}</span>
        <button @click="settleAccounts">下单</button>
      </div>
    </div>
    <p class="emptyTips" v-else>购物车还是空滴~</p>
      </div>
</template>

<script>
import { mapState } from 'vuex'
import NumberInput from '@/components/NumberInput'
import clientAPI from '@/api/client'
export default {
  name: 'Cart',
  components:{
    NumberInput
  },
  computed:{
    // ...mapState([
    //   'clientToken'
    // ]),
    totalAmount(){
      let amount = 0;
      this.items.forEach(item=>{
          amount+=item.amount;
      });
      // this.orderList.map((item,index)=>{
      //   amount+=item.amount;
      // // })
      return amount;
    }
  },
  data () {
    return {
      cartList:[],
      items:{},
      pageNo:1
    }
  },
  //需要加上userId
 asyncData(){
      return  clientAPI.searchCart(1,12,{state:'1'}).then( res => {
          return {
            items: res.data.data.rows }
       })
    },
  methods:{
    loadMore(){
        this.pageNo++
        clientAPI.searchCart(this.pageNo,12,{state:'1'}).then( res => {
          this.items = this.items.concat( res.data.data.rows )
        })
    },
    numberChange(cartId){
      this.items.forEach((item, index) => {
        if(item.id == cartId){
          item.amount = item.itemNum*item.goods.price;
        }
      })
    },
    //   this.items.map((item,index)=>{
    //     if(cartId===item.id){
    //       item.amount = item.itemNum*item.goods.price;
    //    console.log(item.itemNum,item.goods.price)
    //     }
    //   })
    // },

    deleteOrder(cartId){
       clientAPI.deleteOrderInCart(cartId).then(res =>{
                if(res.data.flag){
                    alert('商品删除成功！请继续购物')
                    // this.cartList.items((item,index)=>{
                    //   if(item.id===cartId){
                    //     this.cartList.splice(index,1);
                    //   }
                    // })
                    this.$message({
                        message: '商品删除成功',
                        type: 'success'
                    })
                    this.items.forEach((item, index) => {
                      if(item.id == cartId){
                          this.items.splice(index, 1);
                       }
                    })
                  //  this.items = {}

                }else{
                    this.$message({
                        message: '商品删除失败',
                        type: 'error'
                    })
                }
          })
    },
    //下单
    settleAccounts(){
      clientAPI.settleAccounts(this.items).then(res =>{
        if(res.data.flag){
                    alert('下单成功！请到订单中心支付')
                    this.$message({
                        message: '下单成功',
                        type: 'success'
                    })
                   // this.cartList=[];
                   this.items={};
                }else{
                    this.$message({
                        message: '下单失败',
                        type: 'error'
                    })
                }
      })
  },
  //   mounted(){
  //   this.getOrderByState(0);
  // }
  }
}
</script>

<style scoped lang="less">

.Cart{
  width: 100%;
  .emptyTips{
      width: 500px;
      // text-align: right;
      display: block;
      margin: 30px auto;
      color:#b4a078;
      font-size: 20px;
  }
  .cartTableHeader{
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
      border-top: none;
      font-size: 13px;
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
        .unitPrice,.num,.amount{
          display: inline-block;
          vertical-align: top;
          width: 15%;
          height: 85px;
          line-height: 85px;
          text-align: center;
        }
        .NumberInput{
          position: relative;
          top: 25px;
        }
        button{
          position: absolute;
          right: 90px;
          bottom: 40px;
          width: 70px;
          height: 30px;
          border-radius: 3px;
          background-color: #be4141;
          color:white;
          border: none;

        }
      }
    }
  }
  .cartFooter{
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
    border: 1px solid #e6e8eb;
    border-top: none;
    background-color: #f5f5f5;
    position: relative;
    span{
      color: #7d7d7d;
      display: inline-block;
      vertical-align: top;
    }
    .total{
      color:#be4141;
      font-size: 25px;
      font-weight: 600;
    }
    button{
      position: absolute;
      right: 0;
      top: 0;
      width: 100px;
      height: 100%;
      background-color: #b4a078;
      border: none;
      color:white;
      font-size: 20px;
    }
  }
}
</style>