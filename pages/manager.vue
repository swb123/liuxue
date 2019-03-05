<template>
    <div>
        <div class="myhome-personinfo" style="background-color:#FF9797"> 
            <div class="wrapper"> 
                <div class="person-baseinfo"> 
                <!--头像信息--> 
                <div class="photo"> 
                <img :src="user.avatar" alt="" class="person" /> 
                <div class="share"> 
                <span><img src="~/assets/img/asset-weixin.png" alt="" width="28" height="28" /></span> 
                <span><img src="~/assets/img/asset-weibo.png" alt="" width="28" height="28" /></span> 
                </div> 
                </div> 
                <!--文字信息--> 
                <div class="info"> 
                <h1>{{this.user.name}}<span class="allinfo"><a href="/manager/account" target="_blank">查看我的个人信息</a></span></h1> 
                <ul class="fill"> 
                <li> <i class="fa fa-map-marker" aria-hidden="true"></i> <span class="edit-item"> 填写现居城市</span> 
                    <form action="" class="sui-form form-inline"> 
                    <input type="text" placeholder="现居城市" /> 
                    <button class="sui-btn btn-danger save-btn">保存</button> 
                    </form> </li> 
                <li> <i class="fa fa-graduation-cap" aria-hidden="true"></i> <span class="edit-item"> 填写毕业院校</span> 
                    <form action="" class="sui-form form-inline"> 
                    <input type="text" placeholder="院校名称" /> 
                    <input type="text" placeholder="所学专业" /> 
                    <button class="sui-btn btn-danger save-btn">保存</button> 
                    </form> </li> 
                <li> <i class="fa fa-shopping-bag" aria-hidden="true"></i> <span class="edit-item"> 填写所在公司/组织</span> 
                    <form action="" class="sui-form form-inline"> 
                    <input type="text" placeholder="公司/组织名称" /> 
                    <input type="text" placeholder="职位头衔" /> 
                    <button class="sui-btn btn-danger save-btn">保存</button> 
                    </form> </li> 
                <li> <i class="fa fa-link" aria-hidden="true"></i> <span class="edit-item"> 填写个人网站</span> 
                    <form action="" class="sui-form form-inline"> 
                    <input type="text" placeholder="个人网站" /> 
                    <button class="sui-btn btn-danger save-btn">保存</button> 
                    </form> </li> 
                </ul> 
                </div> 
                </div> 
                <!--右侧编辑--> 
                <div class="edit-info"> 
                <h4>个人简介<span class="addedit"><img src="~/assets/img/widget-edit.png" width="12" height="12" />编辑</span></h4> 
                <div class="info-box"> 
                <div class="edit-intro">
                暂时没有个人简介
                </div> 
                </div> 
                </div> 
                <div class="clearfix"></div> 
            </div> 
        </div> 
        <div class="wrapper  myhome"> 
            <div class="left-list"> 
                <div class="myhome-list"> 
                <ul class="home-list"> 
                <router-link to="/manager" tag="li" active-class="active" exact><a>我的评估</a></router-link>                        
                <router-link to="/store/order" tag="li" active-class="active"><a>我的订单</a></router-link> 
                <router-link to="/warehouse" tag="li" active-class="active"><a>我的仓库</a></router-link>  
                <router-link to="/manager/account" tag="li" active-class="active"><a>账户设置</a></router-link>    
                <router-link to="/manager/goods" tag="li" active-class="active"><a>商品管理</a></router-link>          
                </ul> 
                </div> 
            </div> 
            <div class="right-content"> 
                <nuxt-child/>
            </div> 
            <div class="clearfix"></div> 
        </div> 
    </div>
</template>

<script>
import '~/assets/css/page-sj-person-homepage.css'
import {getUser} from '@/utils/auth'

export default {
    data(){
        return {
            user: {}
        }
    },
    created(){
        if(getUser().name===undefined){           
            this.$router.push('/login')
        }
        this.user= getUser()
    }
}
</script>
