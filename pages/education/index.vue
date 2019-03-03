<<<<<<< HEAD
<template>
<div  v-infinite-scroll="loadMore" > 
                <div v-for="(item,index) in items" :key="index">  
                <el-table :data="items" style="width: 100%" :show-header = false>
                    <el-table-column label="图片" width="180">
                    <template >
                        <img src="~/assets/img/Unimelb.jpg"/>
                    </template>
                    </el-table-column>
                    <el-table-column label="综合信息" width="350">
                    <template >
                      <nuxt-link :to="'/school/item/'+item.collegeId">{{item.collegeName}}大学</nuxt-link>
                        <p>QS世界大学排名: {{ item.collegeRank }}</p>
                        <p>学校官网: {{  item.collegeOffweb }}</p>
                    </template>
                    </el-table-column>
                    <el-table-column label="操作">
                    <!-- <template >
                        <el-button size="mini" type="danger"
                        @click="handleDetils()">查看详情</el-button>
                        
                    </template> -->
                    </el-table-column>
                </el-table>  
                </div> 
            </div>
</template>
<script>
import '~/assets/css/page-headline-logined.css'
import axios from 'axios'
import educationApi from '@/api/education'
export default {
    // asyncData(){
    //   return  educationApi.search(1,12,{state:'1'}).then( res => {
    //       return {items: res.data.data.rows }
    //    })
    // },

    asyncData(){
      return  educationApi.getList().then( res => {
          return {items: res.data.data.rows }
       })
    },
    
    methods: {
      loadMore(){
        this.pageNo++
        educationApi.search(this.pageNo,12,{state:'1'}).then( res => {
          this.item = this.item.concat( res.data.data.rows )
        })

      },
      handleDetils() {
        location.href="'/school/item/'+item.colleageId"
      },
      // handleTest(index, row) {
      //   console.log(index, row);
      // }后端计算
    },

   
     
    
    
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 50px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 50%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
=======

<template>
<div  > 
    <div class="data-list">  
    <el-table :data="tableData" style="width: 100%" :show-header = false>
        <el-table-column label="图片" width="180">
        <template slot-scope="scope">
            <img :src="scope.row.pic"/>
        </template>
        </el-table-column>
        <el-table-column label="综合信息" width="350">
        <template slot-scope="scope">
          <nuxt-link to= "/school">{{scope.row.name}}</nuxt-link>
            <p>QS世界大学排名{{ scope.row.number }}</p>
            <p>学费{{ scope.row.tuition }}</p>
        </template>
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button size="mini" type="danger"
            @click="handleDelete(scope.$index, scope.row)">测试录取</el-button>
        </template>
        </el-table-column>
    </el-table>  
    </div> 
</div>

</template>
<script>

export default {
 data() {
      return {
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
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
}
</script>


>>>>>>> 413a6db0d4ad0a44ad01a4aafcd6c8b222ffa71a
