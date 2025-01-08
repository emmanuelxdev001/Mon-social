import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Registration from "../pages/auth/Registration";
import SignIn from "../pages/auth/SignIn";
import AddProduct from "../pages/screen/AddProduct";
import AddComp from "../pages/screen/AddComp";
import CheckoutScreen from "../pages/screen/CheckoutScreen";
import UserRegistration from "../pages/auth/UserRegistration";
import AdminRegistration from "../pages/auth/AdminRegistration";
import AdminSignIN from "../pages/auth/AdminSignIN";
import UserSignIn from "../pages/auth/UserSignIn";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminDataBase from "../pages/admin/DataBase";
import AdminProfile from "../pages/admin/AdminProfile";
import Layout from "../components/common/Layout";
import Order from "../pages/admin/Order";
import HistroyPage from "../pages/admin/HistroyPage";
import UserDashboard from "../pages/user/UserDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserLayout from "../pages/user/UserLayout";
import UserProfile from "../pages/user/UserProfile";
import UserCalender from "../pages/user/UserCalender";
import UserHistory from "../pages/user/UserHistory";
import UserOrders from "../pages/user/UserOrders";
import AdminNotification from "../pages/admin/AdminNotification";
import Shops from "../pages/admin/Shops";
// import Store from "../pages/screen/Store";
import Product from "../pages/user/Product";
import CalenderPage from "../pages/admin/CalenderPage";
import BuyerLayout from "../pages/buyer/BuyerLayout";
import BuyerHistory from "../pages/buyer/BuyerHistroy";
import BuyerCalender from "../pages/buyer/BuyerCalender";
import BuyerChating from "../pages/buyer/BuyerChating";
import BuyerDashBoard from "../pages/buyer/BuyerDashBoard";
import BuyerProfile from "../pages/buyer/BuyerProfile";
import DataBase from "../pages/admin/DataBase";
import AddStore from "../pages/screen/AddStore";
import UserProfileScreen from "../pages/user/UserProfileScreen";
import UserStore from "../pages/user/UserStore";
import AdminProfileScreen from "../pages/admin/AdminProfileScreen";
import VerifyPayment from "../pages/payment/VerifyPayment";
import MakePayment from "../pages/payment/MakePayment";
import AddList from "../pages/screen/AddList";
import ListCheckout from "../pages/screen/ListCheckout";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/sign-up",
    element: <Registration />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/user-sign-up",
    element: <UserRegistration />,
  },
  {
    path: "*",
    element: <>Error</>,
  },
  {
    path: "/user-sign-in",
    element: <UserSignIn />,
  },
  {
    path: "/admin-sign-up",
    element: <AdminRegistration />,
  },
  {
    path: "/admin-sign-in",
    element: <AdminSignIN />,
  },
  {
    path: "/check-out",
    element: <CheckoutScreen />,
  },

  {
    path: "/product",
    element: <Product />,
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "/admin/database",
        element: <DataBase />,
      },
      {
        path: "/admin/database/ad",
        element: <AdminDataBase />,
      },
      {
        path: "/admin/calender",
        element: <CalenderPage />,
      },
      {
        path: "/admin/profile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/profiles",
        element: <AdminProfileScreen />,
      },
      {
        path: "/admin/shop",
        element: <Shops />,
      },
      {
        path: "/admin/orders",
        element: <Order />,
      },

      {
        path: "/admin/histroys",
        element: <HistroyPage />,
      },
      {
        path: "/admin/notification",
        element: <AdminNotification />,
      },
    ],
  },

  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },

      {
        path: "/user/calender",
        element: <UserCalender />,
      },
      {
        path: "/user/histroy",
        element: <UserHistory />,
      },
      {
        path: "/user/order",
        element: <UserOrders />,
      },
      {
        path: "/user/store",
        element: <UserStore />,
      },
      {
        path: "/user/add-store",
        element: <AddStore />,
      },
      {
        path: "/user/update-profile",
        element: <UserProfile />,
      },
      {
        path: "/user/profile-screen",
        element: <UserProfileScreen />,
      },
      {
        path: "/user/add-pro",
        element: <AddProduct />,
      },
    ],
  },
  // {
  //   path: "/buyer",
  //   element: <BuyerLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <BuyerDashBoard />,
  //     },
  //     {
  //       path: "/buyer/calender",
  //       element: <BuyerCalender />,
  //     },
  //     {
  //       path: "/buyer/message",
  //       element: <BuyerChating />,
  //     },
  //     {
  //       path: "/buyer/histroy",
  //       element: <BuyerHistory />,
  //     },
  //     {
  //       path: "/buyer/profile",
  //       element: <BuyerProfile />,
  //     },
  //   ],
  // },
  {
    path: "/make-payment",
    element: <MakePayment />,
  },
  {
    path: "/verify-payment",
    element: <VerifyPayment />,
  },
  {
    path: "/add-list",
    element: <AddList />,
  },
  {
    path: "/list-checkout",
    element: <ListCheckout />,
  },
]);
