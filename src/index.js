import { React, Suspense } from "react"; //suspense帮助异步操作的请求
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "@/App";
import "normalize.css"; //自动修改默认格式
import "@/assets/css/index.less"; //配置less
import store from "./store"; //configure配置store后在这里导入需要配合 provider 在此处使用/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //loading 处可以替换为一个组件；
  //hashRouter是显示路径，配合路由使用；
  <Suspense fallback="loading">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
