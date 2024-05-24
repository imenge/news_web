import React, { useEffect, useState } from "react";
import { Button } from "react-vant";
import Tabbars from "../../components/Tabbar";
import { verificationCode } from "../../request/api";
const Home = () => {
  useEffect(() => {
    getVerificationCode();
  }, []);

  const getVerificationCode = async () => {
    const res = await verificationCode();
    console.log(res);
  };

  return (
    <div className="home">
      <div className="container">
        <h3 className="center"> Home页面</h3>
        <p>欢迎来到首页</p>
      </div>
      <Button type="danger" round>
        danger
      </Button>
      <Tabbars activeValue={0} />
    </div>
  );
};

export default Home;
