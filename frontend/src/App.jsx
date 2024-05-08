import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <h1 className="text-3xl font-bold underline">Hello world!</h1></div>,
  },
]);

export default router;
