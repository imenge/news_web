// 使用路由懒加载
import { lazy } from "react";
// 引入组件
const Home = lazy(() => import("../pages/Home"));
const News = lazy(() => import("../pages/News"));
const User = lazy(() => import("../pages/User"));

const routes = [
  {
    path: "/",
    component: Home,
    name: "首页",
  },
  {
    path: "/news",
    component: News,
    name: "新闻",
  },
  {
    path: "/user",
    component: User,
    name: "我的",
  },
];

export default routes;
