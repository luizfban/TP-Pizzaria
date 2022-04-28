import { Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => (
  <NavbarTag>
    <Flex>
      <Link to="/dashboard">
        <Typography.Text className="logo">
          Pizza<b>.</b>
        </Typography.Text>
      </Link>
    </Flex>
  </NavbarTag>
);

const NavbarTag = styled.nav`
  padding: 16px 0;
  background: #1890ff;
  margin-bottom: 32px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

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
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
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
