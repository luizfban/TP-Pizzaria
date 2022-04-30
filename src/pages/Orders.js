import {
  Button,
  Modal,
  notification,
  PageHeader,
  Select,
  Spin,
  Table,
} from "antd";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

import api from "../services/api";
import { itemRender } from "../utils";
import styled from "styled-components";
import { useState } from "react";

const routes = [
  {
    path: "/",
    breadcrumbName: "Home",
  },
  {
    path: "/orders",
    breadcrumbName: "Pedidos",
  },
];

const size = ["Pequena", "Média", "Grande", "Família"];

const statusMap = {
  PENDING: "Pendente",
  PROCESSING: "Fazendo",
  COMPLETED: "Pronto",
  PAID: "Pago",
};

const background = {
  PENDING: "#dba970",
  PROCESSING: "#dbd270",
  COMPLETED: "#7082db",
  PAID: "#70db90",
};

const getOrders = async () => {
  const { data } = await api.get("/orders");
  return data;
};

const editOrders = async (id, status) => {
  try {
    await api.put(`/order/${id}`, { status });
    window.location.reload();
  } catch {
    notification.error({ message: "Erro ao editar status" });
  }
};

const Products = () => {
  const { data, isLoading } = useQuery("orders", getOrders);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();

  const dataSource = !!data
    ? data.map((e) => ({
        key: e.order.id,
        name: `Pedido: ${e.order.id}`,
        price: e.order.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
        status: (
          <Pill status={e.order.status}>{statusMap[e.order.status]}</Pill>
        ),
        formattedStatus: e.order.status,
        products: e.products
          .map(
            (product) =>
              `${product.name} - ${size[product.prices.size]} (${
                product.quantity
              } unidade)`
          )
          .join(", "),
      }))
    : [];

  const columns = [
    {
      title: "Número pedido",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Preço",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Produtos",
      dataIndex: "products",
      key: "products",
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: (e) => (
        <Button
          type="primary"
          shape="round"
          onClick={() => {
            setSelectedOrder(e);
            setIsModalVisible(true);
          }}
        >
          Editar status
        </Button>
      ),
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PageHeader
          title="Lista de pedidos"
          breadcrumb={{ routes, itemRender }}
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          ghost
          onClick={() => navigate("new")}
        >
          Novo
        </Button>
      </div>
      {isLoading ? (
        <Spin tip="Carregando..." />
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}
      <Modal
        title={`Editar status - ${selectedOrder.name}`}
        visible={isModalVisible}
        onOk={() => editOrders(selectedOrder.key, selectedStatus)}
        onCancel={() => setIsModalVisible(false)}
      >
        <Select
          defaultValue={statusMap[selectedOrder.formattedStatus]}
          onChange={(value) => setSelectedStatus(value)}
          style={{ width: "100%" }}
        >
          {Object.values(statusMap).map((status, index) => (
            <Select.Option key={status} value={index}>
              {status}
            </Select.Option>
          ))}
        </Select>
      </Modal>
    </>
  );
};

const Pill = styled.div`
  width: fit-content;
  background: ${({ status }) => background[status]};
  color: #fff;
  border-radius: 4px;
  padding: 6px 12px;
`;

export default Products;
