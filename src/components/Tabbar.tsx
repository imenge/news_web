import React from "react";
import { Tabbar } from "react-vant";
import { HomeO, NewspaperO, UserCircleO } from "@react-vant/icons";
import { useNavigate } from "react-router-dom";

interface tabbarProps {
  activeValue: number;
}

const Tabbars: React.FC<tabbarProps> = ({ activeValue }) => {
  const navigate = useNavigate();

  //路由跳转
  const toPath = (val: string | number) => {
    switch (val) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/news");
        break;
      case 2:
        navigate("/user");
        break;
      default:
        break;
    }
  };
  return (
    <div className="tabbar">
      <Tabbar fixed activeColor="#f44336" value={activeValue} onChange={toPath}>
        <Tabbar.Item icon={<HomeO />}>首页</Tabbar.Item>
        <Tabbar.Item icon={<NewspaperO />}>新闻</Tabbar.Item>
        <Tabbar.Item icon={<UserCircleO />}>我的</Tabbar.Item>
      </Tabbar>
    </div>
  );
};

export default Tabbars;
