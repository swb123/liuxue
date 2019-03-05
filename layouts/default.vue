<template>
  <div class="sui-container wrapper">
      <header>

        <div class="sui-navbar"> 
            <div class="navbar-inner"> 
                <a href="/login" class="sui-brand"><img src="~/assets/img/asset-logo-black.png" alt="梦夕网" /></a> 
                <ul class="sui-nav"> 
                <router-link tag="li" to="/education" active-class="active" exact><a>院校专业</a></router-link>
                <router-link tag="li" to="/warehouse" active-class="active"><a>留学仓库</a></router-link>
                <router-link tag="li" to="/suggestion" active-class="active"><a>评估建议</a></router-link>
                <!--<router-link tag="li" to="/friend" active-class="active"><a>商城</a></router-link>-->
                <!--
                <li><a>gg
                    <el-dropdown >
                        <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                         <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><a href="/friend">留学申请</a></el-dropdown-item>
                        <el-dropdown-item><a href="/">留学考试</a></el-dropdown-item>
                        <el-dropdown-item>留学文件</el-dropdown-item>
                        <el-dropdown-item>能力提升</el-dropdown-item>
                        <el-dropdown-item>留学公寓</el-dropdown-item>
                        <el-dropdown-item>留学生活</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    </a>
                </li>
                -->
                
                <router-link tag="li" to="/store" active-class="active"><a>商城
                <el-dropdown >
                    <span class="el-dropdown-link"><i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><a href="/store">留学申请</a></el-dropdown-item>
                        <el-dropdown-item><a href="/store/exam">留学考试</a></el-dropdown-item>
                        <el-dropdown-item><a href="/store/file">留学文件</a></el-dropdown-item>
                        <el-dropdown-item><a href="/store/advance">能力提升</a></el-dropdown-item>
                        <el-dropdown-item><a href="/store/apartment">留学公寓</a></el-dropdown-item>
                        <el-dropdown-item><a href="/store/life">留学生活</a></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>                    
                </a></router-link>


            <!--    
                <router-link tag="li" to="/spit" active-class="active"><a>吐槽</a></router-link>
                <router-link tag="li" to="/recruit" active-class="active"><a>招聘</a></router-link>
                -->
                
         
                
                </ul> 
                <form class="sui-form sui-form pull-left"> 
                    <input type="text" placeholder="单行输入" /> 
                    <span class="btn-search fa fa-search"></span> 
                </form> 
				<div class="sui-nav pull-right info" v-if="user.name===undefined"> 
                    <li><a href="/store/shopcart" class="notice">购物车</a></li>
                </div>
                 <div class="sui-nav pull-right info" v-if="user.name===undefined"> 
                    <li><a href="/store/order" class="notice">订单中心</a></li>
                </div>
                
                <div class="sui-nav pull-right info" v-if="user.name!==undefined">
                    <li><a href="#" class="notice"><i class="el-icon-document sui-brand "></i></a></li>
                    <li><a href="#" class="notice"><i class="el-icon-message sui-brand "></i></a></li>
                    <li><a href="/manager" class="notice">{{user.name}}</a></li>     
                    <li><a @click="logout" class="notice">退出登陆</a></li>            
                    <li><a href="/manager"  class="homego"><img :src="user.avatar" width="50px" height="50px" :alt="user.name" /></a></li> 
                </div> 
                <div class="sui-nav pull-right info" v-if="user.name===undefined"> 
                    <li><a href="#" class="notice"><i class="el-icon-document sui-brand "></i></a></li>
                    <li><a href="#" class="notice"><i class="el-icon-message sui-brand "></i></a></li>
                    <li><a href="/login" class="notice">注册/登陆</a></li>
                </div>
            </div> 
        </div> 

        </header>
        <nuxt/>
      <footer>
        <div class="footer"> 
        <div class="wrapper"> 
            <div class="footer-bottom"> 
            <div class="link"> 
            <dl> 
            <dt>
                网站相关
            </dt> 
            <dd>
                关于我们
            </dd> 
            <dd>
                服务条款
            </dd> 
            <dd>
                帮助中心
            </dd> 
            <dd>
                编辑器语法
            </dd> 
            </dl> 
            <dl> 
            <dt>
                常用链接
            </dt> 
            <dd>
                传智播客
            </dd> 
            <dd>
                传智论坛
            </dd> 
            </dl> 
            <dl> 
            <dt>
                联系我们
            </dt> 
            <dd>
                联系我们
            </dd> 
            <dd>
                加入我们
            </dd> 
            <dd>
                建议反馈
            </dd> 
            </dl> 
            <dl> 
            <dt>
                关注我们
            </dt> 
            <dd>
                微博
            </dd> 
            <dd>
                twitter
            </dd> 
            </dl> 
            <div class="xuke"> 
            <h3>内容许可</h3> 
            <p>除特别说明外，用户内容均采用知识共享署名-非商业性使用-禁止演绎4.0 国际许可协议 (CC BY-NC-ND 4.0) 进行许可</p> 
            <p>本站由 梦夕网 提供更新服务</p> 
            </div> 
            </div> 
            <p class="Copyright">Copyright &copy; 2019 科大软院工程实践小组 当前版本 0.0.1</p> 
            </div> 
        </div> 
        </div> 
      </footer>
  </div>
</template>
<script>
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
import 'element-ui/lib/theme-chalk/index.css'

import {getUser,removeUser} from '@/utils/auth'
export default {
    data(){
        return {
            user: {}
        }
    },
    created(){
        this.user= getUser()
    },
    methods: {
        logout(){
            removeUser()
            location.href='/'
        }
    }
}
</script>
