import { Card, Form, Input, Button, Typography, Radio, Switch } from "antd";
import styled from "styled-components";

const Register = ({ userType, setUserType, form, onSubmit, isLoading }) => (
  <Wrapper>
    <Logo>
      Pizza<b>.</b>
    </Logo>
    <RegisterCard>
      <Typography.Title>Cadastre o usuário aqui!</Typography.Title>
      <Typography.Title level={2}>
        Qual tipo de usuário deseja cadastrar?
      </Typography.Title>
      <Radio.Group
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        buttonStyle="solid"
        size="large"
      >
        <Radio.Button value="customer">Cliente</Radio.Button>
        <Radio.Button value="employee">Funcionário</Radio.Button>
      </Radio.Group>
      <Form layout="vertical" form={form} onFinish={onSubmit} size="large">
        <Form.Item label="Nome" name="name">
          <Input
            onChange={(e) => form.setFieldsValue({ name: e.target.value })}
          />
        </Form.Item>

        <Form.Item label="E-mail" name="email" rules={[{ type: "email" }]}>
          <Input
            onChange={(e) => form.setFieldsValue({ email: e.target.value })}
          />
        </Form.Item>

        {userType === "employee" && (
          <>
            <Form.Item label="Senha" name="password">
              <Input.Password
                onChange={(e) =>
                  form.setFieldsValue({ password: e.target.value })
                }
              />
            </Form.Item>

            <Form.Item label="Administrador">
              <Switch
                onChange={(isChecked) =>
                  form.setFieldsValue({ admin: isChecked })
                }
              />
            </Form.Item>
          </>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </RegisterCard>
  </Wrapper>
);

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  padding: 64px 0 32px;

  &:before {
    content: "";
    position: absolute;
    background: #ea1d2c;
    border-radius: 100%;
    top: -32vh;
    left: -18vh;
    width: 90vh;
    height: 90vh;
  }

  @media (max-height: 744px) {
    height: auto;
  }
`;

const RegisterCard = styled(Card)`
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

const Logo = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;

  b {
    color: #a3d1ae;
  }
`;

export default Register;
