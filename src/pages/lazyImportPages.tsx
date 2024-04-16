import { lazy } from "react";

export const LazyMainPage = lazy(() => import("./Main/Main.page"));
export const LazyMoviesPage = lazy(() => import("./Movies/Movies.page"));
