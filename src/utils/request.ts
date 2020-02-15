import originAxios from "axios";
import { message } from "antd";

const axios = originAxios.create({
  // 创建一个自定义实例，指定为请求超出时间为20s
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