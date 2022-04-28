import { Card, Form, Input, Button, Typography, Space } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FormLayout from "./FormLayout";

const Login = ({ form, onSubmit, isLoading }) => (
  <FormLayout>
    <LoginCard>
      <Typography.Title>Login de usuário!</Typography.Title>
      <Form layout="vertical" form={form} onFinish={onSubmit} size="large">
        <Form.Item label="E-mail" name="email" rules={[{ type: "email" }]}>
          <Input
            onChange={(e) => form.setFieldsValue({ email: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="Senha" name="password">
          <Input.Password
            onChange={(e) => form.setFieldsValue({ password: e.target.value })}
          />
        </Form.Item>
        <Space style={{ margin: "12px 0 20px" }}>
          <Typography.Text>
            Ainda não tem uma conta?{" "}
            <Link to="/register">Cadastre-se aqui</Link>
          </Typography.Text>
        </Space>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            loading={isLoading}
          >
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </LoginCard>
  </FormLayout>
);

const LoginCard = styled(Card)`
  box-shadow: 0 1px 4px rgb(0 0 0 / 5%), 0 4px 16px rgb(0 0 0 / 6%);
  border-radius: 8px;
  border: none;
  width: 33%;
  max-width: 548px;
  min-width: 460px;
  margin: 24px;

  .ant-card-body {
    padding: 36px;
  }

  .ant-radio-group {
    width: 100%;

    .ant-radio-button-wrapper {
      width: 50%;

      &:first-child {
        border-radius: 8px 0 0 8px;
      }

      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }

  form,
  button.ant-btn {
    margin-top: 16px;
  }

  input,
  button.ant-btn {
    border-radius: 8px;
  }

  .ant-form-item {
    margin-bottom: 12px;

    .ant-form-item-label > label {
      height: auto;
    }

    span.ant-input-password {
      border-radius: 8px;
    }
  }

  .ant-form-item-control-input {
    height: auto;
  }

  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional):before {
    display: none;
  }

  .ant-form-item-explain {
    display: none;
  }

  h2 {
    font-size: 24px;
    font-weight: 400;
    color: #717171;
    margin-bottom: 32px;
  }

  @media (max-width: 726px) {
    width: 100%;
    min-width: 300px;
  }
`;

export default Login;
