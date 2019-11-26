import http from "@utils/request";


export const registApi = (username,password) => http({
    method: "POST",
    url: "/users/register",
    data:{
        username,
        password
    },
})

export const userinfoApi = (page,limit) => http({
    method: "get",
    url: "/users/usersList",
    data: {
        page: page,
        limit: limit
    },
})

