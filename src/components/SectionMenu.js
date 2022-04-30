import { Button, Typography } from "antd";
import styled, { keyframes } from "styled-components";

import Pizza from "../assets/pizza.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SectionMenu = () => (
  <Section id="products">
    <Flex>
      <Typography.Title>Conheça nossas pizzas!</Typography.Title>
      <img src={Pizza} alt="pizza" />
      <a href="#products">
        <Button shape="round" size="large">
          Ver mais!
        </Button>
      </a>
    </Flex>
  </Section>
);

const Section = styled.section`
  position: relative;
  scroll-margin-block-start: -700px;

  &:before {
    content: "";
    position: absolute;
    background: #ea1d2c;
    border-radius: 100%;
    top: -40vw;
    left: -5vw;
    width: 110vw;
    height: 60vw;
    z-index: -1;
  }

  @media (max-width: 576px) {
    &:before {
      top: -50vw;
    }

    div > h1 {
      font-size: 40px;
      color: #ea1d2c;
    }
  }

  @media (max-width: 768px) {
    div > h1 {
      color: #ffa8af;
      opacity: 1;
    }

    img {
      width: 60% !important;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    margin-top: 32px;
    font-size: 56px;
    color: #fff;
    opacity: 0.8;
  }

  img {
    width: 40%;
    animation: ${rotate} 10s linear infinite;
  }

  button {
    margin-top: 32px;
    width: 200px;
    background: #61c278;
    color: #fff;
    border: none;

    &:hover,
    &:focus,
    &:active {
      background: #438f55;
      color: #fff;
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

export default SectionMenu;
