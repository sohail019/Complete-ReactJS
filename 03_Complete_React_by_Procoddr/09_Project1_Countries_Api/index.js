import ReactDOM from "react-dom/client";
import {App} from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { ErrorPage } from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
