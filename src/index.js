import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./components/layout/header";
import Home from "./components/navigation/home";
import Profile from "./components/navigation/profile";
import Notifications from "./components/navigation/notifications";
import Groups from "./components/navigation/groups";
import Dashboard from "./components/navigation/dashboard";

import { ChakraProvider, Flex } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>home</h1>,
  },
  {
    path: "/profile",
    element: <h1>profile</h1>,
  },
  {
    path: "/groups",
    element: <h1>groups</h1>,
  },
  {
    path: "/notifications",
    element: <h1>notifications</h1>,
  },
  {
    path: "/dashboard",
    element: <h1>dashboard</h1>,
  },
  {
    path: "/settings",
    element: <h1>settings</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <ChakraProvider>
      <Flex gap={"10%"}>
        <Header />

        <RouterProvider router={router} />
      </Flex>
    </ChakraProvider>
  </>
);
