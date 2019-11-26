<template>
  <div class="pages">
    <el-form ref="form">
      <div class="logo">
        <img src="http://www.uugai.com/logoa/logo_img_sc.php" alt />
      </div>
      <el-form-item label="皇帝名" class="acount">
        <el-input v-model="username" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码" class="pwd">
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
       <router-link 
        to="/login"
        tag="el-button"
        class="toggle"
        type="info">已有账号,立即登录</router-link>
       <br>
        <el-button type="primary" @click="regist()">立即注册</el-button>

    </el-form>
  </div>
</template>>
<script>
import {registApi} from "@api/user" 
export default{
  name: "Register",
  data(){
    return{
        username:"",
        password:""
    }
  },
  methods:{
    async regist(){
        let data=await registApi(this.username,this.password);
        console.log(data)
        if(data.data.status == 1){
            alert(data.data.info);
            this.$router.push("./login")
        }else{
            alert(data.data.info);
        }
    }
  }
}
</script>
<style lang="scss" scoped>
.pages {
  width: 100%;
  height: 100%;
  background: url(https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0A/0B/ChMkJ13OQqyIAY7pAAKwzGPwTsgAAvQHwHhmIsAArDk826.jpg)
    no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;

  .el-form {
    width: 364px;
    height: 400px;
    background: #fff;
    border-radius: 10px;
    padding: 0 15px;
    .logo {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .toggle{
        background: gray;
        color: #fdfdfd;
    }
    .acount{
      margin-bottom: 0;
    }
    .el-button{
      margin-bottom: 15px;
    }
    .el-button{
      width: 100%;
    } 
  }
}
</style>