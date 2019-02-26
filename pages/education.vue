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
            <div class="control-group">
                <label for="inputaccount" class="control-label" style = " margin:10px;font-size:20px">选择地区</label>
                <el-select id = "inputaccount" v-model="value8" filterable placeholder="地区">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
                <el-select id = "inputaccount" v-model="value9" filterable placeholder="城市">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
            </div>
            <div class="control-group">
                <label for="inputaccount" class="control-label" style = " margin:10px;font-size:20px">专业性质</label>
                <el-select id = "inputaccount" v-model="value8" filterable placeholder="学位类型">
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
            <nuxt-child/>
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
        value9: ''
      }
    }
  
}
</script>

