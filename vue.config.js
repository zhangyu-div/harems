const path=require("path");
module.exports={
    devServer: {
        proxy:{
            "/users":{
                target:"http://localhost:3000",
                // changeOrigin:true
            },
            "/books":{
                target:"http://localhost:3000",
                // changeOrigin:true
            },
            "/article":{
                target:"http://localhost:3000",
                // changeOrigin:true
            },
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@api":path.join(__dirname,"./src/api"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
            }
        }
    }
}