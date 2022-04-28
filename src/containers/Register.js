import { useState } from "react";
import { Form, notification } from "antd";

import api from "../services/api";
import { Register as RegisterComponent } from "../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState("customer");
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const url = userType === "customer" ? "/signup" : "add-employee";

  const onSubmit = async () => {
    try {
      await api.post(url, form.getFieldsValue());

      notification.success({
        message: "Sucesso ao cadastrar usuário!",
        description:
          "Agora você tem acesso a plataforma para realizar diversas ações de acordo com o tipo de usuário",
      });

      navigate("/login");
    } catch {
      notification.error({
        message: "Erro ao cadastrar usuário!",
        description: "Tente novamente...",
      });
    }
  };

  return (
    <RegisterComponent
      {...{
        userType,
        setUserType,
        form,
        onSubmit,
        isLoading: false,
      }}
    />
  );
};

export default Register;
