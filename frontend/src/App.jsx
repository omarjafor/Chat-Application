import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Home /></PrivateRoute>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
