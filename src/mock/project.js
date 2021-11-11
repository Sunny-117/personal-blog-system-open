import Mock from "mockjs";

Mock.mock('/api/project', 'get', {
    code: 0,
    msg: "",
    "data|10-20": [{
        "id|+1": 1,
        name: "个人博客@id",
        url: "@url('http','qq.com')",
        github: "@url('http','qq.com')",
        "description|1-4": ["@cparagraph(1,5)"],
        thumb: "@image(300x250,@color,#fff,@natural)"
    }]
})