import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Results from "./pages/Results";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/equipes", element: <Teams /> },
  { path: "/resultados", element: <Results /> },
]);

export default router;
