import { Button, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarTag>
      <Flex>
        <Link to="/">
          <Typography.Text className="logo">
            Pizza<b>.</b>
          </Typography.Text>
        </Link>
        <Button
          icon={<UserOutlined />}
          shape="round"
          size="large"
          onClick={() => navigate("/login")}
        >
          Área restrita
        </Button>
      </Flex>
    </NavbarTag>
  );
};

const NavbarTag = styled.nav`
  padding: 16px 0;
  background: transparent;
  margin-bottom: 32px;

  .logo {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 2px;

    b {
      color: #a3d1ae;
    }
  }

  button {
    color: #61c278;
    border: 2px solid #61c278;

    &:hover {
      color: #61c278;
      border: 2px solid #61c278;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

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

export default Navbar;
