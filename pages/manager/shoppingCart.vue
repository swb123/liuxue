<template>
<div>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="商品"
      width="120">
      <template slot-scope="scope">{{ scope.row.good }}</template>
    </el-table-column>
     <el-table-column
      label="单价"
      width="120">
      <template slot-scope="scope">{{ scope.row.price }}</template>
    </el-table-column>

     <el-table-column
      label="数量"
      width="120">
      <template slot-scope="scope">{{ scope.row.num }}</template>
    </el-table-column>
    <el-table-column
      label="小计"
      width="120">
      <template slot-scope="scope">{{ scope.row.num* scope.row.price }}元</template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div>
  <el-row>
      <el-col :span="6" :offset="14">
          <el-button @click="toggleSelection()">总计</el-button>
      </el-col>
  </el-row>
  </div>

</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          good: '鞋子',
          price: 90,
          num:1,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          good: '衣服',
          price: 99,
          num:3,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          good: '口红',
          price: 999,
          num:5,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          good: '衣架',
          price: 921,
          num:78,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          good: '棉被',
          price: 932,
          num:132,
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          good: '饮料',
          price: 954,
          num:13,
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          good: '篮球',
          price: 989,
          num:11,
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
