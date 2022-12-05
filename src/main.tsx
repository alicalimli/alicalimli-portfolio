import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./main.css";
import { ContextProvider } from "./setup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, ContactPage, ProjectsPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
