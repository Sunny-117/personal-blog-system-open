import axios from 'axios';
import showMessage from "@/utils/showMessage";
const ins = axios.create(); //创建一个新的axios实例
ins.interceptors.response.use(function(resp) { //拦截器，凡是使用ins实例得到的相应都会先执行这个函数
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: 'error'
        });
        return null;
    }
    return resp.data.data;
})

export default ins;