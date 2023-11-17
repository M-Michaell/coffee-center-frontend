// Router.js
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import TextDetails from "../pages/Details/text_details";
import Order from "../pages/Order/OrderPage";
import ActivatePage from "../pages/registration/Activation";
import Reset from "../pages/registration/Reset";
import SendMail from "../pages/registration/SendMail";
import DeleteUser from "../pages/delete_user/DeleteUser";

const Home = React.lazy(() => import("../pages/Home/Home"));
const Loader = React.lazy(() => import("../general_components/Loader/Loader"));
const Cart = React.lazy(() => import("../pages/Cart/Cart"));
const Login = React.lazy(() => import("../pages/Auth/Login"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Registration= React.lazy(()=> import("../pages/registration/Registration"))
const Account= React.lazy(() => import("../pages/Profile/ProfilePage"))
function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/product/details/" element={<TextDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
          <Route path="/activate/:uid/:token" element={<ActivatePage />} />
          <Route path="/reset-password" element={<SendMail />} />
        <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/email/reset/confirm/:uid/:token" element={<Reset />} />
        <Route path="order/" element={<Order />} />
        <Route path="registration/" element={<Registration/>}/>
        <Route path="login/" element={<Login/>}/>
        <Route path="/profile/*" element={<Account/>}/>
        <Route path="/order/tracking/" element={<Account/>}/>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default Router;