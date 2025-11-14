import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import EditCoffee from "./components/EditCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:5000/coffee"),
        element: <Home />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/edit-coffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
        element: <EditCoffee />,
      },
      {
        path: "/coffee-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
        element: <CoffeeDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
