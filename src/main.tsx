import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./main.css";
import { ContextProvider } from "./setup";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  ProjectPage,
  ProjectsPage,
  Success,
} from "./pages";
import Layout from "./setup/router/Layout";
import { HamburgerMenu } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <HamburgerMenu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="success" element={<Success />} />
          <Route element={<Layout />}>
            <Route path="projects">
              <Route index element={<ProjectsPage />} />
              <Route path=":projectName" element={<ProjectPage />} />
            </Route>
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
