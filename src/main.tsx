import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./main.css";
import { ContextProvider } from "./setup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, ContactPage, ProjectsPage, Success } from "./pages";
import Layout from "./setup/router/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/success" element={<Success />} />
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/project" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
