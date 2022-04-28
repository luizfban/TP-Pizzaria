import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Space>
      <Button
        ghost
        shape="round"
        type="primary"
        size="large"
        onClick={() => navigate("/products/new")}
      >
        Adicionar produto
      </Button>
      <Button
        ghost
        shape="round"
        type="primary"
        size="large"
        onClick={() => navigate("/orders/new")}
      >
        Novo pedido
      </Button>
    </Space>
  );
};

export default Home;
