import Mock from "mockjs";


function getLimit(options) {
    const str = options.url.slice(options.url.indexOf('?') + 1);
    const arr1 = str.split('&');
    const arr2 = arr1.map(item => item.split('='));
    const obj = {};
    for (let i = 0; i < arr2.length; i++) {
        obj[arr2[i][0]] = arr2[i][1];
    }
    return obj
}
Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function(options) {
    const obj = getLimit(options);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            total: 52,
            [`rows|${obj.limit || 10}`]: [{
                id: "@guid",
                nickname: "@cname",
                content: "@cparagraph(1, 10)",
                createDate: Date.now(),
                "avatar|1": [
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
                    "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
                ],
            }, ],
        },
    })
})

Mock.mock('/api/message', 'post', {
    code: 0,
    msg: "",
    data: {
        "id|+1": 1,
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createDate: Date.now(),
        "avatar|1": [
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
        ],
    },
})