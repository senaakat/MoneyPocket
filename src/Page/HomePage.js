import { Layout } from "antd";
import React from "react";
import { Menu } from "antd";
import menuData from "../Data/MenuData";

const { Sider } = Layout;
const { SubMenu } = Menu;

function HomePage() {
  return (
    <Layout classNamestyle={{ minHeight: "100vh" }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {menuData.map((menu) => (
            <SubMenu key={menu.key} icon={menu.icon} title={menu.title}>
              {menu.items.map((item) => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </Sider>
    </Layout>
  );
}

export default HomePage;
