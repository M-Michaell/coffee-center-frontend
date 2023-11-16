// Router.js
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import TextDetails from "../pages/Details/text_details";
import Order from "../pages/Order/OrderPage";

const Home = React.lazy(() => import("../pages/Home/Home"));
const Loader = React.lazy(() => import("../general_components/Loader/Loader"));
const Cart = React.lazy(() => import("../pages/Cart/Cart"));
const Login = React.lazy(() => import("../pages/Auth/Login"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Registration = React.lazy(() =>
  import("../pages/registration/Registration")
);
const Account = React.lazy(() => import("../pages/Profile/ProfilePage"));
const Search = React.lazy(() => import("../pages/Search/component/Search"));
function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/product/details/" element={<TextDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="order/" element={<Order />} />
        <Route path="registration/" element={<Registration />} />
        <Route path="login/" element={<Login />} />
        <Route path="/profile/*" element={<Account />} />
        <Route path="/order/tracking/" element={<Account />} />
        <Route path="/search/:productname" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
