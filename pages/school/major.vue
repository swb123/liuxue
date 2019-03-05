<template>
    <div >
            <div class="control-group">
                <label for="inputaccount" class="control-label" style = " margin:10px;font-size:20px">专业性质</label>
                <el-select id = "inputaccount" v-model="value8" filterable placeholder="学位类型" >
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
            <div class="data-list">  
            <el-table :data="tableData" style="width: 100%" :show-header = false>
                <el-table-column label="综合信息" width="500">
                <template slot-scope="scope">
                    <p>{{ scope.row.Ename }}  {{ scope.row.Cname}}</p>

                    <el-tag>标签一</el-tag>
                    <el-tag type="success">标签二</el-tag>
                    <el-tag type="info">标签三</el-tag>
	
                </template>
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger"
                    @click="handleDelete(scope.$index, scope.row)">测试录取</el-button>
                    <br/><br/>
                    <el-button size="mini" type="danger"
                    @click="handleDelete(scope.$index, scope.row)">加入仓库</el-button>
                </template>
                </el-table-column>
            </el-table>  
            </div> 
    </div>
</template>
<script>
import '~/assets/css/page-headline-logined.css'
import '~/assets/css/page-sj-qa-customTag.css'
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '专硕'
        }, {
          value: '选项2',
          label: '学硕'
        }],
        value8: '',
        options1: [{
          value: '选项1',
          label: '计算机'
        }, {
          value: '选项2',
          label: '软件工程'
        }],
        value9: '',
        tableData: [{
          Ename: 'Software Engineering',
          Cname: '软件工程'
          
        }, {
          Ename: 'Computer Engineering',
          Cname: '计算机工程'
        }, {
          Ename: 'Software Engineering',
          Cname: '软件工程'
        }, {
          Ename: 'Software Engineering',
          Cname: '软件工程'
        }]
      }
    }
  
}
</script>
