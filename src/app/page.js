"use client";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { Button, Form, Input, Avatar } from "antd";
import { UserOutlined, LoginOutlined, LockOutlined } from "@ant-design/icons";
export default function Home() {
  const router = useRouter();
  const neviaget = (name) => {
    router.push(name);
  };

  const onFinish = async (values) => {
    console.log("values", values);
    localStorage.setItem("token", true);
  };
  
  return (
    <div>
      <Form
        className="login-form-container"
        // {...layout}
        onFinish={onFinish}
        name="loginForm"
        initialValues={{ remember: true }}
        //onFinishFailed={onFinishFailed}
      >
        {/* {!locationCheck && ( */}
        <Form.Item
          label="Username"
          name="email"
          rules={[{ message: "Please input your username!" }]}
          className="login-form-container-data"
        >
          <Input
            className="login-input"
            placeholder="Enter User Name"
            suffix={
              <Avatar className="login-input-icon" icon={<UserOutlined />} />
            }
            required={true}
          />
        </Form.Item>
        {/* )} */}
        {/* {!locationCheck && ( */}
        <Form.Item
          label="Password"
          name="password"
          rules={[{ message: "Please input your password!" }]}
          className="login-form-container-data"
        >
          <Input
            type="password"
            className="login-input"
            placeholder="Enter Password"
            suffix={
              <Avatar className="login-input-icon" icon={<LockOutlined />} />
            }
            required={true}
          />
        </Form.Item>

        <Form.Item>
          <Button className="login-submit-btn" type="primary" htmlType="submit">
            LOGIN {<LoginOutlined className="login-submit-button" />}
          </Button>
        </Form.Item>
      </Form>
      <h1>Home Page</h1>
      <Link href="/login">Go to Login page</Link>
      <br />
      <Link href="/about">Go to about page</Link>
      <br />
      <br />
      <Link href="/StudentList">StudentList pagee</Link>
      <Button type="primary" onClick={() => router.push("/login")}>
        Goto Login Page
      </Button>
      <br />
      <br />
      <button onClick={() => router.push("/about")}> Goto About Page</button>
      <button onClick={() => neviaget("/about")}>
        Goto About Page using function
      </button>
    </div>
  );
}
