import { Form, notification } from "antd";

import api from "../services/api";
import { Login as LoginComponent } from "../components";

const Login = () => {
  const [form] = Form.useForm();

  const url = "login";

  const onSubmit = async () => {
    try {
      await api.post(url, form.getFieldsValue());

      notification.success({
        message: "Login realizado com sucesso!",
        description:
          "",
      });
    } catch {
      notification.error({
        message: "Erro ao realizar o login!",
        description: "Tente novamente...",
      });
    }
  };

  return (
    <LoginComponent
      {...{
        form,
        onSubmit,
        isLoading: false,
      }}
    />
  );
};

export default Login;
