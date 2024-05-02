import React from "react";
import Home from "../pages/HomePage/Home";
import Products from "../pages/ProductsPage/Products";
import Order from "../pages/OrderPage/Order";
import { createBrowserRouter } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/order",
    element: <Order/>,
  },
]);
