import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config.js";

class TNRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    //也是对请求做拦截，把data和err通通返回出去
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  } //constructor 里面设置instance实例的特性

  request(config) {
    return this.instance.request(config);
  } //请求做拦截

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new TNRequest(BASE_URL, TIMEOUT);
