import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Exchanges from "./pages/Exchanges";
import Home from "./pages/Home";
import Mentor from "./pages/Mentor";
import Signal from "./pages/Signal";

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
  {
    path: "/signals",
    element: <Signal />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
