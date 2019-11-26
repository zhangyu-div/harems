import http from "@utils/request";

export const bijiaddApi = (title,content) => http({
    method: "POST",
    url: "/article/addArticle",
    data:{
        title,
        content
    },
})


export const bijititleApi = (page,limit) => http({
    method: "GET",
    url: "/article/articlesList",
    data:{
        page: page,
        limit: limit 
    },
})
