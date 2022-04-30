import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo onClick={() => navigate("/menu")}>
        Pizza<b>.</b>
      </Logo>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  padding: 64px 0 32px;

  &:before {
    content: "";
    position: absolute;
    background: #ea1d2c;
    border-radius: 100%;
    top: -32vh;
    left: -18vh;
    width: 90vh;
    height: 90vh;
  }

  @media (max-height: 744px) {
    height: auto;
  }
`;

const Logo = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;

  b {
    color: #a3d1ae;
  }
`;

export default FormLayout;
