import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import "./styles.css";

const DispatchedForm = props => {
  const { getFieldDecorator } = props.form;
  const history = useHistory();
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  const data = {
    username: name,
    password: pwd
  };

  let token = null;
  async function pushName() {
    // eslint-disable-next-line
    const res = await axios
      .post("http://localhost:4200/login", data)
      .then(data => {
        token = data.data.token;
      })
      .then(() => {
        props.onSubmit(token);
        history.push("/dashboard");
      });
  }
  const handleSubmit = e => {
    e.preventDefault();
    pushName();
  };

  return (
    <div className="flex">
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              onChange={e => {
                setName(e.target.value);
              }}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              onChange={e => {
                setPwd(e.target.value);
              }}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="/">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: token => {
      dispatch({ type: "REQUEST", payload: { token: token } });
    }
  };
};

let WrappedForm = Form.create()(DispatchedForm);
export const InnerForm = connect(null, mapDispatchToProps)(WrappedForm);
