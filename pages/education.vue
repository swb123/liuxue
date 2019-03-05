<template>
<div class="wrapper"> 
<div class="sj-content"> 
    <div class="left-nav"> 
     <div class="float-nav" id="float-nav"> 
      <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical"> 
       <router-link tag="li" to="/education" active-class="active" exact><a>国家地区</a></router-link>
       <router-link tag="li" to="/qa" active-class="active"><a>澳洲</a></router-link>
       <router-link tag="li" to="/gathering" active-class="active"><a>美国</a></router-link>
       <router-link tag="li" to="/friend" active-class="active"><a>英国</a></router-link>
       <router-link tag="li" to="/spit" active-class="active"><a>日本</a></router-link>
       <router-link tag="li" to="/recruit" active-class="active"><a>新西兰</a></router-link>

      </ul> 
     </div> 
    </div> 
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
              <div class="block">
                <span class="demonstration" style = " margin:10px;font-size:20px">选择专业</span>
                <el-cascader
                  expand-trigger="hover"
                  :options="options2"
                  v-model="selectedOptions2"
                  @change="handleChange2">
                </el-cascader>
              </div>
            </div>
            <el-button type="submit" @click="searchColl(result1,result2)" style="float:middle">搜索院校</el-button><br/>
          </form>
          <br/>
          <br/>
          <div id="box"  > 
            <!-- <div v-for="(item,index) in items" :key="index">   -->
            <el-table :data="items" style="width: 100%" :show-header = false  >
                <el-table-column label="图片" width="180">
                <template >
                    <img src="~/assets/img/Unimelb.jpg"/>
                </template>
                </el-table-column>
                <el-table-column :label="key" width="350" >
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
            
       <br/>
            
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
       
        options2: [{
          value: 'Engineering',
          label: '工学',
          children: [{
              value: 'computer science',
              label: '计算机'
            }, {
              value: 'software engineering',
              label: '软件工程'
            }, {
              value: 'Electronic Information Science and Technology',
              label: '电子信息科学与技术'
            }, {
              value: 'Communication Engineering',
              label: '通讯工程'
            }, ],
        }, {
          value: 'Neo Confucianism',
          label: '理学',
		  children: [{
          value: 'Mathematics',
          label: '数学'
        }, {
          value: 'Physics',
          label: '物理'
        }, {
          value: 'Statistics',
          label: '统计学'
        }, {
          value: 'Chemistry',
          label: '化学'
        }, ],
        }, {
          value: 'literature',
          label: '文学',
		  children: [{
          value: 'Journalism and Communication',
          label: '新闻传播学'
        }, {
          value: 'Chinese Language and Literature',
          label: '中国语言文学'
        }, {
          value: 'Foreign Language and Literature',
          label: '外国语言文学'
        }, {
          value: 'translate',
          label: '翻译'
        }, ],
        }, {
          value: 'Medical Science',
          label: '医学',
		  children: [{
          value: 'clinical medicine',
          label: '临床医学'
        }, {
          value: 'Basic Medicine',
          label: '基础医学'
        }, {
          value: 'Nursing',
          label: '护理学'
        }, {
          value: 'Anesthesiology',
          label: '麻醉学'
        }, ],
        },],
        value10: '',
        selectedOptions: [],
        selectedOptions2: [],
        result1:[],
      }
    },
     methods: {
      loadMore(){
        this.pageNo++
        educationApi.search(this.pageNo,12,{state:'1'}).then( res => {
          this.items = this.items.concat( res.data.data.rows )
        })

      },
      searchColl(result1,result2){
        console.log(result1[0]);
        console.log(result1[1]);
         educationApi.searchColl({collegeCity:result1[0][1]}).then( res => {
          this.items = res.data.data.rows 
        })

      },
      handleDetils() {
        location.href="'/school/item/'+item.colleageId"
      },

      optionsShow:function(){
        this.optionsisShow=true;
      },
      handleChange(value) {
         this.result1[0]=value
        console.log(value);
      },
      handleChange2(value) {
        this.result1[1]=value
        console.log(value);
      }
 
    },
    

  
}
</script>

