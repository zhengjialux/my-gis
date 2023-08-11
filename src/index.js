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
import Mapbox from "./demo/mapbox";
import GoogleMap from "./demo/google-map";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/google-map',
        element: <GoogleMap />,
      },
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
      },
      {
        path: "/mapbox",
        element: <Mapbox />,
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