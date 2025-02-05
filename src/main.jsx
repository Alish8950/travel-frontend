import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { UserProvider } from "./context/UserContext.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AllJourneys from "./pages/AllJourneys.jsx";
import AddJourney from "./pages/AddJourney.jsx";
import PrivateRoute from "./middleware/authMiddleware.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PrivateRoute element={<Home />} />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/all-journeys",
        element: <PrivateRoute element={<AllJourneys />} />,
      },
      {
        path: "/add-journey",
        element: <PrivateRoute element={<AddJourney />} />,
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
