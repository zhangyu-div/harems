<template>
    <div>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%"
    @click="handletoggle()"
    >
    <el-table-column
      prop="_id"
      label="文章ID">
    </el-table-column>
    <el-table-column
      prop="title"
      label="文章标题">
    </el-table-column>
  </el-table>      
    </div>
</template>
<script>
import {bijititleApi} from "@api/biji"
export default {
    data() {
      return {
        tableData: [
            {
            _id:'',
            title: ''
            },
        ]
      }
    },
    method:{
        
    },
    async created(){
        let data=await bijititleApi(1,10);
        this.tableData=data.data.list;
    }
}
</script>
<style lang="scss">

</style>