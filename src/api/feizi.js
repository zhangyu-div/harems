import http from "@utils/request";
export const addfeiziApi=(booksAuth, booksName, booksStatus, booksPrice, booksLogo  )=> http({
    method: "post",
    url: "/books/addbooks",
    data: {
        booksAuth,
        booksName,
        booksStatus,
        booksPrice,
        booksLogo 
    }
})

export const feilistziApi=(page,limit )=> http({
    method: "get",
    url: "/books/booksList",
    data: {
        page: page,
        limit: limit
    },
})

export const delfeiziApi=(id)=> http({
    method: "get",
    url: "/books/delete",
    data: {
        id:id
    },
})
export const changefeiziApi=(booksAuth, booksName, booksStatus, booksPrice, booksLogo, id)=> http({
    method: "post",
    url: "/books/modify",
    data: {
        booksAuth, booksName, booksStatus, booksPrice, booksLogo, id
    },
})