import originAxios from "axios";
import NProgress from "nprogress";
import { notification,message } from "antd";
import "nprogress/nprogress.css";

/**
 * 一、功能：
 * 1. 统一拦截http错误请求码；
 * 2. 统一拦截业务错误代码；
 * 3. 统一设置请求前缀；
 * 4. 配置异步请求过渡状态：显示蓝色加载条表示正在请求中，避免给用户页面假死的不好体验。
 * 5. 增加一个自定义实例，指定为请求超出时间为20s
 */

//  You can specify config defaults that will be applied to every request.
/* axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 20000; // 自定义实例，指定为请求超出时间为20s

// 状态码错误信息
const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
}; */

const axios = originAxios.create({ // 5
  timeout: 20000
});

axios.interceptors.response.use(
  function(response) {
    if (response.data && response.data.flag === 1) {
      let errorMsg = response.data.msg;
      message.error(errorMsg);
      return Promise.reject(errorMsg);
    }
    return response.data; // 请求失败
  },
  function(error) {
    return Promise.reject(error);
  }
);
// 封装get
export function get(url: string, data: any) {
    return axios.get(url, {
        params: data
    });
};

// 自定义封装post，将其发送数据改造为表单格式，后端就不用做json解析了
export function post(url: string, data: any) {
    return axios({
        method: 'post',
        url,
        data
    });
};

export default axios;