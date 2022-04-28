import { Form, notification } from "antd";

import api from "../services/api";
import { Login as LoginComponent } from "../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      await api.post("/login", form.getFieldsValue());

      notification.success({
        message: "Login feito com sucesso!",
        description: "Use nossa plataforma!",
      });
      navigate("/");
    } catch {
      notification.error({
        message: "Erro ao fazer login!",
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