import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../index.css";
import Fans from "./profile/Fans";
import Follow from "./profile/Follow";

const Profile = () => {
  return (
    <div style={{ display: "flex" }}>
      {" "}
      {/* 父容器使用 Flexbox 布局 */}
      {/* nav 容器 */}
      <nav
        style={{
          width: "100px", // 设置宽度
          backgroundColor: "#fff", // 背景色
          borderRight: "2px solidrgb(94, 232, 239)", // 右边框
          padding: "20px 10px", // 内边距
          display: "flex",

          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
          marginTop: "10px",
        }}
      >
        <NavLink to="fans" activeClassName="active" className="nav-link">
          Fans
        </NavLink>
        <NavLink
          to="follow"
          activeClassName="active"
          className="nav-link"
          style={{}}
        >
          Follow
        </NavLink>
      </nav>
      {/* 内容区域 */}
      <div style={{ flex: 1, padding: "20px" }}>
        {" "}
        {/* 内容区域占满剩余空间 */}
        <Outlet /> {/* 子路由的内容会渲染在这里 */}
      </div>
    </div>
  );
};

export default Profile;
