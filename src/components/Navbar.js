import { Typography, Menu, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu
    items={[
      {
        label: <Link to="/products">Ver produtos</Link>,
      },
      {
        label: <Link to="/orders">Ver pedidos</Link>,
      },
      {
        onClick: () => {
          sessionStorage.removeItem("user");
          window.location.href = "/login";
        },
        label: <span>Sair</span>,
      },
    ]}
  />
);

const Navbar = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <NavbarTag>
      <Wrapper>
        <Link to="/">
          <Typography.Text className="logo">
            Pizza<b>.</b>
          </Typography.Text>
        </Link>
        <Dropdown overlay={menu} placement="bottomLeft">
          <UserIcon>
            <Avatar icon={<UserOutlined />} />
            <Flex>
              <Typography.Text
                strong
                style={{
                  lineHeight: 1,
                  marginBottom: "4px",
                  color: "#e4e8f0",
                }}
              >
                {user ? user.employee.name : ""}
              </Typography.Text>
              <Typography.Text
                style={{
                  lineHeight: 1,
                  marginBottom: "4px",
                  color: "#e4e8f0",
                  fontSize: "12px",
                }}
              >
                {user ? user.employee.email : ""}
              </Typography.Text>
            </Flex>
            <DownOutlined />
          </UserIcon>
        </Dropdown>
      </Wrapper>
    </NavbarTag>
  );
};

const NavbarTag = styled.nav`
  padding: 12px 0;
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

const Wrapper = styled.div`
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

const UserIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .anticon-down svg {
    fill: #a3d1ae;
  }

  .ant-avatar {
    background: #a3d1ae;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;

export default Navbar;
