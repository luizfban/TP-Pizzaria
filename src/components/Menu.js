import { Card, Col, Divider, Row, Spin, Typography } from "antd";
import styled from "styled-components";

const Menu = ({ products, isLoading }) => (
  <>
    <CustomDivider />
    <Container>
      <Typography.Title level={2} style={{ margin: "42px 0" }}>
        Cardápio
      </Typography.Title>
      <Row gutter={[16, 16]}>
        {isLoading ? (
          <Spin tip="Carregando" />
        ) : (
          products.map((product) => (
            <Col md={8} xs={24}>
              <Card>
                <Typography.Title level={5}>{product.name}</Typography.Title>
                <Typography.Text type="secondary">
                  {product.ingredients.join(", ")}
                </Typography.Text>
                <Divider />
                <div>
                  <Row
                    justify="space-between"
                    style={{
                      width: "100%",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Typography.Text strong>Pequena: </Typography.Text>
                    <Pill>
                      {product.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Pill>
                  </Row>
                  <Row
                    justify="space-between"
                    style={{
                      width: "100%",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Typography.Text strong>Média: </Typography.Text>
                    <Pill>
                      {product.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Pill>
                  </Row>
                  <Row
                    justify="space-between"
                    style={{
                      width: "100%",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <Typography.Text strong>Grande: </Typography.Text>
                    <Pill>
                      {product.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Pill>
                  </Row>
                </div>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  </>
);

const Pill = styled.div`
  border-radius: 8px;
  background: #61c278;
  padding: 6px 12px;
  color: #fff;
`;

const CustomDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 64px;
  background: linear-gradient(
    to right,
    #ea1d2c 0%,
    #ea1d2c 23%,
    #fff 33%,
    #fff 66%,
    #fff 67%,
    #fff 67%,
    #ea1d2c 100%
  );
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto 40px;
  padding: 0 1rem;

  .ant-card {
    box-shadow: 0 2px 6px rgb(0 0 0 / 5%), 0 4px 16px rgb(0 0 0 / 6%);
    border-radius: 8px;
    transition: 0.2s all;
    height: 100%;

    .ant-card-body {
      height: 100%;
    }

    &:hover {
      transform: scale(1.06);
    }
  }

  @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 992px) {
    max-width: 992px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export default Menu;
