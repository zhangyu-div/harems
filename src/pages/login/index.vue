<template>
  <div class="pages">
    <el-form>
      <div class="logo">
          <img src="http://www.uugai.com/logoa/logo_img_sc.php" alt />
      </div>
      <el-form-item label="皇帝名" class="acount">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="密码" class="pwd">
        <el-input v-model="password"></el-input>
      </el-form-item>
       <router-link 
        tag="el-button"
        to="/register"
        class="toggle"
        type="info">没有账号,立即注册</router-link>
       <br>
        <el-button type="primary" @click="handleLogin()">立即登录</el-button>
    </el-form>
  </div>
</template>>
<script>
import {loginApi} from "@api/user"
export default {
  name: "Login",
  data(){
    return{
        name: "",
        password: ""
    };
  },
  methods:{
      async handleLogin(){
          let data=await loginApi(this.name,this.password);
          console.log(data)
        if(data.data.status == 1){
            alert(data.data.info);
            this.$router.push("./home")
        }else{
            alert(data.data.info);
        }
      }
  }
};
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