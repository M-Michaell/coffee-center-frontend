import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Loader = React.lazy(() => import("../components/Loader/Loader"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
