import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './demo/index';
import ErrorPage from "./error-page";
import GaodeMap from "./demo/gaode-map";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/gaode-map",
        element: <GaodeMap />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode> 
);