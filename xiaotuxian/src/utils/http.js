import axios from "axios";

const instance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000
});

// 请求拦截器
instance.interceptors.request.use(
  config => config,
  err => Promise.reject(err)
);

// 响应拦截器
instance.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err)
);

export default instance;
