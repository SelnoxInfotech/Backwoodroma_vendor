
import SignUp from '../Components/Page/Signup/SignUp';
import Login from "../Components/Page/Login/Login"
import StoreAdd from '../Components/Page/Store/StoreAdd/StoreAdd';
import Dashboard from "../Components/Page/Dashboard/Dashboard";
import Category from '../Components/Page/Category/Category';
import Profile from "../Components/Page/Category/Profile"
import Product from "../Components/Page/Product/Product"
import Layout from '../Layout/Layout';
import TopSellingProduct from '../Components/Page/Product/TopSellingProduct';
import Inventory from "../Components/Page/Product/Inventory"
import Protected from "./ProtectedRouting"
import OrderList from "../Components/Page/Order/OrderList"
import AllOrder from '../Components/Page/Order/AllOrder';
import HorizontalStepperWithError from "../Components/Component/Stepper/Stepper"
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
      path:"/User-Stepper",
      element:<HorizontalStepperWithError/>
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/Dashboard",
          element: <Protected Component={Dashboard} />,
        },
        {
          path: "/Category",
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
        {
          path:"/TopSellingProduct",
          element:<TopSellingProduct/>
        },
        {
          path:"/Inventory",
          element:<Inventory/>
        },
        {
          path:"/OrderList",
          element:<OrderList/>
        },
        {
          path:"/AllOrder",
          element:<AllOrder/>
        }
      ],
    },
  ];



  export default routesConfig