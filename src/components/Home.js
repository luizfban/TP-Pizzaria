import { Button, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Row style={{ flexDirection: "column" }}>
      <Button
        ghost
        shape="round"
        type="primary"
        size="large"
        style={{ marginBottom: "16px" }}
        onClick={() => navigate("/products")}
      >
        Ver produtos
      </Button>
      <Button
        ghost
        shape="round"
        type="primary"
        size="large"
        style={{ marginBottom: "16px" }}
        onClick={() => navigate("/orders")}
      >
        Ver pedidos
      </Button>
      <Button
        ghost
        shape="round"
        type="primary"
        size="large"
        onClick={() => navigate("/menu")}
      >
        Ver Menu
      </Button>
    </Row>
  );
};

export default Home;
