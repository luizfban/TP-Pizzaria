import { Footer } from "antd/lib/layout/layout";
import { useQuery } from "react-query";

import { Menu as MenuComponent, NavbarMenu, SectionMenu } from "../components";
import api from "../services/api";

const getProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

const Menu = () => {
  const { data, isLoading } = useQuery("products", getProducts);

  return (
    <>
      <NavbarMenu />
      <SectionMenu />
      <MenuComponent {...{ products: data, isLoading }} />
      <Footer
        style={{
          background: "#ea1d2c",
          color: "#fff",
          textAlign: "center",
          marginTop: "56px",
        }}
      >
        @copyright TP Pizzaria
      </Footer>
    </>
  );
};

export default Menu;
