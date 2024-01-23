import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorPage from "./containers/errors/error_page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tabla from "./components/Tabla";
import BoardCreate from "./components/BoardCreate";
import BoardList from "./components/BoardList";
import RelatedTables from "./components/RelatedTables";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/tabla",
        element: <Tabla />,
      },
      {
        path: "/crear",
        element: <BoardCreate />,
      },
      {
        path: "/mistablas",
        element: <BoardList />,
      },
      {
        path: "/mistablas/:id",
        element: <RelatedTables />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
