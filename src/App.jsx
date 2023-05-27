import { useRoutes } from "react-router-dom";
import "./App.css";
import Notfound from "./pages/notfound";
import Course from "./pages/course";
import Home from "./pages/home";
import Features from "./pages/features";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Layout from "./components/layouts/layout";
import Profile from "./pages/profile";
import Bookmark from "./pages/bookmark";
import UserLayout from "./components/userLayouts/userLayout";
import Gray from "./pages/gray";
import Ielts from "./pages/ielts";
import Python from "./pages/python";

function App() {
  const email = localStorage.getItem("email");

  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/course",
      element: <Course />,
    },
    {
      path: "/features",
      element: <Features />,
    },
    {
      path: "/gray",
      element: <Gray />,
    },
    {
      path: "/ielts",
      element: <Ielts />,
    },
    {
      path: "/python",
      element: <Python />,
    },
    {
      path: "/cart",
      element: email ? <Cart /> : <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "*",
      element: <Notfound />,
    },
    {
      path: "",
      element: <UserLayout />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "bookmark",
          element: <Bookmark />,
        },
      ],
    },
  ];
  const allRoutes = useRoutes(routes);
  return <Layout>{allRoutes}</Layout>;
}

export default App;
