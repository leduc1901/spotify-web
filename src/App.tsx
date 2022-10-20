import { useState } from "react";
import "./App.css";
import { Footer } from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/common/Sidebar";
import { Page } from "./components/common/Page";
import { routes } from "./router/routes";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex", height: "calc(100vh - 200px)" }}>
            <Sidebar />
            <Routes>
              {routes.map(({ component, path, title }: any) => (
                <Route
                  key={path}
                  path={path}
                  element={<Page component={component} title={title} />}
                />
              ))}
            </Routes>
          </Box>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
