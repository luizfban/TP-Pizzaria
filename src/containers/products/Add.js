import { PageHeader } from "antd";
import { AddProducts as AddProductsComponent } from "../../components/products";

const routes = [
  {
    path: "index",
    breadcrumbName: "Home",
  },
  {
    path: "second",
    breadcrumbName: "Produtos",
  },
  {
    path: "third",
    breadcrumbName: "Adicionar",
  },
];

const AddProducts = () => (
  <>
    <PageHeader title="Adicione um produto" breadcrumb={{ routes }} />
    <AddProductsComponent />
  </>
);

export default AddProducts;
