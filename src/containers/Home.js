import { PageHeader } from "antd";

import { Home as HomeComponent } from "../components";

const routes = [
  {
    path: "index",
    breadcrumbName: "Home",
  },
];

const Home = () => (
  <>
    <PageHeader title="Bem vindo!" breadcrumb={{ routes }} />
    <HomeComponent />
  </>
);

export default Home;
