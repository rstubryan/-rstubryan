import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import LandingPages from "@/pages/LandingPages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPages />,
  },
  {
    path: "/resume",
    element: <LandingPages />,
  },
  {
    path: "/portfolio",
    element: <LandingPages />,
  },
  {
    path: "/blog",
    element: <LandingPages />,
  },
  {
    path: "/contact",
    element: <LandingPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
