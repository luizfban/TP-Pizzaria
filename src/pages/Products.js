import { Button, List, PageHeader, Spin, Typography } from "antd";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

import api from "../services/api";
import { itemRender } from "../utils";

const routes = [
  {
    path: "/",
    breadcrumbName: "Home",
  },
  {
    path: "/products",
    breadcrumbName: "Produtos",
  },
];

const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

const Products = () => {
  const { data, isLoading } = useQuery("products", getProducts);
  const navigate = useNavigate();

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
          title="Lista de produtos"
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
        <List
          className="demo-loadmore-list"
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button type="primary" danger>
                  Deletar
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={<Typography.Text>{item.name}</Typography.Text>}
                description={item.ingredients.join(", ")}
              />
              <div>
                <b>Preço: </b>
                {item.price}
              </div>
            </List.Item>
          )}
        />
      )}
    </>
  );
};

export default Products;
