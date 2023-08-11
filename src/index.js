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
import QQMap from "./demo/qq-map";
import BaiduMap from "./demo/baidu-map";

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
      {
        path: "/qq-map",
        element: <QQMap />,
      },
      {
        path: "/baidu-map",
        element: <BaiduMap />,
      }
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode> 
);