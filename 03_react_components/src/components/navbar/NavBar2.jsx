// src/NavBar2.jsx
import React from "react";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const NavBar2 = ({ topSlot, leftSlot, centerSlot, rightSlot, footSlot }) => {
  return (
    <div className="all">
      {/* 使用 Antd Menu 组件构建导航栏 */}
      <div className="menu">
        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            关于我们
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            设置
          </Menu.Item>
        </Menu>
      </div>
      <div className="top">{topSlot}</div>

      <div className="nav-bar">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>

      <div className="foot">{footSlot}</div>
    </div>
  );
};

export default NavBar2;
