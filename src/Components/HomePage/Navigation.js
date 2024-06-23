import React from "react";
import { Menu } from "antd";
import menuData from "../../Data/MenuData";
import { Layout } from "antd";
import "./Navigation.css";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  return (
    <Sider className="homeSite">
      <Menu
        className="menu"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        {menuData.map((menu) => (
          <SubMenu
            className="submenu"
            key={menu.key}
            icon={menu.icon}
            title={menu.title}
          >
            {menu.items.map((item) => (
              <Menu.Item key={item.key}>
                <Link to={item.link}>{item.label}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  );
}

export default Navigation;
