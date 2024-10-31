import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import CreatePage from "../Pages/CreatePage/CreatePage";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
      },
      {
        path: "/createPage",
        element: <CreatePage />,
      },
      {
        path: "/updatePage/:id",
        element: <UpdatePage />,
        loader : ({params})=>fetch(`http://localhost:5000/readProductById/${params.id}`)
      },
    ],
  },
]);

export default router;
