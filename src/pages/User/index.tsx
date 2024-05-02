// import React from "react";
import Tabbars from "../../components/Tabbar";


const User = () => {
  return (
    <div className="user">
      <div className="container">
        <h3 className="center"> User页面</h3>
        <p>欢迎来到我的页</p>
      </div>

      <Tabbars activeValue={2} />
    </div>
  );
};

export default User;
