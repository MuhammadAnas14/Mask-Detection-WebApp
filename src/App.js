import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import Detection from "./Components/detection";
import SecuredRoute from "./Components/SecuredRoute";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route
            path="/detection"
            element={
              <SecuredRoute redirectTo="/">
                <Detection />
              </SecuredRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
