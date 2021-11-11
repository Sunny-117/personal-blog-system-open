import Mock from "mockjs";

Mock.mock("/api/about", "get", function() {
    return {
        code: 0,
        msg: "",
        data: "https://baidu.com",
    }
});