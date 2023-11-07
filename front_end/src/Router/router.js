import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import TextDetails from "../pages/Details/text_details";

const Home = React.lazy(()=> import("../pages/Home/Home"))
const Loader = React.lazy(() => import("../general_components/Loader/Loader"));
const Cart = React.lazy(() => import("../pages/Cart/Cart"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

function Router() {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
      <Route path="/product/details/" element={<TextDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
          <Route path="home/" element={<Home/>}/>
      </Routes>
    </Suspense>
  );
}

export default Router;
