<template>
    <div>
        <el-table
            :data="lists.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"  height="630">
            <el-table-column
            label="用户昵称"
            prop="name">
            </el-table-column>
            <el-table-column
            label="用户头像"
            prop="usersLogo">

            <template slot-scope="scope">
            <img  :src="scope.row.usersLogo" alt="" style="width: 80px;height: 80px">
            </template>
            </el-table-column>


            <el-table-column
            label="用户账号"
            prop="username">
            </el-table-column>

            <el-table-column
            label="注册时间"
            prop="registerTime">
            </el-table-column>





            <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
                <el-input
                v-model="search"
                size="mini"
                placeholder="搜索用户名"/>
            </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import {userinfoApi} from "@api/user.js";
export default {
    data(){
        return{
            lists:[],
            search:''
        }
    },
    async created(){
        let data= await userinfoApi( 1,10);
        console.log(data)
        this.lists=data.data.list;
    }
}
</script>>
<style lang="scss">

</style>