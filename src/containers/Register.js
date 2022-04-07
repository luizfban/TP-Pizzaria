import { useState } from "react";
import { Form, notification } from "antd";
import { useMutation } from "react-query";

import api from "../services/api";
import { Register as RegisterComponent } from "../components";

const Register = () => {
  const [userType, setUserType] = useState("customer");
  const [form] = Form.useForm();

  const url = userType === "customer" ? "/signup" : "add-employee";

  const { isLoading, mutate: postUser } = useMutation(async () => {
    return await api.post(url, form.getFieldsValue());
  });

  const onSubmit = async () => {
    try {
      postUser();
      notification.success({
        message: "Sucesso ao cadastrar usuário!",
        description:
          "Agora você tem acesso a plataforma para realizar diversas ações de acordo com o tipo de usuário",
      });
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
        isLoading,
      }}
    />
  );
};

export default Register;
