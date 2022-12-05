import React from "react";
import { Navigate } from "react-router-dom";
const Home = React.lazy(() => import("@/views/home"));
const Entire = React.lazy(() => import("@/views/entire"));
const Detail = React.lazy(() => import("@/views/detail"));
//路由配置，注意懒加载节约内存
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />, //设置默认的页面
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
];

export default routes;
