import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
const Loader = React.lazy(() => import("../pages/NotFound"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="*" element={<NotFound />} />
          <Route path="home/" element={<Home/>}/>
      </Routes>
    </Suspense>
  );
}

export default Router;
