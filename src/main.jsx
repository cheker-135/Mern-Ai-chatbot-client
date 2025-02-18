import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { ColorModeContext, useMode } from "./theme.tsx";
import { ThemedApp } from './theme.tsx';
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;


//const theme = createTheme({
//  typography: {
  //  fontFamily: "Roboto Slab, serif",
    //allVariants: { color: "white" },
//  },
//});
  //const [theme, colorMode] = useMode();
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <ThemedApp> {/* Use the ThemedApp component */}
            <Toaster position="top-right" />
            <App />
          </ThemedApp>
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
