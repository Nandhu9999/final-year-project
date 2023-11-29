import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <LandingPage />},
    {path: "/login", element: <Login />},
    {path: "/c", element: <Dashboard />},
    {path: "/c/:cid", element: <Dashboard />},
    {path: "/check", element: <Dashboard />},
    {path: "*", element: <NotFound />}
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App