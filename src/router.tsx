import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Teams from "./pages/Teams";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/equipes", element: <Teams /> },
]);

export default router;
