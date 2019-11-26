<template>
    <div>
  <el-table
    :data="tableData.filter(data => !search || data.booksName.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"  height="630">
    <el-table-column
      label="ID"
      prop="_id">
    </el-table-column>

    <el-table-column
      label="妃子他爹"
      prop="booksAuth">
    </el-table-column>

    <el-table-column
      label="妃子名称"
      prop="booksName">
    </el-table-column>

    <el-table-column
      label="妃子状态"
      prop="booksStatus">

    </el-table-column>

    <el-table-column
      label="妃子容貌"
      prop="booksLogo">

    <template slot-scope="scope">
      <img  :src="scope.row.booksLogo" alt="" style="width: 80px;height: 80px">
    </template>

    </el-table-column>

    <el-table-column
      label="妃子年龄"
      prop="booksPrice">
    </el-table-column>


    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>

      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>

    </el-table-column>
  </el-table>

  <el-dialog
    title="妃子信息修改"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
        <el-form label-position="right" label-width="80px" class="addwomanform dialog">
            <el-form-item label="妃子名称">
                <el-input placeholder="请输入妃子名称" v-model="form.booksName" ></el-input>
            </el-form-item>
            <el-form-item label="妃子他爹">
                <el-input  placeholder="请输入他爹的名称" v-model="form.booksAuth"></el-input>
            </el-form-item>

            <el-form-item label="妃子状态">
                <el-select v-model="form.booksStatus" placeholder="请选择状态" class="select">
                    <el-option label="打入冷宫" value="打入冷宫"></el-option>
                    <el-option label="正值青春" value="正值青春"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="妃子年龄">
                <el-input-number class="age" v-model="form.booksPrice" controls-position="right" :min="28" :max="50"></el-input-number>
            </el-form-item>
            <el-form-item label="妃子照片">
                <el-upload
                    class="avatar-uploader kuang"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="form.booksLogo" :src="form.booksLogo" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>

        </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="centerDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="changesubmit()">确 定</el-button>
    </span>
  </el-dialog>


    </div>
</template>

<script>
import {feilistziApi,delfeiziApi,changefeiziApi} from "@api/feizi";
  export default {
    data() {
      return {
            tableData:[],
            search: '',
            centerDialogVisible: false,
            form:{
                _id:'',
                booksName:'',
                booksAuth:'',
                booksStatus:'',
                booksPrice:'',
                booksLogo:''
            },
      }
    },
    methods:{
      handleEdit(index, row){
          this.centerDialogVisible=true;
          this.form=row;
          console.log(this.form)
      },
      async changesubmit(){

        // booksAuth, booksName, booksStatus, booksPrice, booksLogo, id
          this.centerDialogVisible = false;
          let {booksAuth, booksName, booksStatus, booksPrice, booksLogo, _id}=this.form;
        let data=await changefeiziApi( booksAuth, booksName, booksStatus, booksPrice, booksLogo, _id);
          if (data.data.status == 1) {
            alert(data.data.info);
            this.handlerender();
        } else {
            alert(data.data.info)
        }
      },

      async handlerender(){
        let data=await feilistziApi(1,20);
        this.tableData=data.data.list;
      },
      async handleDelete(index, row){
        console.log(row)
          let data=await delfeiziApi(row._id);
          alert(data.data.info)
          this.handlerender();
      },
      handleAvatarSuccess(res, file){
          this.form.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file){
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isJPG){
          this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M){
          this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
      },
    },
    created(){
        this.handlerender();
    }
  }
</script>
<style lang="scss" >
  .dialog .el-form-item{
      width: 300px;
  }
  .kuang{
      img{
        width: 300px;
    }
    }
   
</style>