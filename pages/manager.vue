<template>
    <div>
<<<<<<< HEAD
        <div class="myhome-personinfo" style="background-color:#FF9797"> 
=======
        <div class="myhome-personinfo" style="background-color:#AEDD81"> 
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
            <div class="wrapper"> 
                <div class="person-baseinfo"> 
                <!--头像信息--> 
                <div class="photo"> 
<<<<<<< HEAD
                <img :src="user.avatar" alt="" class="person" /> 
                <div class="share"> 
                <span><img src="~/assets/img/asset-QQ.png" alt="" width="28" height="28" /></span> 
=======
                <img src="~/assets/img/widget-myphoto.jpg" alt="" class="person" /> 
                <div class="share"> 
                <span><img src="~/assets/img/asset-QQ.png" alt="" width="34" height="28" /></span> 
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
                <span><img src="~/assets/img/asset-weixin.png" alt="" width="28" height="28" /></span> 
                <span><img src="~/assets/img/asset-weibo.png" alt="" width="28" height="28" /></span> 
                </div> 
                </div> 
                <!--文字信息--> 
                <div class="info"> 
<<<<<<< HEAD
                <h1>{{this.user.name}}<span class="allinfo"><a href="/manager/account" target="_blank">查看我的个人信息</a></span></h1> 
=======
                <h1>小白<span class="allinfo"><a href="/manager/myfile" target="_blank">查看我的个人信息</a></span></h1> 
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
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
<<<<<<< HEAD
                <router-link to="/manager" tag="li" active-class="active" exact><a>我的评估</a></router-link>                        
                <router-link to="/manager/myshare" tag="li" active-class="active"><a>我的订单</a></router-link> 
                <router-link to="/warehouse" tag="li" active-class="active"><a>我的仓库</a></router-link>  
                <router-link to="/manager/account" tag="li" active-class="active"><a>账户设置</a></router-link>    
                <router-link to="/manager/goods" tag="li" active-class="active"><a>申请商家</a></router-link>          
=======
                <router-link to="/manager" tag="li" active-class="active" exact><a>简述</a></router-link>
                <router-link to="/manager/myanswer" tag="li" active-class="active"><a>消息</a></router-link>
                <router-link to="/manager/shoppingCart" tag="li" active-class="active"><a>购物车</a></router-link>
                <router-link to="/manager/myshare" tag="li" active-class="active"><a>我的订单</a></router-link>
                <!--<router-link to="/manager/dynamic" tag="li" active-class="active"><a>账户设置</a></router-link>-->
                <router-link to="/manager/myfocus" tag="li" active-class="active"><a>我的仓库</a></router-link>
                <!--<router-link to="/manager/mycollect" tag="li" active-class="active"><a>我的收藏</a></router-link>-->
                <!--<router-link to="/manager/myreaded" tag="li" active-class="active"><a>浏览记录</a></router-link>-->
                <router-link to="/manager/account" tag="li" active-class="active"><a>账户设置</a></router-link>            
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
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
<<<<<<< HEAD

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
=======
<script>
import '~/assets/css/page-sj-person-homepage.css'
import {getUser} from '@/utils/auth'
export default {
    created(){
        if(getUser().name===undefined){
            this.$router.push('/login')
        }
>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
    }
}
</script>
