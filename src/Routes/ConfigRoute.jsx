
import SignUp from '../Components/Page/Signup/SignUp';
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
import Flavour from '../Components/Page/Preset/Flavour/Flavour';
import NewLoginPage from "../Components/Page/Login/NewLoginPage";
import NewSignUp from "../Components/Page/Signup/NewSignUp"
import ForgotPassword from "../Components/Page/Password/ForgotPassword"
import SetNewPassword from "../Components/Page/Password/SetNewPassword"
import NewStoreAdd from "../Components/Page/Store/StoreAdd/NewStoreAdd"
import HorizontalStepperWithError from "../Components/Component/Stepper/Stepper";
const routesConfig = [
    // {
    //   path: "/",
    //   element: <Login />,
    // },
    {
      path:"/",
      element: <Protected Component={NewLoginPage} />
    },
    {
      path:"/SignUp",
      element: <Protected Component={NewSignUp} />
    },
    {
      path: "/StoreAdd",
      element:   <Protected Component={StoreAdd} />
    },
    {
      path: "/NewStoreAdd",
      element: <NewStoreAdd />,
    },
    {
      path: "/ForgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/SetNewPassword",
      element: <SetNewPassword />,
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
        },
        {
          path:"/Flavour",
          element:<Flavour/>
        },
       
      
      ],
    },
  ];



  export default routesConfig