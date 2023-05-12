import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import LogIn from "./components/Login/LogIn.jsx";
import SingUp from "./components/SingUp/SingUp.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import ViewRecipes from "./components/ViewRecipes/ViewRecipes.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "singUp",
        element: <SingUp></SingUp>,
      },
      {
        path: "viewRecipes/:id",
        element: (
          <PrivateRoute>
            <ViewRecipes></ViewRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-chef-hunter.vercel.app/chef/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>
);
