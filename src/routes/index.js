import { Layout } from "../components";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  Register,
  Login,
  Home,
  AddProducts,
  AddOrders,
  Menu,
  Products,
  Orders,
} from "../pages";
import PrivateRoute from "./PrivateRoute";

export default function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Navigate to="/menu" replace />} />
        <Route
          path="/"
          element={
            <Layout>
              <PrivateRoute />
            </Layout>
          }
        >
          <Route index element={<Home />} />
          <Route path="products/new" element={<AddProducts />} />
          <Route path="products" element={<Products />} />
          <Route path="orders/new" element={<AddOrders />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}
