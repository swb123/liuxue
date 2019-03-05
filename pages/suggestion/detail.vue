<template>
<div class="wrapper"> 
<div class="sj-content"> 
    <div class="left-nav"> 
     <div class="float-nav" id="float-nav"> 
      <ul class="sui-nav nav-tabs nav-xlarge tab-navbar tab-vertical"> 
       <router-link tag="li" to="/education" active-class="active" exact><a>申请成功率</a></router-link>
       <router-link tag="li" to="/qa" active-class="active"><a>竞争力分析</a></router-link>
      </ul> 
     </div> 
    </div> 
    <div class="right-content">

        <div class="fl middle">
    <div class="data-list">  
    <el-table :data="tableData" style="width: 100%" :show-header = false>
        <el-table-column label="图片" width="180">
        <template slot-scope="scope">
            <img :src="scope.row.pic"/>
        </template>
        </el-table-column>
        <el-table-column label="综合信息" width="200">
        <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
            <p>QS世界大学排名{{ scope.row.number }}</p>
            <p>学费{{ scope.row.tuition }}</p>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
        </template>
        </el-table-column>
        <el-table-column>
            <template slot-scope="scope" >
            <el-progress type="circle" :percentage="40" width="100"></el-progress>
            
            </template>
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button size="mini" type="danger"
            @click="handleDelete(scope.$index, scope.row)">加入仓库</el-button>
        </template>
        </el-table-column>
    </el-table>  
    </div> 
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
        value9: '',
        tableData: [{
          pic:require('~/assets/img/Unimelb.jpg'),
          name: '墨尔本大学',
          tuition: '$20000',
          number: '12'
          
        }, {
          pic:require('~/assets/img/widget-list01.png'),
          name: '墨尔本大学',
          tuition: '$20000',
          number: '12'
        }, {
          pic:require('~/assets/img/widget-list01.png'),
          name: '墨尔本大学',
          tuition:  '$20000',
          number: '12'
        }, {
          pic:require('~/assets/img/widget-list01.png'),
          name: '墨尔本大学',
          tuition: '$20000',
          number: '12'
        }]
      }
    }
  
}
</script>

