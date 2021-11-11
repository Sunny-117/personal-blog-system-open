import Mock from "mockjs";
import avatar from "@/assets/avatar.png";
import weixinQrCode from "@/assets/weixinQrCode.jpg";
import qqQrCode from "@/assets/qqQrCode.png";

Mock.mock('/api/setting', 'get', {
    code: 0,
    msg: "",
    data: {
        avatar,
        siteTitle: "Sunny",
        github: "https://github.com/Sunny-117",
        qq: "2846282482",
        qqQrCode,
        weixin: "sunny",
        weixinQrCode,
        mail: "zhiqiangfu6@gmail.com",
        githubName: "Sunny-117",
        // favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})