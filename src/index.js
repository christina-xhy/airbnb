import { React, Suspense } from "react"; //suspense帮助异步操作的请求
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "@/App";
import "normalize.css"; //自动修改默认格式
import "antd/dist/reset.css"; //配置antd 集成组件
import "@/assets/css/index.less"; //配置less

import store from "./store"; //configure配置store后在这里导入需要配合 provider 在此处使用/
import theme from "./assets/theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //loading 处可以替换为一个组件；
  //hashRouter是显示路径，配合路由使用；
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
  // </React.StrictMode>
);
