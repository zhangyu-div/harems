<template>
    <div class="pages">
        <el-form label-position="right" label-width="80px" class="addwomanform">
            <el-form-item label="妃子名称">
                <el-input placeholder="请输入妃子名称" v-model="form.name" ></el-input>
            </el-form-item>
            <el-form-item label="妃子他爹">
                <el-input  placeholder="请输入他爹的名称" v-model="form.dadname"></el-input>
            </el-form-item>

            <el-form-item label="妃子状态">
                <el-select v-model="form.status" placeholder="请选择状态" class="select">
                    <el-option label="打入冷宫" value="打入冷宫"></el-option>
                    <el-option label="正值青春" value="正值青春"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="妃子年龄">
                <el-input-number class="age" v-model="form.age" controls-position="right" :min="28" :max="50"></el-input-number>
            </el-form-item>
            <el-form-item label="妃子照片">
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="add" @click="handleSubmit()">提交妃子数据</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {addfeiziApi} from "@api/feizi";
export default{
    data(){
        return{
            form:{
                name:'',
                dadname:'',
                status:'',
                age:'',
                imageUrl:''
            },
        }
    },
    methods:{
        handleAvatarSuccess(res, file){
            this.form.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file){
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M){
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        async handleSubmit(){
            let {name,dadname,status,age,imageUrl}=this.form;
            let data=await addfeiziApi(name,dadname,status,age,imageUrl);
            alert(data.data.info);
             this.$router.push("./womanlist")
        },
        }
    }

</script>
<style lang="scss" >
.addwomanform{
    width: 500px;
    margin: 30px auto;
    .select{
        width: 420px;
    }
    .age{
        width: 430px;
    }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 430px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar{
    width: 178px;
    height: 178px;
    display: block;
  }
  .add{
      width: 100%;
      height: 100%;
  }
}
</style>