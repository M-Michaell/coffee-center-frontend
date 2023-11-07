import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import TextDetails from "../pages/Details/text_details";
const Loader = React.lazy(() => import("../general_general_components/Loader/Loader"));
const Cart = React.lazy(() => import("../pages/Cart/Cart"));
const NotFound = React.lazy(() => import("../pages/NotFound"));


function Router() {

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
      <Route path="/" element={<TextDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default Router;
