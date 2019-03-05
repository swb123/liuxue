<template>

<div class="wrapper"> 
   <div class="block">
    <span class="demonstration"></span>
    <el-carousel :interval="3000" arrow="always" type="card" class="d_jump" height="300px">
      <el-carousel-item v-for="item1 in imgList" :key="item1.id">
        <el-row>
          <el-col :span="24"><img ref="imgHeight" :src="item1.idView" class="banner_img"/></el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
<div class="sj-content"> 
    <div class="left-nav"> 
     <div class="float-nav" id="float-nav"> 
      <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical"> 
       <router-link tag="li" to="/education" active-class="active" exact><a>国家地区</a></router-link>
       <router-link tag="li" to="/education" active-class="active"><a>澳洲</a></router-link>
       <router-link tag="li" to="/education" active-class="active"><a>美国</a></router-link>
       <router-link tag="li" to="/education" active-class="active"><a>英国</a></router-link>
       <router-link tag="li" to="/education" active-class="active"><a>日本</a></router-link>
       <router-link tag="li" to="/education" active-class="active"><a>新西兰</a></router-link> 
      </ul> 
     </div> 
</div> 
    <br/>
    <div class="right-content">

        <div class="fl middle">
          <form @submit.prevent="submit">
            <div class="control-group">
              <div class="block">
                <span class="demonstration" style = " margin:10px;font-size:20px">选择地区</span>
                <el-cascader
                  expand-trigger="hover"
                  :options="options"
                  v-model="selectedOptions"
                  @change="handleChange">
                </el-cascader>
              </div>
              <!-- <div class="block">
                <span class="demonstration" style = " margin:10px;font-size:20px">选择专业</span>
                <el-cascader
                  expand-trigger="hover"
                  :options="options2"
                  v-model="selectedOptions2"
                  @change="handleChange2">
                </el-cascader>
              </div> -->
            </div>
            <el-button type="submit" @click="searchColl(result1)" style="float:middle">搜索院校</el-button><br/>
          </form>
          <br/>
          <br/>
          <div id="box"  > 
            <!-- <div v-for="(item,index) in items" :key="index">   -->
            <el-table :data="items" style="width: 100%" :show-header = false v-for="(item,index) in items" :key="index" >
                <el-table-column label="图片" width="180">
                <template >
                    <img src="~/assets/img/Unimelb.jpg"/>
                </template>
                </el-table-column>
                <el-table-column label="key" width="350" >
                <template slot-scope="scope">
                  <nuxt-link :to="'/school/item/'+items[scope.$index].collegeId">{{items[scope.$index].collegeName}}大学</nuxt-link>
                    <p>QS世界大学排名: {{ items[scope.$index].collegeRank }}</p>
                    <p>学校官网: {{  items[scope.$index].collegeOffweb }}</p>
                </template>
                </el-table-column>
                <el-table-column label="操作">
                </el-table-column>
            </el-table>  
          <!-- </div>  -->
      </div>
            
        </div> 
       <nuxt-child/>
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
    </div> 

   </div> 

</template>
<script>
import '~/assets/css/page-headline-logined.css'
import '~/assets/css/page-sj-makeFriends-index.css'
import axios from 'axios'
import educationApi from '@/api/education'
export default {
 
   asyncData(){
      return  educationApi.getList().then( res => {
          return {items: res.data.data.rows }
       })
    },
    data() {
      
      return {
        items:[],
        imgList: [ {id: 0, idView: require('~/assets/img/banner.png')},
         {id: 1, name: '详情', idView: require('~/assets/img/banner1.png')}, 
         {id: 2, name: '推荐', idView: require('~/assets/img/banner3.png')} ],
        options: [{
          value: 'Australia',
          label: '澳洲',
          children:[
            {
              value: 'SYDNEY',
              label: '悉尼', 
            },
            {
              value: 'MELBOURNE',
              label: '墨尔本', 
            },
            {
              value: 'NEWCASTLE',
              label: '纽卡斯尔', 
            },
            ]
        }, {
          value: 'Amarica',
          label: '美国',
          children:[
            {
              value: 'Washington',
              label: '华盛顿', 
            },
            {
              value: 'New York',
              label: '纽约', 
            },
            {
              value: 'California',
              label: '加州', 
            },
            ]
        }, {
          value: 'England',
          label: '英国',
          children:[
            {
              value: 'London',
              label: '伦敦', 
            },
            {
              value: 'Birmingham',
              label: '伯明翰', 
            },
            {
              value: 'Liverpool',
              label: '利物浦', 
            },
            ]
        }, {
          value: 'Japan',
          label: '日本',
          children:[
            {
              value: 'Tokyo',
              label: '东京', 
            },
            {
              value: 'Osaka',
              label: '大阪', 
            },
            {
              value: 'Yokohama.',
              label: '横滨', 
            },
            ]
        }, {
          value: 'New Zealand',
          label: '新西兰',
          children:[
            {
              value: 'Wellington',
              label: '惠灵顿', 
            },
            {
              value: 'Auckland',
              label: '奥克兰', 
            },
            {
              value: 'Christchurch',
              label: '基督城', 
            },
            ]
        }],
       
        
        value10: '',
        selectedOptions: [],
       
      }
    },
     methods: {
      loadMore(){
        this.pageNo++
        educationApi.search(this.pageNo,12,{state:'1'}).then( res => {
          this.items = this.items.concat( res.data.data.rows )
        })

      },
      searchColl(result1){
        console.log(result1[0]);
        console.log(result1[1]);
         educationApi.searchColl({collegeCity:result1[0][1]}).then( res => {
          this.items = res.data.data.rows 
        })

      },
      handleDetils() {
        location.href="'/school/item/'+item.collegeId"
      },

      optionsShow:function(){
        this.optionsisShow=true;
      },
      handleChange(value) {
         this.result1[0]=value
        console.log(value);
      },
      
 
    },
    

  
}
</script>

<style>

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>