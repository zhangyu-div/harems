<template>
  <el-aside width="200px" class="asides">
        <ul class="asideul">
            <router-link
                tag="li"
                v-for="(item,index) in componentlist"
                :key="index"
                :to="item.path"
            >{{item.content}}</router-link>
        </ul>
  </el-aside>
</template>
<script>
export default {
  name:"Home",
    data() {
      return {
          componentlist:[
            {
              content:"首页",
              path:"/home/shouye"
            },
            {
              content:"添加妃子",
              path:"/home/addwoman"
            },
            {
              content:"妃子列表",
              path:"/home/womanlist"
            },
            {
              content:"添加心得",
              path:"/home/pushbiji"
            },
            {
              content:"心得列表",
              path:"/home/bijilist"
            },
            {
              content:"皇帝中心",
              path:"/home/usercenter"
            },
          ]
      }
    },
};
</script>
<style lang="scss">
.asides{
  height: 100%;
  .asideul{
    width: 100%;
    background: #f9f9f9;
    height: 100%;
      li{
        text-align: center;
        border-bottom: 1px solid #e5e5e5;
        height: 50px;
        line-height: 50px;
      }
      .router-link-active{
        background: #fff;
      }
}
}

</style>