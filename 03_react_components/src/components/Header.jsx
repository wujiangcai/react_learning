import { Button } from "antd";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
const Header = () => {
  return (
    <>
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
    </>
  );
};
export default Header;
