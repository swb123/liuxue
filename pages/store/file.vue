<template>
<div class="wrapper"> 
<div class="sj-content"> 
    <div class="left-nav"> 
     <div class="float-nav" id="float-nav"> 
      <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical"> 
       <router-link tag="li" to="/store" active-class="active" exact><a>留学申请</a></router-link>
       <router-link tag="li" to="/store/exam" active-class="active"><a>留学考试</a></router-link>
       <router-link tag="li" to="/store/file" active-class="active"><a>留学文件</a></router-link>
<<<<<<< HEAD
=======
       <router-link tag="li" to="/store/advance" active-class="active"><a>能力提升</a></router-link>
       <router-link tag="li" to="/store/apartment" active-class="active"><a>留学公寓</a></router-link>
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
       <router-link tag="li" to="/store/life" active-class="active"><a>留学生活</a></router-link>

      </ul> 
     </div> 
    </div> 
    <div class="right-content">

        <div class="fl middle">
<<<<<<< HEAD
        
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
=======
            <div class="control-group">
                <el-select id = "inputaccount" v-model="value8" filterable placeholder="文件类型">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
                <el-select id = "inputaccount" v-model="value9" filterable placeholder="地区类型">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
            </div>
            <div class="control-group">
                
                <el-select id = "inputaccount" v-model="value8" filterable placeholder="学历">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
                <el-select id = "inputaccount" v-model="value9" filterable placeholder="专业方向">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
            </div>
            <br/>
  <div class="wrapper activities"> 
   <div class="activity-card-list"> 
    <div > 
     <ul class="activity"> 
      <li class="activity-item"> 
       <div class="activity-inner"> 
        <a href="http://"></a> 
        <div class="img">
         <a href="~/assets/activity-detail.html" target="_blank"><img src="~/assets/img/widget-activity1.png" alt="" /></a>
        </div> 
        <div class="text"> 
         <p class="title">文件代写</p> 
         <div class="fl goin"> 
          <p>价格：300</p> 
         </div> 
         <div class="fr btn"> 
          <span class="sui-btn btn-bao">加入购物车</span> 
         </div> 
         <div class="clearfix"></div> 
        </div> 
       </div> </li> 
      <li class="activity-item"> 
       <div class="activity-inner"> 
        <a href="http://"></a> 
        <div class="img">
         <a href="~/assets/activity-detail.html" target="_blank"><img src="~/assets/img/widget-activity2.png" alt="" /></a>
        </div> 
        <div class="text"> 
         <p class="title">文件代谢</p> 
         <div class="fl goin"> 
          <p>价格：300</p> 
         </div> 
         <div class="fr btn"> 
          <span class="sui-btn btn-bao">加入购物车</span> 
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
         </div> 
         <div class="clearfix"></div> 
        </div> 
       </div> </li> 
     </ul> 
<<<<<<< HEAD
=======
     <ul class="activity">
        <li class="activity-item"> 
       <div class="activity-inner"> 
        <a href="http://"></a> 
        <div class="img">
         <a href="~/assets/activity-detail.html" target="_blank"><img src="~/assets/img/widget-activity1.png" alt="" /></a>
        </div> 
        <div class="text"> 
         <p class="title">文件代谢</p> 
         <div class="fl goin"> 
          <p>价格：300</p> 
         </div> 
         <div class="fr btn"> 
          <span class="sui-btn btn-bao">加入购物车</span> 
         </div> 
         <div class="clearfix"></div> 
        </div> 
       </div> </li> 
        <li class="activity-item"> 
       <div class="activity-inner"> 
        <a href="http://"></a> 
        <div class="img">
         <a href="~/assets/activity-detail.html" target="_blank"><img src="~/assets/img/widget-activity1.png" alt="" /></a>
        </div> 
        <div class="text"> 
         <p class="title">文件代写</p> 
         <div class="fl goin"> 
          <p>价格：300</p> 
         </div> 
         <div class="fr btn"> 
          <span class="sui-btn btn-bao">加入购物车</span> 
         </div> 
         <div class="clearfix"></div> 
        </div> 
       </div> </li> 
     </ul>
     <ul class="activity">
        <li class="activity-item"> 
       <div class="activity-inner"> 
        <a href="http://"></a> 
        <div class="img">
         <a href="~/assets/activity-detail.html" target="_blank"><img src="~/assets/img/widget-activity1.png" alt="" /></a>
        </div> 
        <div class="text"> 
         <p class="title">文件代写</p> 
         <div class="fl goin"> 
          <p>价格：300</p> 
         </div> 
         <div class="fr btn"> 
          <span class="sui-btn btn-bao">加入购物车</span> 
         </div> 
         <div class="clearfix"></div> 
        </div> 
       </div> </li> 
        <li class="activity-item"> 
       <div class="activity-inner"> 
        <a href="http://"></a> 
        <div class="img">
         <a href="~/assets/activity-detail.html" target="_blank"><img src="~/assets/img/widget-activity1.png" alt="" /></a>
        </div> 
        <div class="text"> 
         <p class="title">文件代写</p> 
         <div class="fl goin"> 
          <p>价格：300</p> 
         </div> 
         <div class="fr btn"> 
          <span class="sui-btn btn-bao">加入购物车</span> 
         </div> 
         <div class="clearfix"></div> 
        </div> 
       </div> </li> 
     </ul>
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a

    </div> 
   </div>
  </div>
        </div>
<<<<<<< HEAD
        <div class="fl right">  
=======
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
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
     </div> 

     </div> 
    </div> 
   </div> 

</template>
<script>
import '~/assets/css/page-headline-logined.css'
import '~/assets/css/page-sj-activity-index.css'
<<<<<<< HEAD
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
=======
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '澳洲'
        }, {
          value: '选项2',
          label: '美国'
        }, {
          value: '选项3',
          label: '英国'
        }, {
          value: '选项4',
          label: '日本'
        }, {
          value: '选项5',
          label: '新西兰'
        }],
        value8: '',
        options1: [{
          value: '选项1',
          label: '墨尔本'
        }, {
          value: '选项2',
          label: '芝加哥'
        }, {
          value: '选项3',
          label: '伦敦'
        }, {
          value: '选项4',
          label: '东京'
        }, {
          value: '选项5',
          label: '新西兰'
        }],
        value9: ''
      }
    }
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
  
}
</script>

