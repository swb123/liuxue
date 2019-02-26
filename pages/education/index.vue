
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


