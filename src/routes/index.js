import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Register, Login } from "../pages";
import PrivateRoute from "./PrivateRoute";

export default function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/private" element={<PrivateRoute />}>
          {/* rotas privadas */}
        </Route>
      </Routes>
    </Router>
  );
}
