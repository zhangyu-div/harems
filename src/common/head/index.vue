<template>
    <el-header>
        <el-row>
            <el-col :span="2">
                <div class="grid-content bg-purple">
                    <el-button type="text" plain>后宫管理系统</el-button>
                </div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content bg-purple-light">
                    <el-button type="text" plain >首页</el-button>
                </div>
            </el-col>
            <el-col :span="19">
                <div class="grid-content bg-purple">
                    <el-button type="text" plain>妃子</el-button>
                </div>
            </el-col>
            <el-col :span="2">
            <div class="grid-content bg-purple">
                <el-select placeholder="zhangYu" value="">
                    <el-option value="">皇帝中心</el-option>
                    <el-option value="">退出登录</el-option>
                </el-select>
            </div>
            </el-col>
        </el-row>
    </el-header>
</template>
<style lang="scss">
    .el-header{
    background-color: #101010;
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
    width: 100%;
    .el-button{
        font-size: 18px;
        border: none;
        font-family: SimSun, 宋体, "Arial Narrow", HELVETICA;
        background: #101010;
        span{
          color: #e9eef3;
        }
    }
    .bg-purple {
        text-align: left;
    }
}
</style>