import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "details/:id",
    element: <Details></Details>,
  }
]);

export default router;