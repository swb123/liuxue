<template>
<div>
<div class="tab-content"> 
     <div id="index" class="tab-pane active"> 
      <div class="tab-bottom-line"> 
       <ul class="  nav-tabs nav-xlarge sui-nav "> 
       <!-- <li :class="actives1[0]" @click="getcollegeIn() "><a href="#">学校介绍</a></li>  -->
        <router-link tag="li" to="" @click.native="getcollegeIn() " active-class="active" exact><a>学校介绍</a></router-link>
        <router-link tag="li" to="" @click.native="getadmission() " active-class="active" ><a>录取要求</a></router-link>
        <router-link tag="li" to="" @click.native="getmajor() " active-class="active" ><a>专业介绍</a></router-link>
        <router-link tag="li" to="" @click.native="getInform() " active-class="active" ><a>相关资讯</a></router-link>
       <!-- <li :class="actives1[1]" @click="getadmission() "><a href="#">录取要求</a></li> 
       <li :class="actives1[2]" @click="getmajor() "><a href="#">专业介绍</a></li> 
       <li :class="actives1[3]" @click="getInform() "><a href="#">相关资讯</a></li>  -->
       </ul> 
        
      </div> 
     </div> 
    </div> 
  <div v-if="collegeIn">
  <div class="sj-content"  > 
    <div class="left-nav"> 
     <div class="float-nav" id="float-nav"> 
      <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical"> 
       <li :class="actives[0]" @click="getcityInfo()"><a href="#"> 地理位置</a></li> 
       <li :class="actives[1]" @click="getcollegeInfo()"><a href="#">学校概况</a></li> 
       <li :class="actives[2]" @click="getcollegeRank()"><a href="#">学校设施</a></li>  
       <li :class="actives[3]" @click="getcollegeFacilities()"><a href="#">学校排名</a></li> 
       <li :class="actives[4]" @click="getcollegeemail()"><a href="#">联系方式</a></li> 
      </ul> 
     </div> 
    </div> 
    
    <div class="data-list"  >
        <ul class="headline fixed" id="headline"> 
          <div id="box">
            <div class="words inside-box" v-if="city" > 
              <br/><br/>
                <h3 > 
                {{item.cityInfo}}
                <div class="clearfix"></div> </h3> 
            </div>
            <div class="words inside-box" v-else-if="college" > 
            <br/><br/>
            <h3 > 
            {{item.collegeInfo}}
            <div class="clearfix"></div> </h3> 
            </div>
            <div class="words inside-box" v-else-if="collegeRank" > 
              <br/><br/>
              <h3 > 
              {{item.collegeRank}}
              <div class="clearfix"></div> </h3> 
            </div>
            <div class="words inside-box" v-else-if="collegeFacilities" > 
              <br/><br/>
              <h3 > 
              {{item.collegeFacilities}}
              <div class="clearfix"></div> </h3> 
            </div>
            <div class="words inside-box" v-else-if="collegeemail" > 
              <br/><br/>
              <h3 > 
              {{item.collegeemail}}
              <div class="clearfix"></div> </h3> 
            </div>

          </div>
        </ul>
    </div> 
  </div>
  </div> 
  <div v-else-if="admission">
  <div class="sj-content" > 
    <div class="left-nav"> 
     <div class="float-nav" id="float-nav"> 
      <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical"> 
       <li :class="actives1[0]" @click="getcolRequirPost() "><a href="#">研究生入学条件</a></li> 
       <li :class="actives1[1]" @click="getcolRequirUnder()"><a href="#">本科入学条件</a></li> 
      </ul> 
     </div> 
    </div> 
    <div class="data-list"  >
        <ul class="headline fixed" id="headline"> 
          <div id="box">
            <div class="words inside-box" v-if="Post" > 
              <br/><br/>
                <h3 > 
                {{item.cityInfo}}
                <div class="clearfix"></div> </h3> 
            </div>
            <div class="words inside-box" v-else > 
              <br/><br/>
                <h3 > 
                  {{item.colRequirPost}}
                <!-- {{item.cityInfo}} -->
                <div class="clearfix"></div> </h3> 
            </div>

          </div>
        </ul>
    </div> 

    <!-- <div id="li-box">
      <div class="words in-box" v-if="Post" > 
        <br/><br/>
          <h3 > 
          {{item.colRequirPost}}
          <div class="clearfix"></div> </h3> 
      </div>
      <div class="words in-box" v-else > 
        <br/><br/>
          <h3 > 
          {{item.colRequirUnder}}
          <div class="clearfix"></div> </h3> 
      </div>
    </div> -->
  </div> 
  </div>

  <div  v-else-if="major">
  <div >
    <br/>
      <div class="control-group" >
          <!-- <label for="inputaccount" class="control-label" style = " margin:10px;font-size:20px">专业性质</label> -->
           <form @submit.prevent="submit">
            <div class="control-group">
              
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
            <el-button type="submit" @click="searchmajorColl(result2)" style="float:middle">搜索专业</el-button><br/><br/>
          </form>
      </div>

      <div class="data-list">  
      <el-table :data="majorlist" style="width: 100%" :show-header = false>
          <el-table-column label="专业信息" width="500">
          <template slot-scope="scope">
              <p>{{majorlist[scope.$index].majorName}}  
                {{majorlist[scope.$index].majorType}} </p>

              <el-tag>{{majorlist[scope.$index].majorLabel1}}</el-tag>
              <el-tag type="success">{{majorlist[scope.$index].majorLabel2}}</el-tag>
              <el-tag type="info">{{majorlist[scope.$index].majorLabel3}}</el-tag>

          </template>
          </el-table-column>
          <el-table-column label="操作">
          <template slot-scope="scope">
            <el-popover
          placement="right"
          width="80px"
          trigger="click">
          <el-progress type="circle" :percentage="item.collegeRank" width="100"></el-progress>

          <el-button size="mini" slot="reference">录取几率</el-button>
      </el-popover> 
              <!-- <el-button size="mini" type="danger"
              @click="handleDelete(scope.$index, scope.row)">测试录取</el-button> -->
              <br/><br/>
              <el-button size="mini" type="danger"
              @click="handleWarehousing(item.collegeId, majorlist[scope.$index].majorId)">加入仓库</el-button>
          </template>
          </el-table-column>
      </el-table>  
      </div> 
  </div>
