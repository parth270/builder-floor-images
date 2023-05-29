import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UploadsRoute from "./routes/uploads";
import Home from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "uploads/:id",
    element: <UploadsRoute />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
