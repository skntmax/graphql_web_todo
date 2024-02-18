import * as React from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./Components/home/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
