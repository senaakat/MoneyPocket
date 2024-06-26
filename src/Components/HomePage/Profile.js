import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  Card,
  Button,
  Layout,
  Row,
  Col,
  Form,
  Input,
  Select,
  TreeSelect,
  DatePicker,
  InputNumber,
} from "antd";
import "./Profile.css";
import { db } from "../../Config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import treeData from "../../Data/TreeData";
import Navigation from "../HomePage/Navigation";

const { Sider, Content } = Layout;

const jobCollectionRef = collection(db, "profile");

function Profile({ onPasswordChange }) {
  const [formData, setFormData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const getList = async (ref, setfunc) => {
    try {
      const newListData = await getDocs(ref);
      const wantedData = newListData.docs.map((doc) => ({
        ...doc.data(),
        key: doc.id,
      }));
      setfunc(wantedData);
    } catch (err) {
      console.error(err);
    }
  };

  const saveNewUnavableRoom = async (data) => {
    try {
      await addDoc(jobCollectionRef, data);
      getList(jobCollectionRef, setFormData);
      console.log("Kaydedildi");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      await saveNewUnavableRoom(formData);
      console.log("Form Verileri:", formData);
      console.log("Kaydet butonuna basıldı.");
    } catch (err) {
      console.error(err);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setFormData({ ...formData, profileImage: null });
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
                    <div className="selected-image-container">
                      <img
                        src={selectedImage}
                        alt="Seçilen Resim"
                        className="uploaded-image"
                      />
                      <Button
                        type="link"
                        icon={<DeleteOutlined />}
                        onClick={removeImage}
                      >
                        Resmi Kaldır
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card className="form-spacing">
                <Form
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  initialValues={{ size: "large" }}
                  size="large"
                  style={{ maxWidth: 600 }}
                  onFinish={handleSave}
                >
                  <Form.Item label="AD" labelAlign="left">
                    <Input
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item label="SOYAD" labelAlign="left">
                    <Input
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item label="T.C." labelAlign="left">
                    <Input
                      onChange={(e) =>
                        setFormData({ ...formData, tc: e.target.value })
                      }
                    />
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
                    <Input
                      type="email"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item label="CİNSİYET" labelAlign="left">
                    <Select
                      onChange={(value) =>
                        setFormData({ ...formData, gender: value })
                      }
                    >
                      <Select.Option key="male" value="male">
                        ERKEK
                      </Select.Option>
                      <Select.Option key="female" value="female">
                        KADIN
                      </Select.Option>
                      <Select.Option key="other" value="other">
                        DİĞER
                      </Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="MESLEK" labelAlign="left">
                    <TreeSelect
                      treeData={treeData}
                      onChange={(value) =>
                        setFormData({ ...formData, profession: value })
                      }
                    />
                  </Form.Item>
                  <Form.Item label="ÜLKE" labelAlign="left">
                    <Input
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="DOĞUM TARİHİ"
                    style={{ fontSize: "8px" }}
                    labelAlign="left"
                  >
                    <DatePicker
                      onChange={(date, dateString) =>
                        setFormData({ ...formData, birthDate: dateString })
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="GELİR"
                    style={{ fontSize: "12px" }}
                    labelAlign="left"
                  >
                    <InputNumber
                      onChange={(value) =>
                        setFormData({ ...formData, income: value })
                      }
                    />
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
