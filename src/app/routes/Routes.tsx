import { Suspense } from "react";
import Loader from "@shared/ui/Loader/Loader";
import { Routes as ReactRoutes, Route } from "react-router-dom";

import { LazyMainPage, LazyMoviesPage } from "@pages/lazyImportPages.tsx";
import { NotFoundPage } from "@pages/NotFoundPage";

export function Routes() {
  return (
    <Suspense fallback={<Loader name="Grid" />}>
      <ReactRoutes>
        <Route element={<LazyMainPage />} path="/" />
        <Route element={<LazyMoviesPage />} path="/movies" />

        <Route element={<NotFoundPage />} path="*" />
      </ReactRoutes>
    </Suspense>
  );
}
