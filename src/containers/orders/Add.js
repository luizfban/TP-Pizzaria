import { Form, notification, PageHeader } from "antd";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { AddOrders as AddOrdersComponent } from "../../components/orders";
import api from "../../services/api";
import { itemRender } from "../../utils";

const routes = [
  {
    path: "/",
    breadcrumbName: "Home",
  },
  {
    path: "/orders",
    breadcrumbName: "Pedidos",
  },
  {
    path: "/orders/new",
    breadcrumbName: "Adicionar",
  },
];

const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

const AddOrders = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery("products", getProducts);

  const onSubmit = async () => {
    try {
      await api.post("/order", form.getFieldsValue());

      notification.success({
        message: "Pedido adicionado com sucesso!",
      });
      navigate("/");
    } catch {
      notification.error({
        message: "Erro ao cadastrar ordem de pedido!",
      });
    }
  };
  return (
    <>
      <PageHeader
        title="Adicione um pedido"
        breadcrumb={{ routes, itemRender }}
      />
      <AddOrdersComponent {...{ form, onSubmit, products: data, isLoading }} />
    </>
  );
};

export default AddOrders;