</div>

  <div v-else-if="Inform">
    <br/><br/><br/>
    <h3 > 
      {{item.cityInfo}}
      <div class="clearfix"></div> </h3>

  </div>

 



</div>  
</template>
<script>

import "~/assets/css/page-sj-person-homepage.css"
import "~/assets/css/page-sj-headline-login.css"
import axios from 'axios'
import educationApi from '@/api/education'


export default {
   data() {
      
      return {
        actives:["active","inactive","inactive","inactive","inactive","inactive"],
        actives1:["active","inactive"],
        selectedOptions2: [],
        result2:[],
        Post:true,
        collegeIn:true,
        admission:false,
        major:false,
        Inform:false,
        city:true,
        college:false,
        collegeRank:false,
        collegeFacilities:false,
        collegeemail:false,
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
  }},
  asyncData({params}){
      // return educationApi.findById(params.collegeId).then( res =>{
      //   return {item: res.data.data.rows }
      // })
      return axios.all([educationApi.findById(params.collegeId), educationApi.getmajorList() ]).then(
      axios.spread( function( item,majorlist ){
        return {
          item: item.data.data.rows,
          majorlist: majorlist.data.data.rows
        }
      })
    )
      
    },
  
    methods: {
      getcollegeIn(){
            this.collegeIn=true,
            this.admission=false,
            this.major=false,
            this.Inform=false,
            this.actives=["active","inactive","inactive","inactive"]
            
      },
      getadmission(){
            this.collegeIn=false,
            this.admission=true,
            this.major=false,
            this.Inform=false,
            this.actives=["inactive","active","inactive","inactive"]
            
      },
      getmajor(){
            this.collegeIn=false,
            this.admission=false,
            this.major=true,
            this.Inform=false,
            
            this.actives=["inactive","inactive","active","inactive"]

            
      },
      getInform(){
            this.collegeIn=false,
            this.admission=false,
            this.major=false,
            this.Inform=true,
            this.actives=["inactive","inactive","inactive","active"]
            
      },
      getcityInfo(){
            this.city=true,
            this.college=false,
            this.collegeRank=false,
            this.collegeFacilities=false,
            this.collegeemail=false,
            this.actives=["active","inactive","inactive","inactive","inactive","inactive"]
            
      }, 
      getcollegeInfo(){
              this.city=false,
              this.college=true,
              this.collegeRank=false,
              this.collegeFacilities=false,
              this.collegeemail=false,
              this.actives=["inactive","active","inactive","inactive","inactive"]
      },
      getcollegeRank(){
              this.city=false,
              this.college=false,
              this.collegeRank=true,
              this.collegeFacilities=false,
              this.collegeemail=false,
              this.actives=["inactive","inactive","active","inactive","inactive"]
      },
      getcollegeFacilities(){
              this.city=false,
              this.college=false,
              this.collegeRank=false,
              this.collegeFacilities=true,
              this.collegeemail=false,
              this.actives=["inactive","inactive","inactive","active","inactive"]
      },
      getcollegeemail(){
              this.city=false,
              this.college=false,
              this.collegeRank=false,
              this.collegeFacilities=false,
              this.collegeemail=true,
              this.actives=["inactive","inactive","inactive","inactive","active"]
      },
      getcolRequirPost(){
            this.Post=true,
            this.actives1=["active","inactive"]
      },
      getcolRequirUnder(){
              this.Post=false,
              this.actives1=["inactive","active"]
      },
      handleChange2(value) {
        this.result2[0]=value
        console.log(value);
      },
      handleWarehousing(collegeId, majorId) {
        this.$message({
            message: "加入仓库成功",
            type: 'success'
        });
      },
      searchmajorColl(result2){

         educationApi.searchmajorColl({collegeCity:result2[0][1]}).then( res => {
          this.majorlist = res.data.data.rows 
        })

      },
    }

}
</script>