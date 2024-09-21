import React from "react";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import BrowseComponent from "./components/BrowseComponent";

function App() {
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
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
