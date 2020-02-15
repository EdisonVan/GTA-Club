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
