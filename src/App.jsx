// src/App.jsx
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import SeekerDashboard from "./pages/provider_dashboard/SeekerDashboard";
import ProtectedRouter from "./routes/ProtectedRouter";
import ReferrerDashboard from "./pages/reffer_dashboard/ReferrerDashboard";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        {
          path: "/seeker-dashboard",
          element: (
            <ProtectedRouter>
              <SeekerDashboard />
            </ProtectedRouter>
          ),
        },
        {
          path: "/referrer-dashboard",
          element: (
            <ProtectedRouter>
              <ReferrerDashboard />
            </ProtectedRouter>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
