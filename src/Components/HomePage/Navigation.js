import React from "react";
import { Menu } from "antd";
import menuData from "../../Data/MenuData";
import { Layout } from "antd";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/firebase";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Alert } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      setError("Çıkış yaparken bir hata oluştu!");
      console.log(error.message);
    }
  };
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
            {error && (
              <Menu.Item key="error-item">
                <Alert
                  message="Çıkış Başarısız"
                  description={error}
                  type="error"
                  showIcon
                  style={{ marginTop: "8px" }}
                />
              </Menu.Item>
            )}
          </SubMenu>
        ))}
        <Menu.Item key="logout" className="logoutButton">
          <Button type="primary" danger onClick={logOut}>
            Çıkış Yap
          </Button>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Navigation;
