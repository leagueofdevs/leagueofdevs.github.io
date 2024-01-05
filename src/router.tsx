import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/equipes", element: <Teams /> },
  { path: "/confrontos", element: <Matches /> },
]);

export default router;
