import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider autoHideDuration={2000}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </StrictMode>
);
