import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exchanges from "./pages/Exchanges";
import Home from "./pages/Home";
import Mentor from "./pages/Mentor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mentorship",
    element: <Mentor />,
  },
  {
    path: "/exchange",
    element: <Exchanges />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
