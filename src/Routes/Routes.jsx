import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Allusers from "../pages/Dashboard/Allusers/Allusers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import Updateitem from "../pages/Dashboard/Updateitem/Updateitem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
  
  export const  router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
      },
      {
        path:'/order',
        element:<Order></Order>
    },
    {
      path:'/login',
      element:<Login></Login>
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
},
{
  path:'additems',
  element:<AddItems></AddItems>
},
  ,
{
  path:'/secret',
  element:<PrivateRoute><Secret></Secret></PrivateRoute>
}
]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
path:'userHome',
element:<UserHome></UserHome>
        },
        {
          path:'adminHome',
          element:<AdminHome></AdminHome>
                  },
        {
          path:'cart',
          element:<Cart></Cart>
        },
        //admin routes
        {
          path:'allusers',
          element:<Allusers></Allusers>
        },
        {
          path:'manageitems',
          element:<ManageItem></ManageItem>
        },
       
        {
          path:'updateitem/:id',
          element:<Updateitem></Updateitem>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        },

        
{
  path:'payment',
  element:<Payment></Payment>
 
},
{
  path:'paymenthistory',
  element:<PaymentHistory></PaymentHistory>
 
}


        
      ]

    }
  ]);