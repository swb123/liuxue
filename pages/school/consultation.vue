<template>
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
    <div class="data-list">  
    <el-table :data="tableData" style="width: 100%" :show-header = false>
        <el-table-column label="图片" width="180">
        <template slot-scope="scope">
            <img :src="scope.row.pic"/>
        </template>
        </el-table-column>
        <el-table-column label="综合信息" width="350">
        <template slot-scope="scope">
            <p>{{ scope.row.name }}</p>
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