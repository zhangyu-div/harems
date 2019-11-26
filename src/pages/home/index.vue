<template>
    <el-container>
        <el-header>
                <Head></Head>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <Aside></Aside>
            </el-aside>
            <el-main>
                    <router-view>     
                    </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import  Head from "@common/head";
import  Aside from "@common/aside";
export default {
    components:{
        Head,
        Aside
    }
}
</script>
<style lang="scss">
    .el-container{
        width: 100%;
        height: 100%;
    }
    .el-main{
        padding: 10px;
        width: 100%;
        height: 100%;
    }
</style>