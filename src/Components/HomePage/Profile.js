import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";
import treeData from "../../Data/TreeData";
import Navigation from "../HomePage/Navigation";
import { Layout, Row, Col } from "antd";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  TreeSelect,
} from "antd";
import "./Profile.css";

const { Sider, Content } = Layout;

function Profile({ onPasswordChange }) {
  // const [job] = useState(treeData);

  // const jobCollectionRef = collection(db, "meslekler");

  // useEffect(() => {
  //   const getJob = async () => {
  //     try {
  //       const data = await getDocs(jobCollectionRef);
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getJob();
  // }, []);

  // const fetchTreeData = async () => {
  //   const jobCollectionRef = collection(db, "meslekler");
  //   const snapshot = await getDocs(jobCollectionRef);
  //   const treeData1 = snapshot.docs.map((doc) => ({
  //     title: doc.data().title,
  //     value: doc.data().value,
  //     children: doc.data().children,
  //   }));
  //   return treeData;
  // };

  // const [treeData, setTreeData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchTreeData();
  //     setTreeData(data);
  //   };
  //   fetchData();
  // }, []);

  const [formData, setFormData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePasswordChange = (values) => {
    onPasswordChange(values.password);
  };

  const handleSave = () => {
    console.log("Kaydedilen veriler:", formData);
  };

  return (
    <div className="profile-container">
      <Layout>
        <Sider className="homeSite">
          <Navigation />
        </Sider>
        <Content className="profile-content">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card className="profile-card">
                <h1>Profil Resmi</h1>
                <div className="upload-container">
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setSelectedImage(URL.createObjectURL(file));
                        setFormData({ ...formData, profileImage: file });
                      }
                    }}
                  />
                  <label htmlFor="file" className="upload">
                    <PlusOutlined />
                    <div>Resim Seç</div>
                  </label>
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt="Seçilen Resim"
                      className="uploaded-image"
                    />
                  )}
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="form-spacing">
                <Form
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                  layout="horizontal"
                  initialValues={{
                    size: "large",
                  }}
                  size="large"
                  style={{
                    maxWidth: 600,
                  }}
                  onFinish={(values) => {
                    setFormData(values);
                    handleSave();
                  }}
                >
                  <Form.Item label="AD" labelAlign="left">
                    <Input />
                  </Form.Item>
                  <Form.Item label="SOYAD" labelAlign="left">
                    <Input />
                  </Form.Item>
                  <Form.Item label="T.C." labelAlign="left">
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="E-MAİL"
                    labelAlign="left"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "Lütfen geçerli bir e-posta adresi girin!",
                      },
                    ]}
                  >
                    <Input type="email" />
                  </Form.Item>
                  <Form.Item label="CİNSİYET" labelAlign="left">
                    <Select>
                      <Select.Option value="male">KADIN</Select.Option>
                      <Select.Option value="female">ERKEK</Select.Option>
                      <Select.Option value="other">OTHER</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="MESLEK" labelAlign="left">
                    <TreeSelect treeData={treeData} />
                  </Form.Item>
                  <Form.Item label="ÜLKE" labelAlign="left">
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="DOĞUM "
                    style={{ fontSize: "8px" }}
                    labelAlign="left"
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    label="GELİR"
                    style={{ fontSize: "12px" }}
                    labelAlign="left"
                  >
                    <InputNumber />
                  </Form.Item>
                </Form>
                <Form onFinish={handlePasswordChange}>
                  <h4 style={{ marginBottom: 10 }}>Şifre Değiştir: </h4>
                  <Form.Item
                    label="Mevcut Parola"
                    name="currentPassword"
                    rules={[
                      { required: true, message: "Mevcut parolanızı girin" },
                    ]}
                    style={{ display: "flex", alignItems: "center" }}
                    labelAlign="left"
                  >
                    <Input.Password style={{ marginLeft: 10 }} />
                  </Form.Item>
                  <Form.Item
                    label="Yeni Parola"
                    name="newPassword"
                    rules={[
                      { required: true, message: "Yeni parolanızı girin" },
                    ]}
                    style={{ display: "flex", alignItems: "center" }}
                    labelAlign="left"
                  >
                    <Input.Password style={{ marginLeft: 10 }} />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Parolayı Değiştir
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Kaydet
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default Profile;
