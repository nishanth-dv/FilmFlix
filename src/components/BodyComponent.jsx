import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import BrowseComponent from "./BrowseComponent";

const BodyComponent = () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <LoginComponent />,
    },
    {
      path: "/Browse",
      element: <BrowseComponent />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default BodyComponent;
