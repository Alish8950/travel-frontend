import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { UserProvider } from "./context/UserContext.jsx";
import Home from "./pages/Home.jsx";
import AuthLayout from "./middleware/authMiddleware.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AllJourneys from "./pages/AllJourneys.jsx";
import AddJourney from "./pages/AddJourney.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout authentication>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-journeys",
        element: (
          <AllJourneys />
          // <AuthLayout authentication>
          // </AuthLayout>
        ),
      },
      {
        path: "/add-journey",
        element: (
          <AddJourney />
          // <AuthLayout authentication>
          // </AuthLayout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <SnackbarProvider autoHideDuration={2000}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </UserProvider>
  </StrictMode>
);
