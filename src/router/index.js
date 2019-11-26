import Vue from "vue";
import VueRouter from "vue-router";
import  Home from "./home";
Vue.use(VueRouter);
const router =new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/register",
        },
        {
            path:"/register/",
            component:_=>import("@pages/register"),
            name:"register",
        },
        {
            path:"/login",
            component:_=>import("@pages/login"),
            name:"login",
        },
        Home
    ]
})
// router.beforeEach((to,from,next)=>{
//     if(to.path!="./login"&&!to.meta.requirenoAuth){
//         if(localStorage.getItem("token")){
//             next();
//         }else{
//             next({name:"login",params:{to:to.path}});
//         }
//     }else{  
//         next();
//     } 
// })
export default router;