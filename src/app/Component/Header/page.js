"use client";
// import "./globals.css";
import Image from "next/image";
// import { Inter } from "next/font/google";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import {
  Layout,
  Menu,
  Row,
  Col,
  Button,
  Modal,
  Select,
  Input,
  Avatar,
  Dropdown,
  Form,
} from "antd";
import HeaderLogo from "../../assests/images/eshifa-logo.png";
// import shifaLogo from "./assests/images/logo-inner2.png";

const { Header, Content } = Layout;
const { Option } = Select;

const HeaderComponent = ({ pageProps }) => {
  const { Option } = Select;
  const userMenu = (
    <Menu>
      <Menu.Item key="1" className="syle">
        Talha
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="2"> Change Password </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="3">
        <Link href="/">Discharged Patients Record </Link>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item key="4">Logout</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Header className="header">
        <Row>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            // style={{ display: "flex" }}
          >
            <div>
              <>
                <Link href="/">
                  <Image src={HeaderLogo} alt="logo" width={50} height={50} />
                </Link>
              </>
            </div>
          </Col>

          <Col
            xs={18}
            sm={18}
            md={18}
            lg={18}
            xl={18}
            xxl={18}
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Form
              layout="inline"
              name="loginForm"
              initialValues={{ remember: true }}
            >
              <Form.Item
                colon={false}
                className="select-form"
                label={<p className="label-text">Locations</p>}
              >
                <Select
                  className="select-width"
                  placeholder="Select Location"
                  onChange={(e) => props.handleLocationChange(e)}
                  rules={[{ message: "Please select your location!" }]}
                >
                  <Option value="3">sdfsdf</Option>
                </Select>
              </Form.Item>
              <h2 style={{ color: "whitesmoke" }}> Talha Mobeen </h2>
            </Form>

            <Dropdown
              overlay={userMenu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Avatar
                className="user-image"
                src={HeaderLogo}
                size={50}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px" }}></Content>
    </>
  );
};

export default HeaderComponent;
