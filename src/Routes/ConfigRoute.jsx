
import SignUp from '../Components/Page/Signup/SignUp';
import Login from "../Components/Page/Login/Login"
import StoreAdd from '../Components/Page/Store/StoreAdd/StoreAdd';
import Dashboard from "../Components/Page/Dashboard/Dashboard";
import Category from '../Components/Page/Category/Category';
import Profile from "../Components/Page/Category/Profile"

import Product from "../Components/Page/Product/Product"

import Layout from '../Layout/Layout';

const routesConfig = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/StoreAdd",
      element: <StoreAdd />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/Dashboard",
          element: <Dashboard />,
        },
        {
          path: "/Categoy",
          element: <Category />,
        },
        {
          path: "/Profile",
          element: <Profile />,
        },
        {
          path: "/Product",
          element: <Product />,
        },
      ],
    },
  ];



  export default routesConfig