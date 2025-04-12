import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import OneWaySearchPage from "../pages/OneWaySearchPage/OneWaySearchPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/one-way-search',
          element: <OneWaySearchPage/>
        }
      ]
    },
])

export default router;