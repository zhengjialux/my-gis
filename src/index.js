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
import TencentMap from "./demo/tencent-map";
import BaiduMap from "./demo/baidu-map";
import Mapbox from "./demo/mapbox";
import GoogleMap from "./demo/google-map";

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
        path: "/tencent-map",
        element: <TencentMap />,
      },
      {
        path: "/baidu-map",
        element: <BaiduMap />,
      },
      {
        path: "/mapbox",
        element: <Mapbox />,
      },
      {
        path: '/google-map',
        element: <GoogleMap />,
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