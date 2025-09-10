import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ProviderDashboard from "./pages/provider_dashboard/ProviderDashboard";
import RefferDashboard from "./pages/reffer_dashboard/RefferDashboard";
import ProtectedRouter from "./routes/ProtectedRouter";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/signup",
          element: <SignUp />,
        },

        {
          path: "/providerDashboard",
          element: (
            <ProtectedRouter>
              <ProviderDashboard />
            </ProtectedRouter>
          ),
        },
        {
          path: "/refferDashboard",
          element: (
            <ProtectedRouter>
              <RefferDashboard />
            </ProtectedRouter>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
